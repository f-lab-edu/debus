import Modal from '@components/Modal/Modal';
import ModalPortal from '@components/Modal/ModalPortal';
import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type ModalType = {
    id: string;
    element: JSX.Element;
    showCloseIcon: boolean;
};

type ModalContextValue = {
    openModal: (element: JSX.Element, showCloseIcon?: boolean) => void;
    closeModal: () => void;
    renderModal: () => JSX.Element | null;
};

const modalContext = createContext<ModalContextValue>({
    openModal: () => {},
    closeModal: () => {},
    renderModal: () => null,
});

export const ModalContextProvider = ({ children }: PropsWithChildren) => {
    const [selectedModal, setSelectedModal] = useState<ModalType | null>(null);

    const openModal = (element: JSX.Element, showCloseIcon: boolean = true) => {
        const id = uuidv4();
        const modal = {
            id,
            element,
            showCloseIcon,
        };
        setSelectedModal(modal);
    };

    const closeModal = () => setSelectedModal(null);

    const renderModal = () =>
        selectedModal ? (
            <ModalPortal key={selectedModal.id}>
                <Modal key={selectedModal.id} modal={selectedModal} />
            </ModalPortal>
        ) : null;

    return <modalContext.Provider value={{ openModal, closeModal, renderModal }}>{children}</modalContext.Provider>;
};

export const useModal = () => useContext(modalContext);
