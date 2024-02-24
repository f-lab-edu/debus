import classnames from 'classnames/bind';
import styles from './Button.module.css';
const cx = classnames.bind(styles);

type ButtonProps = {
    text: string;
    variant: string;
    onClick: () => void;
};

const Button = ({ text, variant, onClick }: ButtonProps) => {
    return (
        <button className={cx(`${variant}`)} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
