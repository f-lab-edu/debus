import { ModalProps } from '@components/Modal/Modal';
import classnames from 'classnames/bind';
import { cloneElement } from 'react';
import { IoIosClose } from 'react-icons/io';
import styles from './ModalContainer.module.css';
const cx = classnames.bind(styles);

const ModalContainer = ({ modal, onClose }: ModalProps) => {
    return (
        <div id={modal.id} className={cx('container')} onClick={(e) => e.stopPropagation()} onKeyDown={() => {}}>
            <button className={cx('close')} onClick={onClose}>
                <IoIosClose />
            </button>
            {cloneElement(modal.element, { onClose })}
        </div>
    );
};

export default ModalContainer;
