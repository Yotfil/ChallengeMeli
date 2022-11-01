// const axios = require('axios')
// import axios from 'axios'
// import dotenv from 'dotenv'
// import { newItemToSend } from '../utilities/setItemResponse.js'
// import { newListItems } from '../utilities/setNewResponse.js'

const dotenv = require('dotenv')
const axios = require('axios')
const newItemToSend = require('../utilities/setItemResponse')
const newListItems = require('../utilities/setNewResponse')
const { response } = require('express')

dotenv.config()

async function getItems(req, res = response) {
  const query = req.query.search

  const params = {
    params: { q: query },
  }

  try {
    const { data } = await axios.get(
      `${process.env.API_URL}/sites/MLA/search`,
      params
    )

    const { results } = data

    const newData = await newListItems(results)

    res.status(201).json({
      ok: true,
      response: newData,
    })
    return
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Something went wrong',
    })
  }
}

async function getItem(req, res = response) {
  const id = req.params.id

  try {
    const { data } = await axios.get(`${process.env.API_URL}/items/${id}`)

    const newItem = await newItemToSend(data)

    console.log(newItem.item.category, 'new Item')

    res.status(201).json({
      ok: true,
      response: newItem,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Something went wrong',
    })
  }
}

module.exports = {
  getItem,
  getItems,
}
