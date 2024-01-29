import ThemeButton from '@components/UI/ThemeButton/ThemeButton';
import classnames from 'classnames/bind';
import styles from './Header.module.css';
const cx = classnames.bind(styles);

const Header = () => {
    return (
        <header id={cx('header')}>
            <div className={cx('header')}>
                <h1 className={cx('header-logo')}>DeBus</h1>
                <div className={cx('header-right')}>
                    <ThemeButton />
                    <button className={cx('btn-login')}>로그인</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
