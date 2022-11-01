// import { getRootCategories } from '../services/getRootCategories.js'
// import { SIGNATURE } from '../static/signature.js'
// import { createNewItem } from './newItem.js'

const getRootCategories = require('../services/getRootCategories')
const SIGNATURE = require('../static/signature')
const createNewItem = require('./newItem')

const getCategorieRepeated = (data = []) => {
  const repeatedCategory = Object.keys(getCategoriesList(data)).reduce(
    (acc, cur) => (cur > acc ? cur : acc)
  )

  return repeatedCategory
}

const getCategoriesList = data => {
  const categories = {}

  data.forEach(item => {
    if (!categories[item.category_id]) {
      categories[item.category_id] = 1
    } else {
      categories[item.category_id] += 1
    }
  })

  return categories
}

const setNewItems = data => {
  const listItems = data.map(item => {
    return createNewItem(item)
  })
  return listItems
}

const newListItems = async data => {
  const mostRepeatedCategory = getCategorieRepeated(data)
  const itemsSet = setNewItems(data)

  const newData = {
    author: SIGNATURE,
    categories: await getRootCategories(mostRepeatedCategory),
    items: itemsSet,
  }

  return newData
}

module.exports = newListItems
