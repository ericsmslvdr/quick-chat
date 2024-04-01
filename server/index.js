import express from 'express';
import { connect } from 'mongoose';
import 'dotenv/config'
import userRoutes from './features/user/user-routes.js'

const app = express()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

connect(MONGODB_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Connected to MongoDB. Server is running on port ${PORT}`)
    })
}).catch((error) => {
    console.error(error)
})

app.use(express.json())
app.use('/users', userRoutes)
