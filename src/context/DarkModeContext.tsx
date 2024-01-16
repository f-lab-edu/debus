import { createContext, useContext, useEffect, useState } from 'react';

type State = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

const DarkModeContext = createContext<State | null>(null);

export const DarkModeProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        updateDarkMode(!darkMode);
    };
    useEffect(() => {
        const isDark =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDark);
        updateDarkMode(isDark);
    }, []);
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    const state = useContext(DarkModeContext);
    if (!state) throw new Error('Cannot find DarkModeProvider');
    return state;
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
