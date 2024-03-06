import ModalContainer from '@components/Modal/ModalContainer/ModalContainer';
import Overlay from '@components/UI/Overlay/Overlay';
import { createPortal } from 'react-dom';
import { useModal } from 'src/context/ModalContext';

type PropsType = {
    modal: JSX.Element;
};

const Modal = ({ modal }: PropsType) => {
    const { closeModal } = useModal();
    return createPortal(
        <Overlay onClose={closeModal}>
            <ModalContainer onClose={closeModal}>{modal}</ModalContainer>
        </Overlay>,
        document.getElementById('modal-root')!,
    );
};

export default Modal;
