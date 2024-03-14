import classnames from 'classnames/bind';
import { PropsWithChildren } from 'react';
import styles from './Overlay.module.css';
const cx = classnames.bind(styles);

type PropsType = {
    onClose: () => void;
    preventClick?: boolean;
};

const Overlay = ({ children, onClose, preventClick = false }: PropsWithChildren & PropsType) => {
    return (
        <div className={cx('container')} onClick={preventClick ? undefined : onClose} onKeyDown={() => {}}>
            {children}
        </div>
    );
};

export default Overlay;
