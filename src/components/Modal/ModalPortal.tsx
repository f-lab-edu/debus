import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const ModalPortal = ({ children }: PropsWithChildren) => {
    return createPortal(children, document.getElementById('modal-root')!);
};

export default ModalPortal;
