export type ChatRoomInfo = {
    title: string;
    desc: string;
    options: string;
};

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

export type Message = {
    id: string;
    content: string;
    timestamp: unknown;
    user: {
        id?: string;
        name: string;
    };
};
