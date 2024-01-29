import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const darkModeStorageAtom = atomWithStorage('darkMode', false);
export const darkModeAtom = atom(
    (get) => get(darkModeStorageAtom),
    (_, set) => set(darkModeStorageAtom, (prev) => !prev),
);
