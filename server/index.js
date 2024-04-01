import express from 'express';
import 'dotenv/config'
import userRoutes from './features/user/user-routes.js'
import mongodbConnection from './db/connection.js'

const app = express()
const PORT = process.env.PORT

app.listen(PORT, () => {
    mongodbConnection()
    console.log(`Server is running on port ${PORT}`)
})

app.use(express.json())
app.use('/users', userRoutes)
