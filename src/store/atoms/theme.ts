import { atom } from 'jotai';

export const darkMode_base_atom = atom(false);
export const darkMode_atom = atom(
    (get) => get(darkMode_base_atom),
    (_, set, darkMode: boolean) => {
        set(darkMode_base_atom, darkMode);
        updateDarkMode(darkMode);
    },
);

const updateDarkMode = (darkMode: boolean) => {
    if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
};
