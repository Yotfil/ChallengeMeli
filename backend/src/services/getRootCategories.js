// import axios from 'axios'
// import dotenv from 'dotenv'

const dotenv = require('dotenv')
const axios = require('axios')

dotenv.config()

async function getRootCategories(id) {
  try {
    const response = await axios.get(`${process.env.API_URL}/categories/${id}`)
    return response.data.path_from_root
  } catch (error) {
    console.log(error)
  }
}

module.exports = getRootCategories
