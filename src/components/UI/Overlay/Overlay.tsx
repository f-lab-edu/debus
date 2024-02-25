import classnames from 'classnames/bind';
import styles from './Overlay.module.css';
const cx = classnames.bind(styles);

export type OverlayPropsType = CloseModalEvent & {
    children: JSX.Element;
};

export type CloseModalEvent = {
    onClose: () => void;
};

const Overlay = ({ onClose, children }: OverlayPropsType) => {
    return (
        <div className={cx('container')} onClick={onClose}>
            {children}
        </div>
    );
};

export default Overlay;
