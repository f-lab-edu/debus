import Header from '@components/Header/Header';
import { darkModeAtom } from '@store/atoms/theme';
import { useAtomValue } from 'jotai';
import moment from 'moment';
import 'moment/dist/locale/ko';
import { Outlet } from 'react-router-dom';
import { ModalProvider } from 'src/context/ModalContext';

moment.locale('ko');

function App() {
    const darkMode = useAtomValue(darkModeAtom);

    return (
        <ModalProvider>
            <div id="app" className={darkMode ? 'dark' : 'light'}>
                <Header />
                <div className="container">
                    <Outlet />
                </div>
            </div>
        </ModalProvider>
    );
}

export default App;
