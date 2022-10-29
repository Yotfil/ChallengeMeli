import axios from 'axios'
import { API_URL } from '../static/api_url.js'

export async function getItemDescription(id) {
  try {
    const response = await axios.get(`${API_URL}/items/${id}/description`)

    return response.data.plain_text
  } catch (error) {
    console.log(error)
  }
}
