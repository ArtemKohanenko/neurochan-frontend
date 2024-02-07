import { useEffect, useState } from 'react'
import classes from './ThreadsList.module.scss'
import { IThread } from '../../types/thread'
import Thread from '../Thread/Thread'
import threadsStore from '../../stores/ThreadsStore'
import { observer } from 'mobx-react-lite'
import PostsList from '../PostsList/PostsList'
import { CgArrowsExpandRight } from 'react-icons/cg'

const ThreadsList = () => {
  const { loading, threads } = threadsStore;

  return (
    <>
      <div className={classes.container}>
        {
          threads.map((thread) => {
            return <div className={classes.threadContainer} key={thread.threadId}>
              <Thread thread={thread} key={thread.threadId}/>
              {thread.posts && thread.posts.length > 0 ? 
                <div className={classes.replyElements}>
                  <div className={classes.expandString}>
                    <button className={classes.expandButton}>
                      <CgArrowsExpandRight className={classes.expandIcon}/>
                    </button>
                    <span className={classes.text}>Пропущено {thread.posts.length} постов</span>
                  </div>
                  <PostsList posts={thread.lastPosts}/>
                </div>
              : null}
              <div className={classes.divider}></div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default observer(ThreadsList)
