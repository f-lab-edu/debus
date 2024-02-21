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
            user
                ? {
                      uid: user.uid,
                      displayName: user.displayName,
                      photoURL: user.photoURL,
                      email: user.email,
                  }
                : null,
        );
    });

const checkUserExists = async (userId: string) =>
    get(ref(db, `users/${userId}`)).then((snapshot) => snapshot.exists());

const createUser = (user: UserTypes) => {
    assert(user !== null, '사용자가 없습니다.');
    return set(ref(db, `users/${user.uid}`), {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
    });
};
