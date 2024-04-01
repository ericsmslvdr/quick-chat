import express from 'express'
import { createUser, deleteUser } from './user-controllers.js'

const router = express.Router()

router.post('/auth', createUser)
router.delete('/:id', deleteUser)

export default router