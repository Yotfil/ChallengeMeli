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

  useEffect(() => {
    if (itemToSearch.length < 2) return
    ;(async () => {
      const { response } = await (await getItems(itemToSearch)).json()
      setItems(response.items)
      setCategories(response.categories)
    })()
  }, [itemToSearch])

  return (
    <itemsContext.Provider value={{ items, categories, setItemToSearch, setCategories }}>
      {children}
    </itemsContext.Provider>
  )
}
