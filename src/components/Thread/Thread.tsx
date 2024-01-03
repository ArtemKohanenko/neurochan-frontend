import { IThread } from '../../types/thread'
import { FormatDate } from '../../utils/FormatDate'
import { CgArrowsExpandRight } from 'react-icons/cg'
import classes from './Thread.module.scss'

const Thread = (props: {thread: IThread}) => {

  return (
    <>
      <div className={classes.container}>
        <div className={classes.head}>
          <span className={classes.headText}>Аноним</span>
          <span className={classes.headText}>{FormatDate(props.thread.date)}</span>
          <span className={classes.headText}>№{props.thread.id}</span>
          <a className={classes.replyLink}>Ответ</a>
        </div>
        <p className={classes.text}>{props.thread.text}</p>

        {props.thread.replies ? 
        <div className={classes.replyElements}>
          <div className={classes.replies}>
          {
            props.thread.replies.map((reply) => {
              return <a className={classes.replyLink}>{'>>' + reply}</a>
            })
          }
          </div>

          <div className={classes.expandString}>
            <button className={classes.expandButton}>
              <CgArrowsExpandRight className={classes.expandIcon}/>
            </button>
            <span className={classes.text}>Пропущено {props.thread.replies?.length} постов</span>
          </div>
        </div>
        
        : null}
      </div>
    </>
  )
}

export default Thread
