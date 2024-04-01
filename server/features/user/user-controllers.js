import { User } from "./user-models.js"

export const createUser = async (req, res) => {
    try {
        const user = User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}