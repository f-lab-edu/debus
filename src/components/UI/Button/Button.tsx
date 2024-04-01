import classnames from 'classnames/bind';
import styles from './Button.module.css';
const cx = classnames.bind(styles);

type ButtonProps = {
    text: string;
    variant: string;
    onClick?: () => void | Promise<void>;
    type?: 'button' | 'submit';
    formId?: string;
};

const Button = ({ text, variant, onClick, type = 'button', formId }: ButtonProps) => {
    return (
        <button className={cx(`${variant}`)} onClick={onClick} type={type} form={formId}>
            {text}
        </button>
    );
};

export default Button;
