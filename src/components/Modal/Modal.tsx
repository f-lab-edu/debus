import Overlay from '@components/UI/Overlay/Overlay';
import classnames from 'classnames/bind';
import { IoIosClose } from 'react-icons/io';
import { ModalProps } from 'src/@types/modal';
import { ModalType } from 'src/context/ModalContext';
import styles from './Modal.module.css';
const cx = classnames.bind(styles);

const Modal = ({ modal, onClose }: { modal: ModalType } & ModalProps) => {
    const { element } = modal;

    return (
        <Overlay onClose={onClose}>
            <div className={cx('container')} onClick={(e) => e.stopPropagation()} onKeyDown={() => {}}>
                <button className={cx('close')} onClick={onClose}>
                    <IoIosClose />
                </button>
                {element}
            </div>
        </Overlay>
    );
};

export default Modal;
