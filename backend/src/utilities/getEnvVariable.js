const dotenv = require('dotenv')

export const getEnvVariables = () => {
  dotenv.config()
  return process.env.API_URL
}
