export type ModalType = {
    element: JSX.Element;
    modalId: string;
    resolve: <T extends {}>(value?: T | PromiseLike<T>) => void;
    reject: (reason?: Error) => void;
};

export type ModalProps = {
    onClose: () => void;
};

export type ModalContentProps<T = unknown> = {
    onSubmit: (result: T) => void; // then
    onAbort: (error?: Error) => void; // catch
};

export type ModalStyle = 'global' | 'local';
