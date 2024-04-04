import { atom } from 'jotai';

type ChatRoomStatus = 'pending' | 'running';

export type ChatRoomInfoType = {
    id: string;
    title: string;
    desc: string;
    options: string[];
    createAt: number;
    members: Member[];
    status: ChatRoomStatus;
};

export type Member = {
    userId: string;
    name: string;
    role: string;
};

export const currentChatRoom = atom('');
