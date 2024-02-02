import { User } from 'firebase/auth';
import { atom, useAtomValue } from 'jotai';
import { onUserStateChange } from 'src/api/firebase';

const authAtom = atom<User | null>(null);
authAtom.onMount = (set) => {
    onUserStateChange(set);
};

export const useAuth = () => useAtomValue(authAtom);
