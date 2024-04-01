import { atom } from 'jotai';

type ChatRoomStatus = 'pending' | 'running';

export type ChatRoomInfoType = {
    id: string;
    title: string;
    desc: string;
    options: string[];
    createAt: number;
    members: {
        userId: string;
        name: string;
        role: string;
    }[];
    status: ChatRoomStatus;
};

const initialState: ChatRoomInfoType = {
    id: '',
    title: '',
    desc: '',
    options: [],
    createAt: 0,
    members: [],
    status: 'pending',
};

export const chatRoomAtom = atom(initialState);
