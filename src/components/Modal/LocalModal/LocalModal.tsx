import classnames from 'classnames/bind';
import { cloneElement } from 'react';
import { IoIosClose } from 'react-icons/io';
import { ModalProps } from 'src/@types/modal';
import { ModalType } from 'src/context/ModalContext';
import styles from './LocalModal.module.css';
const cx = classnames.bind(styles);

const LocalModal = ({ modal, onClose }: { modal: ModalType } & ModalProps) => {
    const { element, isLocal } = modal;
    console.log('LocalModal');
    return (
        <div
            className={cx('container', `${isLocal && 'isLocal'}`)}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={() => {}}
        >
            <button className={cx('close')} onClick={onClose}>
                <IoIosClose />
            </button>
            {cloneElement(element, { onClose })}
        </div>
    );
};

export default LocalModal;
