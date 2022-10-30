import { useItems } from '../../context/ItemsContext'
import classes from './breadcumbs.module.sass'

const Breadcumbs = () => {
  const { categories = [] } = useItems()

  return (
    <>
      {categories ? (
        <div className={classes.breadcumbs}>
          {categories.map((item, index) => (
            <span
              key={item.id}
              className={classes.item}>
              {item.name}
              {categories.length !== index + 1 && (
                <span className={classes.separator}>&gt;</span>
              )}
            </span>
          ))}
        </div>
      ) : (
        <div className={classes.breadcumbs}></div>
      )}
    </>
  )
}

export default Breadcumbs
