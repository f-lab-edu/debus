import classnames from 'classnames/bind';
import { BsPlusCircleFill } from 'react-icons/bs';
import { PiPaperPlaneTiltFill } from 'react-icons/pi';
import styles from './ChatForm.module.css';
const cx = classnames.bind(styles);

const ChatForm = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('inner-form-container')}>
                <form>ChatForm</form>
                <div className={cx('footer')}>
                    <BsPlusCircleFill />
                    <PiPaperPlaneTiltFill />
                </div>
            </div>
        </div>
    );
};

export default ChatForm;
