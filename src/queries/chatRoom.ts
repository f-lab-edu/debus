import { createQueryKeys } from '@lukemorales/query-key-factory';
import { getChatRoom } from 'src/api/firebase';

export const chatRoomsKeys = createQueryKeys('chatRooms', {
    detail: (chatRoomId: string) => ({
        queryKey: [chatRoomId],
        queryFn: () => getChatRoom(chatRoomId),
    }),
});
