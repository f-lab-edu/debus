import Header from '@components/Header/Header';
import { darkMode_atom } from '@store/atoms/theme';
import { useAtomValue } from 'jotai';
import { Outlet } from 'react-router-dom';

function App() {
    const darkMode = useAtomValue(darkMode_atom);
    return (
        <div id="app" data-theme={darkMode ? 'dark' : 'light'}>
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
