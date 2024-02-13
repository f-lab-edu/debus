import { atom, useAtomValue } from 'jotai';
import { onUserStateChange } from 'src/api/firebase';

export type UserTypes = {
    uid: string;
    displayName: string | null;
    photoURL: string | null;
    email: string | null;
} | null;

const authAtom = atom<UserTypes | null>(null);
authAtom.onMount = (set) => {
    const unsubscribe = onUserStateChange(set);
    return () => unsubscribe();
};

export const useAuth = () => useAtomValue(authAtom);
