import { UserTypes } from '@store/atoms/auth';
import { MutationFunction } from '@tanstack/react-query';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { DataSnapshot, get, getDatabase, ref, set } from 'firebase/database';
import { nanoid } from 'nanoid';
import { ChatRoomInfo, ChatRoomInfoType } from 'src/@types/chatRoom';
import { assert } from 'src/utils/assert';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const provider = new GoogleAuthProvider();

export const login = () =>
    signInWithPopup(auth, provider).then(async (res) => {
        const user = res.user;
        const isRegistered = await checkUserExists(user.uid);
        if (!isRegistered) await createUser(user);
    });

export const logout = () => signOut(auth);

export const onUserStateChange = (callback: (user: UserTypes | null) => void) =>
    onAuthStateChanged(auth, async (user) => {
        callback(
            user && {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email,
            },
        );
    });

const checkUserExists = async (userId: string) => get(ref(db, `users/${userId}`)).then((snapshot) => snapshot.exists());

const createUser = (user: UserTypes) => {
    assert(user !== null, '사용자가 없습니다.');
    return set(ref(db, `users/${user.uid}`), {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
    });
};

const checkChatRoomExists = async (chatRoomId: string) =>
    get(ref(db, `lines/${chatRoomId}`)).then((snapshot) => snapshot.exists());

export const createChatRoom: MutationFunction<string, [UserTypes, ChatRoomInfo]> = async ([user, chatRoomInfo]) => {
    const id = nanoid();
    const isExistingChatroom = await checkChatRoomExists(id);
    if (isExistingChatroom) {
        throw new Error('이미 존재하는 정류장 번호입니다.');
    }
    const newChatRoom: ChatRoomInfoType = {
        ...chatRoomInfo,
        id,
        options: chatRoomInfo.options.split(','),
        members: [
            {
                userId: user?.uid ?? 'tempId',
                name: user?.displayName ?? 'noname',
                role: 'owner',
            },
        ],
        createAt: new Date().getTime(),
        status: 'pending',
    };
    await set(ref(db, `lines/${id}`), newChatRoom);
    return id;
};

export const getChatRoom = async (id: string) => {
    return get(ref(db, `lines/${id}`)).then((snapshot: DataSnapshot) => {
        if (snapshot.exists()) return snapshot.val();
        return [];
    });
};
