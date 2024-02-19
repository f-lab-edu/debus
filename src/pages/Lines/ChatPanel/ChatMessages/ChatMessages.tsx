import { Message } from '@pages/Lines/ChatPanel/ChatPanel';

type PropsType = {
    message: Message;
};

const ChatMessages = ({ message }: PropsType) => {
    return (
        <div>
            <div>
                <strong>{message.user.name}</strong>
            </div>
            <p>{message.content}</p>
        </div>
    );
};

export default ChatMessages;
