import { atomWithReset } from 'jotai/utils';

type ModalType = {
    isOpen: boolean;
    type?: string;
    props?: ModalPropsType;
};

export type ModalPropsType = {
    text?: string;
    handler?: () => void;
};

const initialState: ModalType = {
    isOpen: false,
    type: '',
    props: {},
};

export const modalAtom = atomWithReset(initialState);
