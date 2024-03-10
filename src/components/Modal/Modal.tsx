import ModalContainer from '@components/Modal/ModalContainer/ModalContainer';
import Overlay, { CloseEvent } from '@components/UI/Overlay/Overlay';
import { ModalType, useModal } from 'src/context/ModalContext';

export type ModalProps = { modal: ModalType } & CloseEvent;

const Modal = ({ modal }: { modal: ModalType }) => {
    const { closeModal } = useModal();
    const onCloseModal = () => closeModal(modal.id);
    return (
        <Overlay onClose={onCloseModal}>
            <ModalContainer onClose={onCloseModal} modal={modal} />
        </Overlay>
    );
};

export default Modal;
