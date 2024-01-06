import { threadId } from 'worker_threads'
import postsStore from '../../stores/PostsStore'
import classes from './CreatePostForm.module.scss'
import { useState } from 'react'


const CreatePostForm = (props: {threadId: number, isShow: boolean}) => {

  const sendFormHandler = () => {
    postsStore.addPost(props.threadId, {text: text})
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

export default CreatePostForm
