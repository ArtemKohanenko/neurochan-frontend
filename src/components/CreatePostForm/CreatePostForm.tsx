import { threadId } from 'worker_threads'
import postsStore from '../../stores/PostsStore'
import classes from './CreatePostForm.module.scss'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'


const CreatePostForm = (props: {threadId: number, isShow: boolean}) => {

  const [text, setText] = useState('');
  const [isRequireReply, setIsRequireReply] = useState<boolean>(false);
  const [captchaValue, setCaptchaValue] = useState('');
  let captcha: ReCAPTCHA | null;

  const sendFormHandler = () => {
    postsStore.addPost(props.threadId, {text: text, isRequireReply: isRequireReply, captchaValue: captchaValue})
    setText('');
    captcha?.reset();
    setIsRequireReply(false);
  }

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setCaptchaValue(value);
    }
  }

  return (
    <>
      <div className={classes.container} style={{display: props.isShow ? 'flex' : 'none'}}>
        <textarea className={classes.textArea} value={text} onChange={(e) => setText(e.target.value)} placeholder='Текст'>
        </textarea>
        <ReCAPTCHA
          sitekey="6LffdmspAAAAAFhd2Rd-gmae2flzlCre1gKxZvIJ"
          ref = {el => {captcha = el}}
          onChange={handleCaptchaChange}
        />
        <div className={classes.row}>
          <button className={classes.sendButton} onClick={sendFormHandler}>
            <span className={classes.text}>Отправить</span>
          </button>
          <input type="checkbox" id="checkbox" className={classes.check} checked={isRequireReply} onChange={(e) => setIsRequireReply(e.target.checked)}/>
          <span className={classes.text}>Поговорите со мной</span>
        </div>
      </div>
    </>
  )
}

export default CreatePostForm
