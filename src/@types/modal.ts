export type ModalProps = {
    onClose?: () => void;
    onSubmit?: () => Promise<void> | void;
};
