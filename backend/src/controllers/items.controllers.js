// const axios = require('axios')
import axios from 'axios'
import { API_URL } from '../static/api_url.js'
import { newItemToSend } from '../utilities/setItemResponse.js'
import { newListItems } from '../utilities/setNewResponse.js'

export async function getItems(req, res) {
  const query = JSON.stringify(req.query.search)

  const params = {
    params: { q: query },
  }

  try {
    const { data } = await axios.get(`${API_URL}/sites/MLA/search`, params)
    const { results } = data

    const newData = await newListItems(results)

    res.status(201).json({
      ok: true,
      response: newData,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Something went wrong',
    })
  }
}

export async function getItem(req, res) {
  const id = req.params.id

  try {
    const { data } = await axios.get(`${API_URL}/items/${id}`)

    const newItem = await newItemToSend(data)

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
