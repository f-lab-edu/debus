import ModalContainer from '@components/Modal/ModalContainer/ModalContainer';
import Overlay from '@components/UI/Overlay/Overlay';
import { ModalState, useModal } from '@store/atoms/modal';

type PropsType = {
    modal: ModalState;
};

export type CloseEventType = {
    close: () => void;
};

const Modal = ({ modal }: PropsType) => {
    const { id, element } = modal;
    const { closeModal } = useModal();

    const close = () => closeModal(id);

    return (
        <Overlay onClose={close}>
            <ModalContainer onClose={close}>{element}</ModalContainer>
        </Overlay>
    );
};

export default Modal;
