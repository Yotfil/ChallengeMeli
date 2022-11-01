import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItemRequest } from '../../api/items'
import iconShipping from '../../assets/ic_shipping2.png'
import Breadcumbs from '../../components/breadcumbs/Breadcumbs'
import Container from '../../components/container/Container'
import { useItems } from '../../context/ItemsContext'
import { getDecimals } from '../../helpers/getDecimals'
import classes from './detail.module.sass'

const Detail = () => {
  const { setCategories } = useItems()
  const { id } = useParams()

  const [currentItem, setCurrentItem] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    ;(async () => {
      const { ok, response } = await getItemRequest(id)
      if (ok) {
        const selectedItem = response.item
        const { price } = selectedItem
        const decimals = getDecimals(price.decimals)
        price.decimals = decimals
        setCurrentItem(selectedItem)
        setCategories(selectedItem.category)
        return
      }
      setError(!ok)
    })()
  }, [])

  return (
    <Container>
      <Breadcumbs></Breadcumbs>
      <div data-testid='container'>
        {currentItem !== null ? (
          <div
            className={classes.detail}
            data-testid='item'>
            <div className={classes.container}>
              <div className={classes.image}>
                <img
                  src={currentItem.picture}
                  alt={currentItem.title}
                  className={classes.pic}
                />
              </div>
              <div className={classes.info}>
                <p className={classes.condition}>
                  {currentItem.condition} - {currentItem.sold_quantity} vendidos
                </p>
                {currentItem.free_shipping && (
                  <div className={classes.shipping}>
                    <img
                      src={iconShipping}
                      alt={currentItem.title}
                      className={classes.icon}
                    />
                    <span>Envío gratis</span>
                  </div>
                )}
                <p className={classes.title}> {currentItem.title} </p>
                <p className={classes.price}>
                  ${currentItem.price.amount}
                  {currentItem.price.decimals && (
                    <sub className={classes.decimal}>
                      {currentItem.price.decimals}
                    </sub>
                  )}
                </p>
                <button
                  type='button'
                  className={classes.button}>
                  Comprar
                </button>
              </div>
            </div>
            <div className={classes.description}>
              <h3 className={classes.titleDescription}>
                Descripcion del producto
              </h3>
              <p className={classes.text}> {currentItem.description} </p>
            </div>
          </div>
        ) : (
          <div
            data-testid='loading'
            className={classes.loading}>
            <div className={classes.errorMessage}>
              {error ? <p>No se encontró ningun producto</p> : <></>}
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Detail
