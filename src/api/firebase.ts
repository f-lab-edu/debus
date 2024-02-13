import { UserTypes } from '@store/atoms/auth';
import { initializeApp } from 'firebase/app';
import {
    GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { get, getDatabase, ref, set } from 'firebase/database';
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

export const login = async () => {
    return signInWithPopup(auth, provider)
        .then(async (res) => {
            const user = res.user;
            const isRegistered = await checkUserExists(user.uid);
            if (!isRegistered)
                createUser(user).catch((error) => {
                    throw new Error(error);
                });
        })
        .catch((error) => {
            throw new Error(error);
        });
};

export const logout = async () => {
    return signOut(auth).catch((error) => {
        throw new Error(error);
    });
};

export const onUserStateChange = (callback: (user: UserTypes | null) => void) =>
    onAuthStateChanged(auth, async (user) => {
        let data = {} as UserTypes;
        if (user) {
            data = {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email,
            };
        } else data = null;
        callback(data);
    });

const checkUserExists = async (userId: string) => {
    return get(ref(db, `users/${userId}`)).then((snapshot) =>
        snapshot.exists(),
    );
};

const createUser = (user: UserTypes) => {
    assert(user !== null, '사용자가 없습니다.');
    return set(ref(db, `users/${user.uid}`), {
        name: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
    });
};