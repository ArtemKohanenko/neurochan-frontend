import { useParams } from 'react-router'
import MainButtons from '../../components/BoardHeader/BoardHeader'
import Thread from '../../components/Thread/Thread'
import threadsStore from '../../stores/ThreadsStore'
import { useEffect } from 'react'
import postsStore from '../../stores/PostsStore'
import AllPostsList from '../../components/AllPostsList/AllPostsList'
import ThreadPageHeader from '../../components/ThreadPageHeader/ThreadPageHeader'
import ThreadInfo from '../../components/ThreadInfo/ThreadInfo'
import classes from './ThreadPage.module.scss'

function ThreadPage() {

  const params = useParams();
  const thread = threadsStore.threads.find(el => el.threadId == Number(params.threadId))!;

  useEffect(() => {
    console.log('текущий тред: ' + thread.threadId)
    postsStore.setCurrentThread(thread.threadId);
    postsStore.clearPostsRefs();
    postsStore.loadPosts(thread.threadId);
  })

  return (
    <>
      <div>
        <ThreadPageHeader threadId={thread.threadId}/>
        <div className={classes.container}>
          <ThreadInfo/>
          <Thread thread={thread}/>
          <AllPostsList/>
          <ThreadInfo/>
        </div>
      </div>
    </>
  )
}

export default ThreadPage
