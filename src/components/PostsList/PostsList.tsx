import classes from './PostsList.module.scss'
import { IPost, IThread } from '../../types/thread'
import { observer } from 'mobx-react-lite'
import Post from '../Post/Post'

const PostsList = (props: {posts: IPost[]}) => {

  return (
    <>
      <div className={classes.container}>
        {
          props.posts.map((post) => {
            return <Post post={post} key={post.postId}/>
          })
        }
      </div>
    </>
  )
}

export default observer(PostsList)
