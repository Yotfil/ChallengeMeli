import { getEnvVariables } from '../helpers/getEnvVariables'

const { VITE_API_URL } = getEnvVariables()

export const getItemsRequest = async item => {
  const res = await fetch(`${VITE_API_URL}/items?search=${item}`)
  const data = await res.json()
  return data
}

export const getItemRequest = async id => {
  const res = await fetch(`${VITE_API_URL}/items/${id}`)
  const item = await res.json()
  return item
}
