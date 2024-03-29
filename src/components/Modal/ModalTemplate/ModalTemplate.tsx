import Overlay, { OverlayProps } from '@components/UI/Overlay/Overlay';
import classnames from 'classnames/bind';
import { PropsWithChildren, memo } from 'react';
import { ModalStyle } from 'src/@types/modal';
import styles from './ModalTemplate.module.css';
const cx = classnames.bind(styles);

type ModalTemplate = PropsWithChildren &
    OverlayProps & {
        isOverlay: boolean;
        styleType?: ModalStyle;
    };

const Container = memo(({ children, ...rest }: Omit<ModalTemplate, 'styleType' | 'title'>) => {
    return rest.isOverlay ? (
        <Overlay onClose={rest.onClose} preventClick={rest.preventClick} transparent={rest.transparent}>
            {children}
        </Overlay>
    ) : (
        <>{children}</>
    );
});

const ModalTemplate = ({ children, onClose, styleType = 'global', ...rest }: ModalTemplate) => {
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
                {children}
            </div>
        </Container>
    );
};

Container.displayName = 'Container';

export default memo(ModalTemplate);
