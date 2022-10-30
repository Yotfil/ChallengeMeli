import { Link } from 'react-router-dom'
import iconShipping from '../../assets/ic_shipping@2x.png.png.png'
import Breadcumbs from '../../components/breadcumbs/Breadcumbs'
import Container from '../../components/container/Container'
import { useItems } from '../../context/ItemsContext'
import classes from './items.module.sass'

const Items = () => {
  const { items = [], dataOk } = useItems()

  return (
    <Container>
      <Breadcumbs></Breadcumbs>

      {items.length > 0 ? (
        <ol>
          {items.map(item => (
            <li
              key={item.id}
              className={classes.item}>
              <div className={classes.container}>
                <div className={classes.imgCont}>
                  <Link
                    to={`./${item.id}`}
                    className={classes.img}>
                    <img
                      className={classes.pic}
                      src={item.picture}
                      alt={item.title}
                    />
                  </Link>
                </div>
                <div className={classes.infoCont}>
                  <div className={classes.info}>
                    <div className={classes.contPrice}>
                      <p className={classes.price}> $ {item.price.amount} </p>
                      {item.free_shipping && (
                        <img
                          src={iconShipping}
                          alt={item.title}
                          className={classes.icon}
                        />
                      )}
                      <span className={classes.condition}>
                        - {item.condition}
                      </span>
                    </div>

                    <p className={classes.title}>{item.title} </p>
                  </div>
                  <div className={classes.condition}>
                    <p> {item.address} </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <div className={classes.container}>
          <div className={classes.errorMessage}>
            {!dataOk ? <p>No se encontró nada </p> : <p>Buscando...</p>}
          </div>
        </div>
      )}
    </Container>
  )
}

export default Items
