import { useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

export type ModalState = {
    id: string;
    element: JSX.Element;
};

export const modalAtom = atomWithReset<ModalState[]>([]);

export const useModal = () => {
    const setModals = useSetAtom(modalAtom);

    const openModal = ({ id, element }: { id: string; element: JSX.Element }) =>
        setModals((modals) => [
            ...modals,
            {
                id,
                element,
            },
        ]);

    const closeModal = (id: string) =>
        setModals((modals) => modals.filter((modal) => modal.id !== id));

    const remove = useResetAtom(modalAtom);

    return {
        openModal,
        closeModal,
        remove,
    };
};
