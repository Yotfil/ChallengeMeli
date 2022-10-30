import { createContext, useContext, useEffect, useState } from 'react'
import { getItems } from '../api/items'
const itemsContext = createContext()

export const useItems = () => {
  const context = useContext(itemsContext)
  return context
}

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])

  const [itemToSearch, setItemToSearch] = useState('')

  const [dataOk, setDataOk] = useState(true)

  useEffect(() => {
    if (itemToSearch.length < 2) return
    setItems([])
    ;(async () => {
      const data = await (await getItems(itemToSearch)).json()
      if (data.ok) {
        setItems(data.response.items)
        setCategories(data.response.categories)
        setDataOk(data.ok)
        return
      }
      setDataOk(data.ok)
      setItems([])
      setCategories([])
    })()
  }, [itemToSearch])

  return (
    <itemsContext.Provider
      value={{
        items,
        categories,
        setItemToSearch,
        setCategories,
        dataOk,
        itemToSearch,
      }}>
      {children}
    </itemsContext.Provider>
  )
}
