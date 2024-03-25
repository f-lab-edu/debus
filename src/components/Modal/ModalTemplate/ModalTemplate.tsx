import ModalBody from '@components/Modal/ModalTemplate/ModalBody';
import ModalHeader from '@components/Modal/ModalTemplate/ModalHeader';
import Overlay, { OverlayProps } from '@components/UI/Overlay/Overlay';
import classnames from 'classnames/bind';
import { PropsWithChildren, memo } from 'react';
import styles from './ModalTemplate.module.css';
const cx = classnames.bind(styles);

type ModalTemplate = PropsWithChildren &
    OverlayProps & {
        isOverlay: boolean;
    };

export type ModalStyle = 'default' | 'local';

const Container = memo(({ children, ...rest }: ModalTemplate) => {
    return rest.isOverlay ? (
        <Overlay onClose={rest.onClose} preventClick={rest.preventClick} transparent={rest.transparent}>
            {children}
        </Overlay>
    ) : (
        <>{children}</>
    );
});

const ModalTemplate = ({
    children,
    styleType,
    title,
    onClose,
    ...rest
}: ModalTemplate & { styleType: ModalStyle; title: string }) => {
    return (
        <Container
            onClose={onClose}
            isOverlay={rest.isOverlay}
            preventClick={rest.preventClick}
            transparent={rest.transparent}
        >
            <div
                className={cx('modal-container', `${styleType}`)}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={() => {}}
            >
                <ModalHeader title={title} onClose={onClose} />
                <ModalBody styleType={styleType}>{children}</ModalBody>
            </div>
        </Container>
    );
};

Container.displayName = 'Container';

export default ModalTemplate;
