import { darkMode_atom } from '@store/atoms/theme';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from 'src/router';

function App() {
    const setDarkMode = useSetAtom(darkMode_atom);
    useEffect(() => {
        const isDark =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDark);
    }, [setDarkMode]);
    return <RouterProvider router={router} />;
}

export default App;
