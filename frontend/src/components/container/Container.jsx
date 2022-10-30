import classes from './container.module.sass'

const Container = ({ children }) => {
  return <main className={classes.main}>{children}</main>
}

export default Container
