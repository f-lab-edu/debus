import { chatRoomAtom } from '@store/atoms/chatRoom';
import classnames from 'classnames/bind';
import { useAtomValue } from 'jotai';
import styles from './ChatRoomHeader.module.css';
const cx = classnames.bind(styles);

const ChatRoomHeader = () => {
    const chatRoomInfo = useAtomValue(chatRoomAtom);
    return (
        <div className={cx('container')}>
            <h1>No. {chatRoomInfo.id}</h1>
            <div className={cx('divider')}></div>
            <p className={cx('title')}>
                {chatRoomInfo.title} 제목은 길면 잘려요
            </p>
            <p className={cx('desc')}>{chatRoomInfo.desc}</p>
            <div className={cx('divider')}></div>
            <ul>
                {chatRoomInfo.options.map((option) => (
                    <li key={option}>- {option}</li>
                ))}
            </ul>
        </div>
    );
};

export default ChatRoomHeader;
