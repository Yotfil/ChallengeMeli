// import axios from 'axios'
// import dotenv from 'dotenv'
const dotenv = require('dotenv')
const axios = require('axios')

dotenv.config()

async function getItemDescription(id) {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/items/${id}/description`
    )

    return response.data.plain_text
  } catch (error) {
    console.log(error)
  }
}

module.exports = getItemDescription
