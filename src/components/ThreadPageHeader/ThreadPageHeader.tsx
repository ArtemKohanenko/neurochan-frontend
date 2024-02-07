import { useState } from 'react';
import CreateThreadForm from '../CreateThreadForm/CreateThreadForm'
import classes from './ThreadPageHeader.module.scss'
import CreatePostForm from '../CreatePostForm/CreatePostForm';
import { useNavigate } from 'react-router';

const ThreadPageHeader = (props: {threadId: number}) => {

  const navigate = useNavigate();
  const [isFormShow, setIsFormShow] = useState(false)

  const boardLinkHandler = () => {
    navigate(-1);
  }

  const createLinkHandler = () => {
    setIsFormShow(!isFormShow)
  }

  return (
    <>
      <div className={classes.container}>
        <a className={classes.boardLink} onClick={boardLinkHandler}>Neurochan</a>
        <a className={classes.createLink} onClick={createLinkHandler}>{isFormShow ? 'Закрыть форму постинга' : 'Ответить в тред'}</a>
        <CreatePostForm threadId={props.threadId} isShow={isFormShow}/>
      </div>
    </>
  )
}

export default ThreadPageHeader
