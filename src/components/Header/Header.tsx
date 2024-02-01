import Avatar from '@components/Avatar/Avatar';
import ThemeButton from '@components/UI/ThemeButton/ThemeButton';
import { authAtom } from '@store/atoms/auth';
import classnames from 'classnames/bind';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { login, logout, onUserStateChange } from 'src/api/firebase';
import styles from './Header.module.css';
const cx = classnames.bind(styles);

const Header = () => {
    const [user, setUser] = useAtom(authAtom);
    useEffect(() => {
        onUserStateChange(setUser);
    }, [setUser]);
    return (
        <header id={cx('header')}>
            <div className={cx('header')}>
                <h1 className={cx('header-logo')}>DeBus</h1>
                <div className={cx('header-right')}>
                    <ThemeButton />
                    {user && <Avatar />}
                    {user ? (
                        <button className={cx('btn-login')} onClick={logout}>
                            로그아웃
                        </button>
                    ) : (
                        <button className={cx('btn-login')} onClick={login}>
                            로그인
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
