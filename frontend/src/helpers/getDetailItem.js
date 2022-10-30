import { getItemRequest } from '../api/items'

export const getDetailItem = async id => {
  const currentItem = await (await getItemRequest(id)).json()
  return currentItem
}
