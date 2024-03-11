import Overlay from '@components/UI/Overlay/Overlay';
import classnames from 'classnames/bind';
import { IoIosClose } from 'react-icons/io';
import { ModalType, useModal } from 'src/context/ModalContext';
import styles from './Modal.module.css';
const cx = classnames.bind(styles);

export type ModalProps = { modal: ModalType };

const Modal = ({ modal }: ModalProps) => {
    const { closeModal } = useModal();
    const { element, showCloseIcon } = modal;
    return (
        <Overlay onClose={showCloseIcon ? closeModal : undefined}>
            <div className={cx('container')} onClick={(e) => e.stopPropagation()} onKeyDown={() => {}}>
                {showCloseIcon ? (
                    <button className={cx('close')} onClick={closeModal}>
                        <IoIosClose />
                    </button>
                ) : null}
                {element}
            </div>
        </Overlay>
    );
};

export default Modal;
