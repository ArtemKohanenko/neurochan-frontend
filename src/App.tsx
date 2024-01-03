import { useState } from 'react'
import MainButtons from './components/MainButtons/MainButtons'
import ThreadsList from './components/ThreadsList/ThreadsList'

function App() {
  return (
    <>
      <div>
        <MainButtons/>
        <ThreadsList/>
      </div>
    </>
  )
}

export default App
