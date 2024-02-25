import { useAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

type ModalState = {
    isOpen: boolean;
    type?: ModalType;
};
type ModalType = 'confirm' | 'createChatRoom';

const initialState: ModalState = {
    isOpen: false,
};

export const modalAtom = atomWithReset(initialState);

export const useModal = (type?: ModalType) => {
    const [{ isOpen, type: modalType }, setModal] = useAtom(modalAtom);

    const openModal = () =>
        setModal({
            isOpen: true,
            type,
        });
    const closeModal = useResetAtom(modalAtom);

    return {
        isOpen,
        modalType,
        openModal,
        closeModal,
    };
};
