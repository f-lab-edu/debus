import ChatPanel from '@pages/Lines/ChatPanel/ChatPanel';
import SidePanel from '@pages/Lines/SidePanel/SidePanel';
import classnames from 'classnames/bind';
import styles from './Lines.module.css';
const cx = classnames.bind(styles);

const Lines = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('side')}>
                <SidePanel />
            </div>
            <div className={cx('chat')}>
                <ChatPanel />
            </div>
        </div>
    );
};

export default Lines;
