import Button from '@components/@common/Button/Button';
import CreateChatRoomModal from '@components/@common/Modal/ModalContents/CreateChatRoom/CreateChatRoomModal';
import { useModal } from '@hooks/useModal';
import { UserTypes, authAtom } from '@store/atoms/auth';
import { useMutation } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { ChatRoomInfo } from 'src/@types/chatRoom';
import { createChatRoom } from 'src/api/firebase';

const ChatRooms = () => {
    const user = useAtomValue(authAtom);
    const { openModal, renderModal } = useModal();
    const navigate = useNavigate();
    const { mutate } = useMutation({
        mutationFn: async ({ userId, result }: { userId: UserTypes | null; result: ChatRoomInfo }) =>
            await createChatRoom(userId, result),
        onSuccess: (id) => navigate(`/lines/${id}`),
    });

    const handleCreate = async () => {
        try {
            const result = await openModal(CreateChatRoomModal);
            mutate({ userId: user, result });
        } catch (err) {
            console.log('모달 닫습니다~!');
        }
    };

    return (
        <>
            <section>
                <h1>정류장</h1>
                <nav>
                    <Button text="배차하기" variant="accent" onClick={handleCreate} />
                </nav>
            </section>
            {renderModal()}
        </>
    );
};

export default ChatRooms;
