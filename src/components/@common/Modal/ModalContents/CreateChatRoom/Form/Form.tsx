import classnames from 'classnames/bind';
import { PropsWithChildren, memo } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Form.module.css';
const cx = classnames.bind(styles);

export type ChatRoomInfo = {
    title: string;
    desc: string;
    options: string;
};

const Form = ({
    children,
    onSubmit,
}: PropsWithChildren & { onSubmit: (newChatRoom: ChatRoomInfo) => Promise<void> | void }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ChatRoomInfo>({ mode: 'onSubmit' });

    return (
        <form className={cx('form-container')} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">방 제목</label>
            <input
                id="title"
                type="text"
                {...register('title', {
                    required: true,
                    minLength: {
                        value: 2,
                        message: '2글자 이상 입력해주세요.',
                    },
                })}
            />
            <p className={cx('error-msg')}>{errors.title?.message}</p>

            <label htmlFor="desc">설명</label>
            <input
                type="text"
                {...register('desc', {
                    required: true,
                    minLength: {
                        value: 5,
                        message: '5글자 이상 입력해주세요.',
                    },
                })}
            />
            <p className={cx('error-msg')}>{errors.desc?.message}</p>
            <label htmlFor="options">옵션</label>
            <input type="text" {...register('options')} placeholder=",(콤마)로 구분해주세요." />
            {children}
        </form>
    );
};

export default memo(Form);
