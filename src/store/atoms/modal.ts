import { useAtom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

export type ModalState = {
    isOpen: boolean;
    element?: JSX.Element;
};

const modalAtom = atomWithReset<ModalState>({ isOpen: false });

export const useModal = () => {
    console.log('useModal');
    const [{ isOpen, element }, setModal] = useAtom(modalAtom);

    const openModal = (element: JSX.Element) =>
        setModal({
            isOpen: true,
            element,
        });

    const closeModal = () =>
        setModal({
            isOpen: false,
        });

    return {
        isOpen,
        openModal,
        closeModal,
        element,
    };
};
