import cors from 'cors'
import express from 'express'

// //Routes
import router from './routes/items.routes.js'

const app = express()
app.use(cors())

app.use('/api', router)

export default app
