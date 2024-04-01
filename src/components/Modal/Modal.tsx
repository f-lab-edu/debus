import { cloneElement, memo } from 'react';
import { ModalType } from 'src/@types/modal';

const Modal = ({ modal }: { modal: ModalType }) => {
    const { element, resolve, reject } = modal;

    return <>{cloneElement(element, { onSubmit: resolve, onAbort: reject })}</>;
};

export default memo(Modal);
