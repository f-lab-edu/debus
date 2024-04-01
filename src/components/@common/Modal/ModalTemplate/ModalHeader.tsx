import classnames from 'classnames/bind';
import { memo } from 'react';
import { IoIosClose } from 'react-icons/io';
import styles from './ModalTemplate.module.css';
const cx = classnames.bind(styles);

const ModalHeader = ({ title, onClose }: { title: string; onClose?: () => void }) => {
    return (
        <header className={cx('modal-header')}>
            <h1 className={cx('title')}>{title}</h1>
            <button className={cx('close')} onClick={onClose}>
                <IoIosClose />
            </button>
        </header>
    );
};

export default memo(ModalHeader);
