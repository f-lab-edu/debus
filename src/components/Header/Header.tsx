import { darkMode_atom } from '@store/atoms/theme';
import classnames from 'classnames/bind';
import { useAtom } from 'jotai';
import { IoIosSunny, IoMdMoon } from 'react-icons/io';
import styles from './Header.module.css';
const cx = classnames.bind(styles);

const Header = () => {
    const [darkMode, setDarkMode] = useAtom(darkMode_atom);
    const handleToggle = () => setDarkMode(!darkMode);
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
