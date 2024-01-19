import { DarkModeState, useTheme } from '@hooks/useTheme';
import { PropsWithChildren, createContext, useContext, useEffect } from 'react';

const DarkModeContext = createContext<DarkModeState | null>(null);

export const DarkModeProvider = ({ children }: PropsWithChildren) => {
    const [darkMode, toggleDarkMode] = useTheme(false);
    useEffect(() => {
        const isDark =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
        toggleDarkMode(isDark);
    }, [toggleDarkMode]);

    return (
        <DarkModeContext.Provider value={[darkMode, toggleDarkMode]}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    const state = useContext(DarkModeContext);
    if (!state) throw new Error('Cannot find DarkModeProvider');
    return state;
};
