import { ModalType } from '@hooks/useModal';

export type ModalProps = {
    onClose?: () => void;
    onSubmit?: <T extends {}>(modal: ModalType, value?: T) => void;
};

export type ModalContentProps = {
    onClose?: () => void;
    handleResolve?: <T>(result?: T) => void;
};
