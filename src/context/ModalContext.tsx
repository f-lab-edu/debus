import { MutableRefObject, PropsWithChildren, createContext, useCallback, useRef, useState } from 'react';

export type ModalType = {
    id: string;
    element: JSX.Element;
    isLocal?: boolean;
};

type ModalContextValue = {
    open: (element: JSX.Element, id: string, showCloseIcon?: boolean) => void;
    close: (id: string) => void;
    modals: ModalType[];
    portalRef: MutableRefObject<HTMLDivElement | null>;
};

export const modalContext = createContext<ModalContextValue | null>(null);

export const ModalProvider = ({ children }: PropsWithChildren) => {
    const [modals, setModals] = useState<ModalType[]>([]);
    const portalRef = useRef<HTMLDivElement | null>(null);

    const open = useCallback((element: JSX.Element, id: string, isLocal?: boolean) => {
        const modal = {
            id,
            element,
            isLocal,
        };
        setModals((prev) => [...prev, modal]);
    }, []);

    const close = useCallback((id: string) => setModals((prev) => prev.filter((v) => v.id !== id)), []);

    return (
        <modalContext.Provider value={{ modals, open, close, portalRef }}>
            <div style={{ position: 'relative' }} ref={portalRef}>
                {children}
            </div>
        </modalContext.Provider>
    );
};
