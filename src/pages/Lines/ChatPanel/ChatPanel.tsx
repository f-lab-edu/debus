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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<undefined | string>();

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        setError(undefined);
        const fetchData = async () => {
            try {
                const res = await fetch('/data/messages.json');
                const data = await res.json();
                if (isMounted) {
                    setMessages(data);
                }
            } catch (error) {
                setError('에러 발생');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        return () => {
            isMounted = false;
        };
    }, []);

    const renderMessages = useCallback(() => {
        if (messages.length <= 0) return;
        return messages.map((message) => <ChatMessages key={message.id} message={message} />);
    }, [messages]);

    if (loading) {
        return <h1>로딩중</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div className={cx('container')}>
            <div className={cx('chat-message-container')}>{renderMessages()}</div>
            <ChatForm />
        </div>
    );
};

export default ChatPanel;
