import { IThread } from '../../types/thread'
import { FormatDate } from '../../utils/FormatDate'
import { CgArrowsExpandRight } from 'react-icons/cg'
import classes from './Thread.module.scss'
import PostsList from '../PostsList/PostsList'
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from 'react'
import postsStore from '../../stores/PostsStore'
import { observer } from 'mobx-react-lite'


const Thread = (props: {thread: IThread}) => {

  const thread = props.thread;
  const threadRef = useRef(null)
  const {currentThreadId, selectedPostId, postsRefs, repliesOnPosts} = postsStore;
  const relpiesOnThisPost = repliesOnPosts[props.thread.threadId]

  const isSelected = postsStore.selectedPostId == props.thread.threadId

  useEffect(() => {
    postsStore.postsRefs[props.thread.threadId] = threadRef
  })

  const navigate = useNavigate();

  const answerHandler = () => {
    navigate(String(props.thread.hasOwnProperty("threadId") ? props.thread.threadId : 'ТыПопалНеТудаБратан'))
  }

  const scrollToPost = (postId: number) => {
    const targetRef = postsRefs[postId]

    if (targetRef.current) {
      targetRef.current.scrollIntoView();
      postsStore.selectPost(postId)
    }
  }

  return (
    <>
      <div className={`${classes.container} ${isSelected ? classes.selected : null}`} ref={threadRef}>
        <div className={classes.head}>
          <span className={classes.headText}>Аноним</span>
          <span className={classes.headText}>{FormatDate(new Date(props.thread.date))}</span>
          <span className={classes.headText}>№{props.thread.threadId}</span>
          {
          currentThreadId != thread.threadId
            ? <a className={classes.replyLink} onClick={answerHandler}>Ответ</a>
            : null
          }
        </div>
        <p className={classes.text}>{props.thread.text}</p>
        { relpiesOnThisPost && <div className={classes.links}>
              {Array.from(relpiesOnThisPost).map((replyLink) =>
                <a className={classes.link} onClick={() => {scrollToPost(replyLink)}}>{`>>${replyLink}`}</a>)}
            </div>
            }
      </div>
    </>
  )
}

export default observer(Thread)
