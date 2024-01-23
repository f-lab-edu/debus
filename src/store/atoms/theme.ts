import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const darkMode_storage_atom = atomWithStorage('darkMode', false);
export const darkMode_atom = atom(
    (get) => get(darkMode_storage_atom),
    (_, set, darkMode: boolean) => {
        set(darkMode_storage_atom, darkMode);
    },
);
