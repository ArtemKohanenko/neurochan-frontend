import { threadId } from 'worker_threads'
import postsStore from '../../stores/PostsStore'
import classes from './CreatePostForm.module.scss'
import { useState } from 'react'


const CreatePostForm = (props: {threadId: number, isShow: boolean}) => {

  const sendFormHandler = () => {
    postsStore.addPost(props.threadId, {text: text, isRequireReply: isRequireReply})
    setText('');
    setIsRequireReply(false);
  }

  const [text, setText] = useState('');
  const [isRequireReply, setIsRequireReply] = useState<boolean>(false);

  return (
    <>
      <div className={classes.container} style={{display: props.isShow ? 'flex' : 'none'}}>
        <textarea className={classes.textArea} value={text} onChange={(e) => setText(e.target.value)} placeholder='Текст'>
        </textarea>
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
