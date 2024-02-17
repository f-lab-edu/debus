import classnames from 'classnames/bind';
import styles from './ChatRoomHeader.module.css';
const cx = classnames.bind(styles);

const ChatRoomHeader = () => {
    return (
        <div className={cx('container')}>
            <h1>No.</h1>
            <div className={cx('divider')}></div>
            <p className={cx('title')}>Title</p>
            <p className={cx('desc')}>Desc</p>
            <div className={cx('divider')}></div>
            <ul>
                <li>Options</li>
            </ul>
        </div>
    );
};

export default ChatRoomHeader;
