import { ModalStyle } from '@components/Modal/ModalTemplate/ModalTemplate';
import classnames from 'classnames/bind';
import { PropsWithChildren, memo } from 'react';
import styles from './ModalTemplate.module.css';
const cx = classnames.bind(styles);

const ModalBody = ({ children, styleType }: PropsWithChildren & { styleType: ModalStyle }) => {
    return <div className={cx('modal-body', `${styleType}`)}>{children}</div>;
};

export default memo(ModalBody);
