import { mergeQueryKeys } from '@lukemorales/query-key-factory';
import { chatRoomsKeys } from 'src/queries/chatRoom';

export const queryKeys = mergeQueryKeys(chatRoomsKeys);
