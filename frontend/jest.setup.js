import 'whatwg-fetch'

require('dotenv').config({
  path: '.env',
})

jest.mock('./src/helpers/getEnvVariables', () => ({
  getEnvVariables: () => ({ ...process.env }),
}))
