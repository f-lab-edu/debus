import ModalContainer from '@components/Modal/ModalContainer/ModalContainer';
import Overlay, { OverlayPropsType } from '@components/UI/Overlay/Overlay';

type PropsType = OverlayPropsType & {
    isOpen: boolean;
};

const Modal = ({ children, isOpen, onClose }: PropsType) => {
    if (!isOpen) return;

    return (
        <Overlay onClose={onClose}>
            <ModalContainer onClose={onClose}>{children}</ModalContainer>
        </Overlay>
    );
};

export default Modal;
