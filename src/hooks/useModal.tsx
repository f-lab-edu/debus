import Modal from '@components/Modal/Modal';
import ModalPortal from '@components/Modal/ModalPortal';
import { useCallback, useContext, useEffect, useId } from 'react';
import { modalContext } from 'src/context/ModalContext';
import { assert } from 'src/utils/assert';

export const useModal = () => {
    const context = useContext(modalContext);
    assert(context !== null, 'modalContext is null');

    const { modals, open, close, portalRef } = context;
    const modalId = useId();

    const openModal = useCallback(
        (element: JSX.Element, isLocal?: boolean) => {
            open(element, modalId, isLocal);
        },
        [modalId, open],
    );

    const closeModal = useCallback(() => close(modalId), [modalId, close]);

    const renderModal = useCallback(() => {
        const modal = modals.find((modal) => modal.id === modalId);
        const handleSubmit = async () => {
            const onSubmit = modal && modal.element.props?.onSubmit;
            if (onSubmit) await onSubmit();
            closeModal();
        };
        return (
            modal && (
                <ModalPortal portalContainer={portalRef.current}>
                    <Modal modal={modal} onClose={closeModal} onSubmit={handleSubmit} />
                </ModalPortal>
            )
        );
    }, [modals, modalId, closeModal, portalRef]);

    useEffect(() => closeModal(), [closeModal]);

    return { openModal, closeModal, renderModal };
};
