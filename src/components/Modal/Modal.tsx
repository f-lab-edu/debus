import ConfirmModal from '@components/Modal/ModalDetailComponents/ConfirmModal';
import CreateChatRoomModal from '@components/Modal/ModalDetailComponents/CreateChatRoomModal';
import { useModal } from '@store/atoms/modal';
import classnames from 'classnames/bind';
import styles from './Modal.module.css';
const cx = classnames.bind(styles);

const modals: Record<string, JSX.Element> = {
    confirm: <ConfirmModal />,
    createChatRoom: <CreateChatRoomModal />,
};

const Modal = () => {
    const { isOpen, modalType, closeModal } = useModal();

    if (!isOpen) return;

    return (
        <div className={cx('backdrop')} onClick={closeModal}>
            {modalType && modals[modalType]}
        </div>
    );
};

export default Modal;
