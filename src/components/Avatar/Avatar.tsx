import classnames from 'classnames/bind';
import Bus from 'src/assets/bus.svg?react';
import styles from './Avatar.module.css';
const cx = classnames.bind(styles);

const Avatar = () => {
    return (
        <div className={cx('wrapper')}>
            <Bus width="20" height="20" fill="#ffa16e" />
        </div>
    );
};

export default Avatar;
