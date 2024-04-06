import Button from '@components/@common/Button/Button';
import CreateChatRoomModal from '@components/@common/Modal/ModalContents/CreateChatRoom/CreateChatRoomModal';
import { useModal } from '@hooks/useModal';
import { authAtom } from '@store/atoms/auth';
import { useMutation } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { createChatRoom } from 'src/api/firebase';

const ChatRooms = () => {
    const user = useAtomValue(authAtom)!;
    const { openModal, renderModal } = useModal();
    const navigate = useNavigate();
    const { mutate } = useMutation({
        mutationFn: createChatRoom,
        onSuccess: (id) => navigate(`/lines/${id}`),
        onError: (err) => console.log(err),
    });

    const handleCreate = async () => {
        try {
            const chatRoomInfo = await openModal(CreateChatRoomModal);
            mutate({ user, chatRoomInfo });
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
