import classnames from 'classnames/bind';
import { KeyboardEventHandler, useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsPlusCircleFill } from 'react-icons/bs';
import { PiPaperPlaneTiltFill } from 'react-icons/pi';
import styles from './ChatForm.module.css';
const cx = classnames.bind(styles);

type FormData = {
    content: string;
};

const ChatForm = () => {
    const { register, handleSubmit, setFocus, reset, watch } = useForm<FormData>();
    const [textareaHeight, setTextareaHeight] = useState('17px');
    const value = watch('content');

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const content = data.content;
        if (content.trim() === '') {
            return;
        }
        console.log(`${content} 전송!`);
        setTextareaHeight('17px');
        reset();
    };

    const handleEnterSubmit: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
        if (e.key !== 'Enter') return;
        if (e.shiftKey) return;
        if (!e.nativeEvent.isComposing) {
            e.preventDefault();
            onSubmit({
                content: value,
            });
        }
    };

    const resizeTextareaHeight = useCallback(
        (value: string) => {
            const lineHeight = 17;
            const totalTextHeight = value.split('\n').length * lineHeight;
            const newHeight = totalTextHeight < lineHeight ? textareaHeight : totalTextHeight;
            setTextareaHeight(newHeight + 'px');
        },
        [textareaHeight],
    );

    useEffect(() => {
        if (value) resizeTextareaHeight(value);
    }, [value, resizeTextareaHeight]);

    useEffect(() => {
        setFocus('content');
    }, [setFocus]);

    return (
        <div className={cx('container')}>
            <div className={cx('inner-form-container')}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea
                        className={cx('text-input')}
                        style={{ height: textareaHeight }}
                        {...register('content')}
                        rows={1}
                        onKeyDown={handleEnterSubmit}
                        placeholder="내용을 입력해주세요"
                    ></textarea>
                    <div className={cx('footer')}>
                        <button className={cx('file-btn')}>
                            <BsPlusCircleFill />
                        </button>
                        <button type="submit" className={cx('submit-btn', { active: value })} disabled={!value}>
                            <PiPaperPlaneTiltFill />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatForm;
