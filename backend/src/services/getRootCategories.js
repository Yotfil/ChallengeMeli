import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

export async function getRootCategories(id) {
  try {
    const response = await axios.get(`${process.env.API_URL}/categories/${id}`)
    return response.data.path_from_root
  } catch (error) {
    console.log(error)
  }
}
