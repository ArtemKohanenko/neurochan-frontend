import classes from './CreateThreadForm.module.scss'
import threadsStore from '../../stores/ThreadsStore'
import { useState } from 'react'


const CreateThreadForm = (props: {isShow: boolean}) => {

  const sendFormHandler = () => {
    threadsStore.addThread({text: text})
    setText('');
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className={classes.container} style={{display: props.isShow ? 'flex' : 'none'}}>
        <textarea className={classes.textArea} value={text} onChange={(e) => setText(e.target.value)} placeholder='Текст'>
        </textarea>
        <button className={classes.sendButton} onClick={sendFormHandler}>
          <span className={classes.text}>Отправить</span>
        </button>
      </div>
    </>
  )
}

export default CreateThreadForm
