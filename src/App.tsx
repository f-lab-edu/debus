import Header from '@components/Header/Header';
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
        </div>
    );
}

export default App;
