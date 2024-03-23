import LocalModal from '@components/Modal/LocalModal/LocalModal';
import Modal from '@components/Modal/Modal';
import ModalPortal from '@components/Modal/ModalPortal';
import { MutableRefObject, useCallback, useContext, useEffect, useId, useRef } from 'react';
import { modalContext } from 'src/context/ModalContext';
import { assert } from 'src/utils/assert';

export const usePortal = () => useRef<HTMLDivElement | null>(null);

export const useModal = () => {
    const context = useContext(modalContext);
    assert(context !== null, 'modalContext is null');

    const { modals, open, close } = context;
    const modalId = useId();

    const openModal = useCallback(
        (element: JSX.Element, isLocal?: boolean) => open(element, modalId, isLocal),
        [modalId, open],
    );

    const closeModal = useCallback(() => close(modalId), [modalId, close]);

    const renderModal = useCallback(
        (portalContainer?: MutableRefObject<HTMLDivElement | null>) => {
            const modal = modals.find((modal) => modal.id === modalId);
            const handleSubmit = async () => {
                const onSubmit = modal && modal.element.props?.onSubmit;
                if (onSubmit) await onSubmit();
                closeModal();
            };
            return (
                modal &&
                (modal.isLocal && portalContainer ? (
                    <ModalPortal portalContainer={portalContainer.current}>
                        <LocalModal modal={modal} onClose={closeModal} onSubmit={handleSubmit} />
                    </ModalPortal>
                ) : (
                    <ModalPortal>
                        <Modal modal={modal} onClose={closeModal} onSubmit={handleSubmit} />
                    </ModalPortal>
                ))
            );
        },
        [modals, modalId, closeModal],
    );

    useEffect(() => closeModal(), [closeModal]);

    return { openModal, closeModal, renderModal };
};
