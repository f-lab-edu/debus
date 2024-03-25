import Modal from '@components/Modal/Modal';
import ModalPortal from '@components/Modal/ModalPortal';
import { useCallback, useContext, useEffect, useId } from 'react';
import { modalContext } from 'src/context/ModalContext';
import { assert } from 'src/utils/assert';

type PromiseResolve = <T>(value: T | PromiseLike<T>) => void;
type PromiseReject = (value?: Error) => void;

export type ModalType = {
    element: JSX.Element;
    modalId: string;
    resolve: PromiseResolve;
    reject: PromiseReject;
};

export const useModal = () => {
    const context = useContext(modalContext);
    assert(context !== null, 'modalContext is null');

    const { modals, open, close, portalRef } = context;
    const modalId = useId();

    const openModal = useCallback(
        (element: JSX.Element): Promise<unknown> => {
            return new Promise((resolve: PromiseResolve, reject: PromiseReject) => {
                const modal = {
                    element,
                    modalId,
                    resolve,
                    reject,
                };
                open(modal);
            });
        },
        [modalId, open],
    );

    const closeModal = useCallback(() => close(modalId), [modalId, close]);

    const handleResolve = useCallback(
        <T extends {}>(modal: ModalType, value?: T) => {
            modal.resolve(value);
            closeModal();
        },
        [closeModal],
    );

    const renderModal = useCallback(() => {
        const modal = modals.find((modal) => modal.modalId === modalId);
        return (
            modal && (
                <ModalPortal portalContainer={portalRef.current}>
                    <Modal modal={modal} onClose={closeModal} onSubmit={handleResolve} />
                </ModalPortal>
            )
        );
    }, [modals, modalId, closeModal, portalRef, handleResolve]);

    useEffect(() => closeModal(), [closeModal]);

    return { openModal, closeModal, renderModal };
};
