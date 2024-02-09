import classes from './CreateThreadForm.module.scss'
import ReCAPTCHA from 'react-google-recaptcha'
import threadsStore from '../../stores/ThreadsStore'
import { useState, useRef } from 'react'


const CreateThreadForm = (props: {isShow: boolean}) => {

  const [text, setText] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  let captcha: ReCAPTCHA | null;

  const sendFormHandler = () => {
    threadsStore.addThread({text: text, captchaValue: captchaValue})
    setText('');
    captcha?.reset();
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
        <div className={classes.sendContainer}>
            <ReCAPTCHA
              sitekey="6LffdmspAAAAAFhd2Rd-gmae2flzlCre1gKxZvIJ"
              ref = {el => {captcha = el}}
              onChange={handleCaptchaChange}
            />
          <button className={classes.sendButton} onClick={sendFormHandler}>
            <span className={classes.text}>Отправить</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default CreateThreadForm
