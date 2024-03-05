import Header from '@components/Header/Header';
import { darkModeAtom } from '@store/atoms/theme';
import { useAtomValue } from 'jotai';
import { Outlet } from 'react-router-dom';
import { ModalContextProvider } from 'src/context/ModalContext';

function App() {
    const darkMode = useAtomValue(darkModeAtom);

    return (
        <div id="app" className={darkMode ? 'dark' : 'light'}>
            <ModalContextProvider>
                <Header />
                <div className="container">
                    <Outlet />
                </div>
            </ModalContextProvider>
        </div>
    );
}

export default App;
