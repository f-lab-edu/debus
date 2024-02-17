import ChatForm from '@pages/Lines/ChatPanel/ChatForm/ChatForm';
import classnames from 'classnames/bind';
import styles from './ChatPanel.module.css';
const cx = classnames.bind(styles);

const ChatPanel = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('chat-message-container')}>ChatMessages</div>
            <ChatForm />
        </div>
    );
};

export default ChatPanel;
