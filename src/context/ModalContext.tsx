import Modal from '@components/Modal/Modal';
import ModalPortal from '@components/Modal/ModalPortal';
import { PropsWithChildren, createContext, useContext, useState } from 'react';

type ModalContextValue = {
    openModal: (element: JSX.Element) => void;
    closeModal: () => void;
    renderModal: () => JSX.Element[];
};

const modalContext = createContext<ModalContextValue>({
    openModal: () => {},
    closeModal: () => {},
    renderModal: () => [],
});

export const ModalContextProvider = ({ children }: PropsWithChildren) => {
    const [modals, setModals] = useState<JSX.Element[]>([]);

    const openModal = (element: JSX.Element) =>
        setModals((prev) => [...prev, element]);

    const closeModal = () =>
        setModals((prev) => prev.slice(0, prev.length - 1));

    const renderModal = () =>
        modals.map((modal, idx) => (
            <ModalPortal key={idx}>
                <Modal key={idx} modal={modal} />
            </ModalPortal>
        ));

    return (
        <modalContext.Provider value={{ openModal, closeModal, renderModal }}>
            {children}
        </modalContext.Provider>
    );
};

export const useModal = () => useContext(modalContext);
