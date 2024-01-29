import { darkModeAtom } from '@store/atoms/theme';
import classnames from 'classnames/bind';
import { useAtom } from 'jotai';
import { IoIosSunny, IoMdMoon } from 'react-icons/io';
import styles from './ThemeButton.module.css';
const cx = classnames.bind(styles);

const ThemeButton = () => {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom);

    return (
        <>
            <button className={cx('wrapper')} onClick={setDarkMode}>
                {darkMode ? <IoMdMoon /> : <IoIosSunny />}
            </button>
        </>
    );
};

export default ThemeButton;
