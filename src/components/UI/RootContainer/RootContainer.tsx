import classnames from 'classnames/bind';
import { PropsWithChildren } from 'react';
import styles from './RootContainer.module.css';
const cx = classnames.bind(styles);

const RootContainer = ({ children }: PropsWithChildren) => {
    return <div className={cx('container')}>{children}</div>;
};

export default RootContainer;
