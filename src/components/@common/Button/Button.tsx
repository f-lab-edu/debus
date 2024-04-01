import classnames from 'classnames/bind';
import styles from './Button.module.css';
const cx = classnames.bind(styles);

type ButtonProps = {
    text: string;
    variant: string;
    onClick?: () => void | Promise<void>;
    type?: 'button' | 'submit';
};

const Button = ({ text, variant, onClick, type = 'button' }: ButtonProps) => {
    return (
        <button className={cx(`${variant}`)} onClick={onClick} type={type}>
            {text}
        </button>
    );
};

export default Button;
