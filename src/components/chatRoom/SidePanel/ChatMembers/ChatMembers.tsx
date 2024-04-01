import { chatRoomAtom } from '@store/atoms/chatRoom';
import classnames from 'classnames/bind';
import { useAtomValue } from 'jotai';
import { FaCrown } from 'react-icons/fa';
import styles from './ChatMembers.module.css';
const cx = classnames.bind(styles);

const ChatMembers = () => {
    const { members: memberList } = useAtomValue(chatRoomAtom);
    const userId = 'def';

    return (
        <div className={cx('container')}>
            <h1>참여 ({memberList?.length})</h1>
            <ul>
                {memberList &&
                    memberList.map((member) => (
                        <li key={member.userId} className={cx('item')}>
                            {member.name}
                            {member.role === 'owner' && <FaCrown className={cx('icon')} />}
                            {member.userId === userId && <span className={cx('me')}>나</span>}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default ChatMembers;
