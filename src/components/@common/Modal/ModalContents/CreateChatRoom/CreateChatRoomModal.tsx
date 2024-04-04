import Button from '@components/@common/Button/Button';
import Form, { ChatRoomInfo } from '@components/@common/Modal/ModalContents/CreateChatRoom/Form/Form';
import ModalButtonGroup from '@components/@common/Modal/ModalTemplate/ModalButtonGroup';
import ModalContent from '@components/@common/Modal/ModalTemplate/ModalContent';
import ModalHeader from '@components/@common/Modal/ModalTemplate/ModalHeader';
import ModalTemplate from '@components/@common/Modal/ModalTemplate/ModalTemplate';
import { ModalContentProps } from 'src/@types/modal';

const CreateChatRoomModal = ({ onSubmit, onAbort }: ModalContentProps<ChatRoomInfo>) => {
    return (
        <ModalTemplate onClose={onAbort} isOverlay={true}>
            <ModalHeader title={'채팅방 생성'} onClose={onAbort} />
            <ModalContent>
                <Form onSubmit={onSubmit}>
                    <ModalButtonGroup>
                        <Button text="방만들기" variant="accent" type="submit" />
                        <Button text="취소" variant="default" onClick={onAbort} />
                    </ModalButtonGroup>
                </Form>
            </ModalContent>
        </ModalTemplate>
    );
};

export default CreateChatRoomModal;
