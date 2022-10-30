import { API_URL } from '../consts/apiUrl'

export const getItems = async item =>
  await fetch(`${API_URL}/items?search=${item}`)

export const getItemRequest = async id => await fetch(`${API_URL}/items/${id}`)
