import { atom } from 'jotai';
import { onUserStateChange } from 'src/api/firebase';

export type UserTypes = {
    uid: string;
    displayName: string | null;
    photoURL: string | null;
    email: string | null;
} | null;

export const authAtom = atom<UserTypes | null>(null);
authAtom.onMount = (set) => onUserStateChange(set);
