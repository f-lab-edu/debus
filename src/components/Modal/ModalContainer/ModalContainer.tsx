import { OverlayPropsType } from '@components/UI/Overlay/Overlay';
import classnames from 'classnames/bind';
import { IoIosClose } from 'react-icons/io';
import styles from './ModalContainer.module.css';
const cx = classnames.bind(styles);

const ModalContainer = ({ children, onClose }: OverlayPropsType) => {
    return (
        <div
            className={cx('container')}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={() => {}}
        >
            <button className={cx('close')} onClick={onClose}>
                <IoIosClose />
            </button>
            {children}
        </div>
    );
};

export default ModalContainer;
