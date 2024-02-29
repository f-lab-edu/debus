import Header from '@components/Header/Header';
import Modal from '@components/Modal/Modal';
import { modalAtom } from '@store/atoms/modal';
import { darkModeAtom } from '@store/atoms/theme';
import { useAtomValue } from 'jotai';
import { Outlet } from 'react-router-dom';

const ModalStack = () => {
    const modalStack = useAtomValue(modalAtom);
    return modalStack.map((modal) => <Modal key={modal.id} modal={modal} />);
};

function App() {
    const darkMode = useAtomValue(darkModeAtom);

    return (
        <div id="app" className={darkMode ? 'dark' : 'light'}>
            <Header />
            <div className="container">
                <Outlet />
            </div>
            <ModalStack />
        </div>
    );
}

export default App;
