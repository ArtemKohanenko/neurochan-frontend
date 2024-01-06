import { useParams } from 'react-router'
import MainButtons from '../../components/BoardHeader/BoardHeader'
import Thread from '../../components/Thread/Thread'
import threadsStore from '../../stores/ThreadsStore'
import { useEffect } from 'react'
import postsStore from '../../stores/PostsStore'
import AllPostsList from '../../components/AllPostsList/AllPostsList'
import ThreadPageHeader from '../../components/ThreadPageHeader/ThreadPageHeader'

function ThreadPage() {

  const params = useParams();
  const thread = threadsStore.threads.find(el => el.threadId == Number(params.threadId))!;

  useEffect(() => {
    postsStore.loadPosts(thread.threadId);
  })

  return (
    <>
      <div>
        <ThreadPageHeader threadId={thread.threadId}/>
        <Thread thread={thread}/>
        <AllPostsList/>
      </div>
    </>
  )
}

export default ThreadPage
