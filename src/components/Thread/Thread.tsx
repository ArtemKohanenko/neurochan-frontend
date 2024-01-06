import { IThread } from '../../types/thread'
import { FormatDate } from '../../utils/FormatDate'
import { CgArrowsExpandRight } from 'react-icons/cg'
import classes from './Thread.module.scss'
import PostsList from '../PostsList/PostsList'
import { useNavigate } from "react-router-dom";


const Thread = (props: {thread: IThread}) => {

  const navigate = useNavigate();

  const answerHandler = () => {
    console.log(props)
    navigate(String(props.thread.hasOwnProperty("threadId") ? props.thread.threadId : 'жоп'))
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.head}>
          <span className={classes.headText}>Аноним</span>
          <span className={classes.headText}>{FormatDate(new Date(props.thread.date))}</span>
          <span className={classes.headText}>№{props.thread.threadId}</span>
          <a className={classes.replyLink} onClick={answerHandler}>Ответ</a>
        </div>
        <p className={classes.text}>{props.thread.text}</p>
      </div>
    </>
  )
}

export default Thread
