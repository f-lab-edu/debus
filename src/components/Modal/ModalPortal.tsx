import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type portalContainer = {
    portalContainer?: HTMLDivElement | null;
};

const ModalPortal = ({ children, portalContainer }: PropsWithChildren & portalContainer) => {
    return createPortal(children, portalContainer ? portalContainer : document.getElementById('modal-root')!);
};

export default ModalPortal;
