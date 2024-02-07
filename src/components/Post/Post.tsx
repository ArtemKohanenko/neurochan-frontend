import { IPost } from '../../types/thread'
import { FormatDate } from '../../utils/FormatDate'
import classes from './Post.module.scss'
import { useEffect, useRef, useState } from 'react'
import postsStore from '../../stores/PostsStore'
import ReactDOM from 'react-dom'
import { observer } from 'mobx-react-lite'


const Post = (props: {post: IPost}) => {

  const {selectedPostId, postsRefs, repliesOnPosts} = postsStore;
  const relpiesOnThisPost = repliesOnPosts[props.post.postId]

  const isSelected = selectedPostId == props.post.postId

  const [answerLink, setAnswerLink] = useState<string | null>(null);
  const postRef = useRef(null)

  useEffect(() => {
    if (props.post) {
      postsRefs[props.post.postId] = postRef
    }

    const nums = props.post?.text.match(/^\>\>(\d+)/)
  
    if (nums) {
      const numsStr = nums[1]
      setAnswerLink(numsStr)

      const repliesSet = repliesOnPosts[Number(numsStr)];

      if (repliesSet) {
        repliesSet.add(props.post.postId)
      }
    }
  }, [props.post])

  const scrollToPost = (postId: number) => {
    const targetRef = postsRefs[postId]

    if (targetRef.current) {
      targetRef.current.scrollIntoView();
      postsStore.selectPost(postId)
    }
  }

  return (
    <>
      <div className={`${classes.wrapper} ${isSelected ? classes.selected : classes.unselected}`} ref={postRef}>
        <div className={classes.container}>
          <div className={classes.head}>
              <span className={classes.headText}>Аноним</span>
              <span className={classes.headText}>{FormatDate(new Date(props.post.date))}</span>
              <span className={classes.headText}>№{props.post.postId}</span>
          </div>
          <p className={classes.text}>
            { answerLink ?
              <>
                <a onClick={() => {scrollToPost(Number(answerLink))}}>{'>>' + answerLink}</a>
                <br/>
              </>
            : null}
            {props.post.text.replace('>>' + answerLink + ' ', '')}
          </p>
            { relpiesOnThisPost && <div className={classes.links}>
              {Array.from(relpiesOnThisPost).map((replyLink) =>
                <a className={classes.link} onClick={() => {scrollToPost(replyLink)}}>{`>>${replyLink}`}</a>)}
            </div>
            }
        </div>
      </div>
    </>
  )
}

export default observer(Post)
