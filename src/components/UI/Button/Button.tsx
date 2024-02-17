import classnames from 'classnames/bind';
import styles from './Button.module.css';
const cx = classnames.bind(styles);

type ButtonPropsType = {
    text: string;
    variant: string;
    onClick: () => void;
};

const Button = ({ text, variant, onClick }: ButtonPropsType) => {
    return (
        <button className={cx(`${variant}`)} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
