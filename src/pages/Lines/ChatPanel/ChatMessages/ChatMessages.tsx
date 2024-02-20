import { Message } from '@pages/Lines/ChatPanel/ChatPanel';
import { authAtom } from '@store/atoms/tempAuth';
import classnames from 'classnames/bind';
import { useAtomValue } from 'jotai';
import moment from 'moment';
import { useMemo } from 'react';
import styles from './ChatMessages.module.css';
const cx = classnames.bind(styles);

type PropsType = {
    message: Message;
};

const ChatMessages = ({ message }: PropsType) => {
    const user = useAtomValue(authAtom);
    const isMyMessage = useMemo(() => user && user.uid === message.user.id, [user, message.user.id]);
    const timeAgo = moment(message.timeStamp).fromNow();

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
