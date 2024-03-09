import { atom } from 'jotai';

export type ChatRoomInfoType = {
    id: string;
    title: string;
    desc: string;
    options: string[];
    createAt: number;
    createdBy: string;
    members: {
        userId: string;
        name: string;
        role: string;
    }[];
};

const initialState: ChatRoomInfoType = {
    id: '',
    title: '',
    desc: '',
    options: [],
    createAt: 0,
    createdBy: '',
    members: [],
};

export const chatRoomAtom = atom(initialState);
