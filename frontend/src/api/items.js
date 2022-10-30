import { getEnvVariables } from '../helpers/getEnvVariables'

const { VITE_API_URL } = getEnvVariables()

export const getItems = async item =>
  await fetch(`${VITE_API_URL}/items?search=${item}`)

export const getItemRequest = async id =>
  await fetch(`${VITE_API_URL}/items/${id}`)
