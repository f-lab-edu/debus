import { darkMode_atom } from '@store/atoms/theme';
import classnames from 'classnames/bind';
import { useAtom } from 'jotai';
import { IoIosSunny, IoMdMoon } from 'react-icons/io';
import styles from './ThemeButton.module.css';
const cx = classnames.bind(styles);

const ThemeButton = () => {
    const [darkMode, setDarkMode] = useAtom(darkMode_atom);
    const handleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <button className={cx('wrapper')} onClick={handleTheme}>
                {darkMode ? <IoMdMoon /> : <IoIosSunny />}
            </button>
        </>
    );
};

export default ThemeButton;
