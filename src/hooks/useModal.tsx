import Modal from '@components/Modal/Modal';
import ModalPortal from '@components/Modal/ModalPortal';
import { useCallback, useContext, useEffect, useId } from 'react';
import { modalContext } from 'src/context/ModalContext';
import { assert } from 'src/utils/assert';

export const useModal = () => {
    const context = useContext(modalContext);
    assert(context !== null, 'modalContext is null');

    const { modals, open, close } = context;
    const modalId = useId();

    const openModal = useCallback((element: JSX.Element) => open(element, modalId), [modalId, open]);

    const closeModal = useCallback(() => close(modalId), [modalId, close]);

    const renderModal = useCallback(() => {
        const modal = modals.find((modal) => modal.id === modalId);
        return (
            modal && (
                <ModalPortal>
                    <Modal modal={modal} onClose={closeModal} />
                </ModalPortal>
            )
        );
    }, [modals, modalId, closeModal]);

    useEffect(() => closeModal(), [closeModal]);

    return { openModal, closeModal, renderModal };
};
