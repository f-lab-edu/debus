import { MutableRefObject, PropsWithChildren, createContext, useCallback, useMemo, useRef, useState } from 'react';
import { ModalType } from 'src/@types/modal';

type ModalContextValue = {
    open: (modal: ModalType) => void;
    close: (id: string) => void;
    modals: ModalType[];
    portalRef: MutableRefObject<HTMLDivElement | null>;
};

export const modalContext = createContext<ModalContextValue | null>(null);

export const ModalProvider = ({ children }: PropsWithChildren) => {
    const [modals, setModals] = useState<ModalType[]>([]);
    const portalRef = useRef<HTMLDivElement | null>(null);

    const open = useCallback((modal: ModalType) => setModals((prev) => [...prev, modal]), []);
    const close = useCallback((id: string) => setModals((prev) => prev.filter((v) => v.modalId !== id)), []);

    const value = useMemo(
        () => ({
            modals,
            open,
            close,
            portalRef,
        }),
        [modals, open, close],
    );

    return (
        <modalContext.Provider value={value}>
            <div style={{ position: 'relative' }} ref={portalRef}>
                {children}
            </div>
        </modalContext.Provider>
    );
};
