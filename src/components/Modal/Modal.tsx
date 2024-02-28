import ModalContainer from '@components/Modal/ModalContainer/ModalContainer';
import Overlay from '@components/UI/Overlay/Overlay';
import { useModal } from '@store/atoms/modal';

const Modal = () => {
    const { isOpen, closeModal, element } = useModal();

    if (!isOpen) return;

    return (
        <Overlay onClose={closeModal}>
            <ModalContainer onClose={closeModal}>{element}</ModalContainer>
        </Overlay>
    );
};

export default Modal;
