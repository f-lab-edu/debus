import { useAtom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

type ModalState = {
    isOpen: boolean;
};

const modalAtom = atomWithReset<ModalState>({ isOpen: false });

export const useModal = () => {
    const [{ isOpen }, setModal] = useAtom(modalAtom);

    const openModal = () =>
        setModal({
            isOpen: true,
        });

    const closeModal = () =>
        setModal({
            isOpen: false,
        });

    return {
        isOpen,
        openModal,
        closeModal,
    };
};
