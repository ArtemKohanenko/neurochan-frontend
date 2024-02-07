import { useState } from 'react';
import CreateThreadForm from '../CreateThreadForm/CreateThreadForm'
import classes from './ThreadInfo.module.scss'
import postsStore from '../../stores/PostsStore';
import { observer } from 'mobx-react-lite';

const ThreadInfo = () => {

  const threadId = postsStore.currentThreadId

  const updateHandler = () => {
    if (threadId) {
      postsStore.loadPosts(threadId);
    }
  }

  return (
    <>
      <div className={classes.container}>
        <a className={classes.text} onClick={updateHandler}>Обновить</a>
      </div>
    </>
  )
}

export default observer(ThreadInfo)
