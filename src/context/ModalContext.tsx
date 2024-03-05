import Modal from '@components/Modal/Modal';
import {
    PropsWithChildren,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { useLocation } from 'react-router-dom';

type ModalContextValue = {
    openModal: (element: JSX.Element) => void;
    closeModal: () => void;
};

const modalContext = createContext<ModalContextValue>({
    openModal: () => {},
    closeModal: () => {},
});

export const ModalContextProvider = ({ children }: PropsWithChildren) => {
    const [modals, setModals] = useState<JSX.Element[]>([]);
    const location = useLocation();

    const openModal = (element: JSX.Element) =>
        setModals((prev) => [...prev, element]);

    const closeModal = () =>
        setModals((prev) => prev.slice(0, prev.length - 1));

    const ModalStack = () =>
        modals.map((modal, idx) => <Modal key={idx} modal={modal} />);

    useEffect(() => {
        setModals([]);
    }, [location]);

    return (
        <modalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {ModalStack()}
        </modalContext.Provider>
    );
};

export const useModal = () => useContext(modalContext);
