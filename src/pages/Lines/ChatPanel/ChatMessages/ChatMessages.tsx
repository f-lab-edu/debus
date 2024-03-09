import { Message } from '@pages/Lines/ChatPanel/ChatPanel';
import classnames from 'classnames/bind';
import moment from 'moment';
import styles from './ChatMessages.module.css';
const cx = classnames.bind(styles);

type PropsType = {
    message: Message;
};

const user = {
    uid: 'def',
};

const ChatMessages = ({ message }: PropsType) => {
    const isMyMessage = user && user.uid === message.user.id;
    const timeAgo = moment(Number(message.timestamp)).fromNow();
    return (
        <div className={cx('container', { me: isMyMessage })}>
            <div className={cx('user-img')}></div>
            <div>
                <div className={cx('info')}>
                    <strong className={cx('user-name')}>{message.user.name}</strong>
                    <span className={cx('timestamp')}>{timeAgo}</span>
                </div>
                <p className={cx('content')}>{message.content}</p>
            </div>
        </div>
    );
};

export default ChatMessages;
