import classnames from 'classnames/bind';
import styles from './ChatMembers.module.css';
const cx = classnames.bind(styles);

const ChatMembers = () => {
    return (
        <div className={cx('container')}>
            <h1>Title</h1>
            <ul>
                <li>멤버명</li>
            </ul>
        </div>
    );
};

export default ChatMembers;
