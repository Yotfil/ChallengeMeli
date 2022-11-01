// import { getItemDescription } from '../services/getItemDescription.js'
// import { getRootCategories } from '../services/getRootCategories.js'
// import { SIGNATURE } from '../static/signature.js'
// import { createNewItem } from './newItem.js'

const getItemDescription = require('../services/getItemDescription')
const getRootCategories = require('../services/getRootCategories')
const SIGNATURE = require('../static/signature')
const createNewItem = require('./newItem')

const setNewItem = async data => {
  const newItem = {
    ...createNewItem(data),
    sold_quantity: data.sold_quantity,
    description: await getItemDescription(data.id),
    category: await getRootCategories(data.category_id),
  }
  return newItem
}

const newItemToSend = async data => {
  const newItem = await setNewItem(data)

  const newData = {
    author: SIGNATURE,
    item: newItem,
  }

  return newData
}

module.exports = newItemToSend
