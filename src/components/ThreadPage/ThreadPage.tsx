import { useParams } from 'react-router'
import MainButtons from '../BoardHeader/BoardHeader'
import PostsList from '../../components/PostsList/PostsList'
import Thread from '../../components/Thread/Thread'
import ThreadsList from '../../components/ThreadsList/ThreadsList'
import threadsStore from '../../stores/ThreadsStore'
import { useEffect } from 'react'
import postsStore from '../../stores/PostsStore'
import { observer } from 'mobx-react-lite'

function ThreadPage() {

  const params = useParams();
  const thread = threadsStore.threads.find(el => el.threadId == Number(params.threadId))!;

  const { loading, posts } = postsStore;

  useEffect(() => {
    postsStore.loadPosts(thread.threadId);
  })

  return (
    <>
      <div>
        <MainButtons/>
        <Thread thread={thread}/>
        { posts.length > 0 ? <PostsList posts={posts}/> : null}
      </div>
    </>
  )
}

export default ThreadPage
