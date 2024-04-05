import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import mongodbConnection from './db/connection.js'
import userRoutes from './features/user/user-routes.js'
import chatSessionRoutes from './features/chat-session/chat-session-routes.js'

const app = express()
app.use(cors({
    origin: 'http://localhost:5173'
}))
const PORT = process.env.PORT

app.listen(PORT, () => {
    mongodbConnection()
    console.log(`Server is running on port ${PORT}`)
})

app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/chats', chatSessionRoutes)
