import ChatPanel from '@pages/Lines/ChatPanel/ChatPanel';
import SidePanel from '@pages/Lines/SidePanel/SidePanel';
import { chatRoomAtom } from '@store/atoms/chatRoom';
import classnames from 'classnames/bind';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import styles from './Lines.module.css';
const cx = classnames.bind(styles);

const Lines = () => {
    const setChatRoomInfo = useSetAtom(chatRoomAtom);
    useEffect(() => {
        setChatRoomInfo({
            id: '1',
            title: '같이 공부해요',
            desc: '리액트 뿌시기!',
            options: ['Javascript', 'FE', '경력무관'],
            createAt: new Date().getTime(),
            createdBy: 'abc',
            members: [
                {
                    userId: 'abc',
                    name: '한찌',
                    role: 'owner',
                },
                {
                    userId: 'def',
                    name: '두찌',
                    role: 'none',
                },
                {
                    userId: 'seafe',
                    name: '세찌',
                    role: 'none',
                },
                {
                    userId: 'fwgew',
                    name: '네찌',
                    role: 'none',
                },
            ],
        });
    }, [setChatRoomInfo]);

    return (
        <div className={cx('container')}>
            <div className={cx('side')}>
                <SidePanel />
            </div>
            <div className={cx('chat')}>
                <ChatPanel />
            </div>
        </div>
    );
};

export default Lines;
