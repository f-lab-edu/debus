import ChatMembers from '@pages/Lines/SidePanel/ChatMembers/ChatMembers';
import ChatRoomHeader from '@pages/Lines/SidePanel/ChatRoomHeader/ChatRoomHeader';
import classnames from 'classnames/bind';
import styles from './SidePanel.module.css';
const cx = classnames.bind(styles);

const SidePanel = () => {
    return (
        <div className={cx('container')}>
            <ChatRoomHeader />
            <ChatMembers />
        </div>
    );
};

export default SidePanel;
