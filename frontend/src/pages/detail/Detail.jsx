import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import iconShipping from '../../assets/ic_shipping@2x.png.png.png'
import Breadcumbs from '../../components/breadcumbs/Breadcumbs'
import Container from '../../components/container/Container'
import { useItems } from '../../context/ItemsContext'
import { getDecimals } from '../../helpers/getDecimals'
import { getDetailItem } from '../../helpers/getDetailItem'
import './detail.sass'

const Detail = () => {
  const { items = [] } = useItems()

  const { setCategories } = useItems()

  const { id } = useParams()

  const [currentItem, setCurrentItem] = useState(null)

  useEffect(() => {
    ;(async () => {
      const selectedItem = await getDetailItem(id)
      const { price } = selectedItem
      const decimals = getDecimals(selectedItem.price.decimals)
      price.decimals = decimals
      setCurrentItem(selectedItem)
      setCategories(selectedItem.category)
    })()
  }, [])

  return (
    <Container>
      <Breadcumbs></Breadcumbs>

      {currentItem !== null ? (
        <div className='detail'>
          <div className='detail__container'>
            <div className='detail__image'>
              <img
                src={currentItem.picture}
                alt={currentItem.title}
                className='detail__pic'
              />
            </div>
            <div className='detail__info'>
              <p className='detail__condition'>
                {currentItem.condition} - {currentItem.sold_quantity} vendidos
              </p>
              {currentItem.free_shipping && (
                <div className='detail__shipping'>
                  <img
                    src={iconShipping}
                    alt={currentItem.title}
                    className='detail__icon'
                  />
                  <span>Envío gratis</span>
                </div>
              )}
              <p className='detail__title'> {currentItem.title} </p>
              <p className='detail__price'>
                ${currentItem.price.amount}
                {currentItem.price.decimals && (
                  <sub className='detail__decimal'>
                    {currentItem.price.decimals}
                  </sub>
                )}
              </p>
              <button
                type='button'
                className='detail__button'>
                Comprar
              </button>
            </div>
          </div>
          <div className='description'>
            <h3 className='description__title'>Descripcion del producto</h3>
            <p className='description__text'> {currentItem.description} </p>
          </div>
        </div>
      ) : (
        <div className='detail__loading'></div>
      )}
    </Container>
  )
}

export default Detail
