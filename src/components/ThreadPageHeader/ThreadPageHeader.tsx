import { useState } from 'react';
import CreateThreadForm from '../CreateThreadForm/CreateThreadForm'
import classes from './ThreadPageHeader.module.scss'
import CreatePostForm from '../CreatePostForm/CreatePostForm';

const ThreadPageHeader = (props: {threadId: number}) => {

  const [isFormShow, setIsFormShow] = useState(false);

  const createLinkHandler = () => {
    setIsFormShow(!isFormShow)
  }

  return (
    <>
      <div className={classes.container}>
        <a className={classes.boardLink}>Бред</a>
        <a className={classes.createLink} onClick={createLinkHandler}>{isFormShow ? 'Закрыть форму постинга' : 'Ответить в тред'}</a>
        <CreatePostForm threadId={props.threadId} isShow={isFormShow}/>
      </div>
    </>
  )
}

export default ThreadPageHeader
