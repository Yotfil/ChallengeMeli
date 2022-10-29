import { Link } from 'react-router-dom'
import iconShipping from '../../assets/ic_shipping@2x.png.png.png'
import Breadcumbs from '../../components/breadcumbs/Breadcumbs'
import Container from '../../components/container/Container'
import { useItems } from '../../context/ItemsContext'
import './items.sass'

const Items = () => {
  const { items = [] } = useItems()

  return (
    <Container>
      <Breadcumbs></Breadcumbs>

      {items.length > 0 ? (
        <ol className='items'>
          {items.map(item => (
            <li
              key={item.id}
              className='items__item'>
              <div className='items__container'>
                <div className='items__img-cont'>
                  <Link
                    to={`./${item.id}`}
                    className='items__img'>
                    <img
                      className='items__pic'
                      src={item.picture}
                      alt={item.title}
                    />
                  </Link>
                </div>
                <div className='items__info'>
                  <div className='items__info-desc info'>
                    <div className='info__cont-price'>
                      <p className='info__price'> $ {item.price.amount} </p>
                      {item.free_shipping && (
                        <img
                          src={iconShipping}
                          alt={item.title}
                          className='info__icon'
                        />
                      )}
                    </div>

                    <p className='info__title'>{item.title} </p>
                  </div>
                  <div className='item__condition'>
                    <p> {item.address} </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <div className='items__container'></div>
      )}
    </Container>
  )
}

export default Items
