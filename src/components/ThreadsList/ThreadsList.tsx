import { useState } from 'react'
import classes from './ThreadsList.module.scss'
import { IThread } from '../../types/thread'
import Thread from '../Thread/Thread'

const ThreadsList = () => {
  const [threads, setThreads] = useState<IThread[]>([{id: 1, date: new Date(), text: 'Бла бла бла', replies: [2112, 2142, 2132]}, {id: 2, date: new Date(), text: 'Я твою мать ебал'}])

  return (
    <>
      <div className={classes.container}>
        {
          threads.map((thread) => {
            return <div className={classes.threadContainer}>
              <Thread thread={thread} key={thread.id}/>
              <div className={classes.divider}></div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default ThreadsList
