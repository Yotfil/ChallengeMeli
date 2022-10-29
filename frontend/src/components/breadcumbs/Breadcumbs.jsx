import { useItems } from '../../context/ItemsContext'
import classes from './breadcumbs.module.sass'

const Breadcumbs = () => {
  const { categories = [] } = useItems()

  return (
    <>
      {categories ? (
        <div className={classes.breadcumbs}>
          {categories.map((item, index) => (
            <a
              href='#'
              key={item.id}
              className={classes.breadcumbs__item}>
              {item.name}
              {categories.length !== index + 1 && (
                <span className={classes.breadcumbs__separator}>&gt;</span>
              )}
            </a>
          ))}
        </div>
      ) : (
        <div className={classes.breadcumbs}></div>
      )}
    </>
  )
}

export default Breadcumbs
