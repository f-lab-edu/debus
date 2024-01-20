import { useCallback, useEffect, useState } from 'react';

export type DarkModeState = [boolean, (localTheme?: boolean) => void];

export const useTheme = (initialState: boolean = false): DarkModeState => {
    const [darkMode, setDarkMode] = useState(initialState);
    const toggleDarkMode = useCallback(
        (localTheme?: boolean) => {
            setDarkMode(localTheme ?? !darkMode);
            updateDarkMode(localTheme ?? !darkMode);
        },
        [darkMode],
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
