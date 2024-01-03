import classes from './MainButtons.module.scss'

const MainButtons = () => {
  return (
    <>
      <div className={classes.container}>
        <a className={classes.boardLink}>Бред</a>
        <a className={classes.createLink}>Создать тред</a>
      </div>
    </>
  )
}

export default MainButtons
