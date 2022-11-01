import { useItems } from '../../context/ItemsContext'
import classes from './breadcumbs.module.sass'

const Breadcumbs = () => {
  const { categories = [] } = useItems()

  return (
    <>
      {categories.length > 0 ? (
        <div className={classes.breadcumbs}>
          {categories.map((item, index) => (
            <span
              key={item.id}
              data-testid='breadcumbs'
              className={classes.item}>
              {item.name}
              {categories.length !== index + 1 && (
                <span className={classes.separator}>&gt;</span>
              )}
            </span>
          ))}
        </div>
      ) : (
        <div className={classes.breadcumbs} data-testid='void'></div>
      )}
    </>
  )
}

export default Breadcumbs
