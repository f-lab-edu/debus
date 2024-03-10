import Modal from '@components/Modal/Modal';
import ModalPortal from '@components/Modal/ModalPortal';
import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type ModalType = {
    id: string;
    element: JSX.Element;
};

type ModalContextValue = {
    openModal: (element: JSX.Element) => void;
    closeModal: (id: string) => void;
    renderModal: () => JSX.Element[];
};

const modalContext = createContext<ModalContextValue>({
    openModal: () => {},
    closeModal: () => {},
    renderModal: () => [],
});

export const ModalContextProvider = ({ children }: PropsWithChildren) => {
    const [modals, setModals] = useState<ModalType[]>([]);
    const openModal = (element: JSX.Element) => {
        const id = uuidv4();
        setModals((prev) => [
            ...prev,
            {
                id,
                element,
            },
        ]);
    };

    const closeModal = (id: string) => setModals((prev) => prev.filter((v) => v.id !== id));

    const renderModal = () =>
        modals.map((modal) => (
            <ModalPortal key={modal.id}>
                <Modal key={modal.id} modal={modal} />
            </ModalPortal>
        ));

    return <modalContext.Provider value={{ openModal, closeModal, renderModal }}>{children}</modalContext.Provider>;
};

export const useModal = () => useContext(modalContext);
