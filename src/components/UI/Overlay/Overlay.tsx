import classnames from 'classnames/bind';
import { PropsWithChildren } from 'react';
import styles from './Overlay.module.css';
const cx = classnames.bind(styles);

export type OverlayPropsType = CloseModalEvent & PropsWithChildren;

export type CloseModalEvent = {
    onClose: () => void;
};

const Overlay = ({ onClose, children }: OverlayPropsType) => {
    return (
        <div className={cx('container')} onClick={onClose} onKeyDown={() => {}}>
            {children}
        </div>
    );
};

export default Overlay;
