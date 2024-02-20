import ChatForm from '@pages/Lines/ChatPanel/ChatForm/ChatForm';
import ChatMessages from '@pages/Lines/ChatPanel/ChatMessages/ChatMessages';
import classnames from 'classnames/bind';
import { useCallback, useEffect, useState } from 'react';
import styles from './ChatPanel.module.css';
const cx = classnames.bind(styles);

export type Message = {
    id: string;
    content: string;
    timestamp: string;
    user: {
        id: string;
        name: string;
    };
};

const ChatPanel = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    useEffect(() => {
        fetch('/data/messages.json')
            .then((res) => res.json())
            .then((data) => setMessages(data));
    }, []);

    const renderMessages = useCallback(() => {
        if (messages.length <= 0) return;
        return messages.map((message) => <ChatMessages key={message.id} message={message} />);
    }, [messages]);

    return (
        <div className={cx('container')}>
            <div className={cx('chat-message-container')}>{renderMessages()}</div>
            <ChatForm />
        </div>
    );
};

export default ChatPanel;
