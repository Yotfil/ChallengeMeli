import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

export async function getItemDescription(id) {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/items/${id}/description`
    )

    return response.data.plain_text
  } catch (error) {
    console.log(error)
  }
}
