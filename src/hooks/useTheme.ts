import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';

export type DarkModeState = [boolean, (localTheme?: boolean) => void];

const darkModeAtom = atom(false);

export const useTheme = (): DarkModeState => {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom);
    const toggleDarkMode = useCallback(
        (localTheme?: boolean) => {
            setDarkMode(localTheme ?? !darkMode);
            updateDarkMode(localTheme ?? !darkMode);
        },
        [darkMode, setDarkMode],
    );
    useEffect(() => {
        const isDark =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
        toggleDarkMode(isDark);
    }, [toggleDarkMode]);
    return [darkMode, toggleDarkMode];
};

const updateDarkMode = (darkMode: boolean) => {
    if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
};
