import { User } from "./user-models.js"

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.send(user)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).send({ message: "User not found" })
        }
        res.status(200).send({ message: 'User deleted successfully' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}