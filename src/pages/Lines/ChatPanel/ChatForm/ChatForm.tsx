import classnames from 'classnames/bind';
import { ChangeEvent, FormEvent, KeyboardEvent, useCallback, useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { PiPaperPlaneTiltFill } from 'react-icons/pi';
import styles from './ChatForm.module.css';
const cx = classnames.bind(styles);

const ChatForm = () => {
    const [content, setContent] = useState('');
    const [textareaHeight, setTextareaHeight] = useState('17px');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`${content} 전송!`);
        setContent('');
        setTextareaHeight('17px');
    };

    const handleEnterSubmit = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey) return;
        if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
            handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setContent(value);
        resizeTextareaHeight(value);
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

    return (
        <div className={cx('container')}>
            <div className={cx('inner-form-container')}>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className={cx('text-input')}
                        style={{ height: textareaHeight }}
                        rows={1}
                        value={content}
                        onChange={handleChange}
                        onKeyDown={handleEnterSubmit}
                        placeholder="내용을 입력해주세요"
                    ></textarea>
                    <div className={cx('footer')}>
                        <button className={cx('file-btn')}>
                            <BsPlusCircleFill />
                        </button>
                        <button type="submit" className={cx('submit-btn', { active: content })} disabled={!content}>
                            <PiPaperPlaneTiltFill />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatForm;
