import { ModalType } from '@hooks/useModal';
import { cloneElement } from 'react';
import { ModalProps } from 'src/@types/modal';

const Modal = ({ modal, onClose, onSubmit }: { modal: ModalType } & ModalProps) => {
    const { element } = modal;
    const handleResolve = <T extends {}>(value?: T) => onSubmit?.(modal, value);

    return <>{cloneElement(element, { onClose, handleResolve })}</>;
};

export default Modal;
