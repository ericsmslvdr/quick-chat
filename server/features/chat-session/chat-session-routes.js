import express from 'express'
import { getChatSession, sendMessage, startChatSession } from './chat-session-controllers.js'

const router = express.Router()

router.get('/', getChatSession)
router.post('/start', startChatSession)
router.post('/:id', sendMessage)

export default router