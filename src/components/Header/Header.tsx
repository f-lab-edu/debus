import classnames from 'classnames/bind';
import { IoIosSunny, IoMdMoon } from 'react-icons/io';
import { useDarkMode } from 'src/context/DarkModeContext';
import styles from './Header.module.css';
const cx = classnames.bind(styles);

const Header = () => {
    const [darkMode, toggleDarkMode] = useDarkMode();
    const handleToggle = () => toggleDarkMode();
    return (
        <header id={cx('header')}>
            <div className={cx('header')}>
                <h1 className={cx('header-logo')}>DeBus</h1>
                <div className={cx('header-right')}>
                    <button className={cx('btn-mode')} onClick={handleToggle}>
                        {darkMode ? <IoMdMoon /> : <IoIosSunny />}
                    </button>
                    <button className={cx('btn-login')}>로그인</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
