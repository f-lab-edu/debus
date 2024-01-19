import { useState } from 'react';

export type DarkModeState = [boolean, (localTheme?: boolean) => void];

export const useTheme = (initialState: boolean = false): DarkModeState => {
    const [darkMode, setDarkMode] = useState(initialState);
    const toggleDarkMode = (localTheme?: boolean) => {
        setDarkMode(localTheme ?? !darkMode);
        updateDarkMode(localTheme ?? !darkMode);
    };
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
