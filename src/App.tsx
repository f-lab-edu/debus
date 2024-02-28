import Header from '@components/Header/Header';
import Modal from '@components/Modal/Modal';
import { darkModeAtom } from '@store/atoms/theme';
import { useAtomValue } from 'jotai';
import { Outlet } from 'react-router-dom';

function App() {
    const darkMode = useAtomValue(darkModeAtom);
    return (
        <div id="app" className={darkMode ? 'dark' : 'light'}>
            <Header />
            <div className="container">
                <Outlet />
            </div>
            <Modal />
        </div>
    );
}

export default App;
