import { useEffect, useState } from 'react'
import MainButtons from '../../components/BoardHeader/BoardHeader'
import ThreadsList from '../../components/ThreadsList/ThreadsList'
import { observer } from 'mobx-react-lite'
import threadsStore from '../../stores/ThreadsStore';
import postsStore from '../../stores/PostsStore';

function Board() {

  const threadsOnPage = 10;

  useEffect(() => {
    threadsStore.loadThreads(threadsOnPage);
    postsStore.clearPostsRefs();
  })
  
  return (
    <>
      <div>
        <MainButtons/>
        <ThreadsList/>
      </div>
    </>
  )
}

export default Board
