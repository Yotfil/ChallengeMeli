import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import searchIcon from '../../assets/ic_Search.png'
import logoMeli from '../../assets/Logo_ML.png'
import { useItems } from '../../context/ItemsContext'
import { getQueryParameter } from '../../helpers/getQueryParameter'

import './searchBar.sass'

const SearchBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { setItemToSearch } = useItems()

  const [values, setValues] = useState({
    search: '',
  })

  useEffect(() => {
    if (!location.search) return
    const queries = getQueryParameter(location.search)
    setItemToSearch(queries.search)
    setValues({
      search: queries.search,
    })
  }, [location.search])

  const searchItem = e => {
    e.preventDefault()

    if (values.search.length < 2) return
    navigate(`/items?search=${values.search}`)

    setItemToSearch(values.search)
  }

  const handleInput = ({ target }) => {
    const { name, value } = target

    setValues({
      [name]: value,
    })
  }

  return (
    <nav className='navbar'>
      <div className='navbar__cont'>
        <Link to={`/`}>
          <img
            src={logoMeli}
            alt='Logo de Mercado Libre'
            className='navbar__logo'
          />
        </Link>

        <form
          action=''
          className='navbar__buscador'
          onSubmit={searchItem}>
          <input
            type='text'
            className='navbar__input'
            placeholder='Nunca Dejes de Buscar'
            name='search'
            value={values.search}
            onChange={handleInput}
          />
          <button type='submit'>
            <img
              src={searchIcon}
              className='navbar__btn'
              alt='Buscador'
            />
          </button>
        </form>
      </div>
    </nav>
  )
}

export default SearchBar
