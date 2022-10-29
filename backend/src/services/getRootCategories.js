import axios from 'axios'
import { API_URL } from '../static/api_url.js'

export async function getRootCategories(id) {
  try {
    const response = await axios.get(`${API_URL}/categories/${id}`)
    return response.data.path_from_root
  } catch (error) {
    console.log(error)
  }
}
