import express from 'express'
import { getChatList, sendMessage, startChatSession } from './chat-session-controllers.js'

const router = express.Router()

router.get('/:chatSessionId', getChatList)
router.post('/start', startChatSession)
router.post('/:id', sendMessage)

export default router