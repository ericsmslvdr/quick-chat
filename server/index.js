import express from 'express';
import 'dotenv/config'
import mongodbConnection from './db/connection.js'
import userRoutes from './features/user/user-routes.js'
import chatSessionRoutes from './features/chat-session/chat-session-routes.js'

const app = express()
const PORT = process.env.PORT

app.listen(PORT, () => {
    mongodbConnection()
    console.log(`Server is running on port ${PORT}`)
})

app.use(express.json())
app.use('/users', userRoutes)
app.use('/chats', chatSessionRoutes)
