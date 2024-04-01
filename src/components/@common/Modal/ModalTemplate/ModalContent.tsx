import classnames from 'classnames/bind';
import { PropsWithChildren, memo } from 'react';
import { ModalStyle } from 'src/@types/modal';
import styles from './ModalTemplate.module.css';
const cx = classnames.bind(styles);

const ModalContent = ({ children, styleType = 'global' }: PropsWithChildren & { styleType?: ModalStyle }) => {
    return <div className={cx('modal-content', `${styleType}`)}>{children}</div>;
};

export default memo(ModalContent);
