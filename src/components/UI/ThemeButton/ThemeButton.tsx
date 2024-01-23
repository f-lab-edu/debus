import { darkMode_atom } from '@store/atoms/theme';
import classnames from 'classnames/bind';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { IoIosSunny, IoMdMoon } from 'react-icons/io';
import styles from './ThemeButton.module.css';
const cx = classnames.bind(styles);

const toggleDarkClass = (darkMode: boolean) => {
    if (darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

const ThemeButton = () => {
    const [darkMode, setDarkMode] = useAtom(darkMode_atom);
    const handleTheme = () => {
        setDarkMode(!darkMode);
        toggleDarkClass(!darkMode);
    };

    useEffect(() => {
        toggleDarkClass(darkMode);
    }, [darkMode]);
    return (
        <>
            <button className={cx('wrapper')} onClick={handleTheme}>
                {darkMode ? <IoMdMoon /> : <IoIosSunny />}
            </button>
        </>
    );
};

export default ThemeButton;
