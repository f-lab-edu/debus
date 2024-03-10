import classnames from 'classnames/bind';
import { PropsWithChildren } from 'react';
import styles from './Overlay.module.css';
const cx = classnames.bind(styles);

export type CloseEvent = {
    onClose?: () => void;
};

const Overlay = ({ children, onClose }: PropsWithChildren & CloseEvent) => {
    return (
        <div className={cx('container')} onClick={onClose} onKeyDown={() => {}}>
            {children}
        </div>
    );
};

export default Overlay;
