import ChatMembers from '@components/ChatRoom/SidePanel/ChatMembers/ChatMembers';
import ChatRoomHeader from '@components/ChatRoom/SidePanel/ChatRoomHeader/ChatRoomHeader';
import { useQuery } from '@tanstack/react-query';
import classnames from 'classnames/bind';
import { memo } from 'react';
import { queryKeys } from 'src/queries';
import { assert } from 'src/utils/assert';
import styles from './SidePanel.module.css';
const cx = classnames.bind(styles);

const SidePanel = ({ id }: { id: string }) => {
    const {
        data: chatRoom,
        isLoading,
        isError,
    } = useQuery({
        ...queryKeys.chatRooms.detail(id),
        staleTime: 5 * 1000,
    });

    if (isLoading) {
        return <strong>채팅방을 불러오는 중입니다.</strong>;
    }

    assert(chatRoom !== undefined, '채팅방 정보가 존재하지 않습니다.');
    const { members } = chatRoom;
    if (isError) {
        return <strong>Error 발생! 잠시 후 다시 시도해주세요.</strong>;
    }
    return (
        <div className={cx('container')}>
            <ChatRoomHeader chatRoom={chatRoom} />
            <ChatMembers members={members} />
        </div>
    );
};

export default memo(SidePanel);
