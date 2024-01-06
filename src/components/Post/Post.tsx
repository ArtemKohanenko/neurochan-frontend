import { observer } from 'mobx-react-lite'
import { IPost } from '../../types/thread'
import { FormatDate } from '../../utils/FormatDate'
import classes from './Post.module.scss'


const Post = (props: {post: IPost}) => {

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.head}>
              <span className={classes.headText}>Аноним</span>
              <span className={classes.headText}>{FormatDate(new Date(props.post.date))}</span>
              <span className={classes.headText}>№{props.post.postId}</span>
          </div>
          <p className={classes.text}>{props.post.text}</p>
        </div>
      </div>
    </>
  )
}

export default Post
