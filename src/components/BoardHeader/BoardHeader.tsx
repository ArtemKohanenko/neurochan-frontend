import { useState } from 'react';
import CreateThreadForm from '../CreateThreadForm/CreateThreadForm'
import classes from './BoardHeader.module.scss'

const MainButtons = () => {

  const [isFormShow, setIsFormShow] = useState(false);

  const createLinkHandler = () => {
    setIsFormShow(!isFormShow)
  }

  return (
    <>
      <div className={classes.container}>
        <a className={classes.boardLink}>Бред</a>
        <a className={classes.createLink} onClick={createLinkHandler}>{isFormShow ? 'Закрыть форму постинга' : 'Создать тред'}</a>
        <CreateThreadForm isShow={isFormShow}/>
      </div>
    </>
  )
}

export default MainButtons
