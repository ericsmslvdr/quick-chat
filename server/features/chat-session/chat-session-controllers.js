import { ChatSession } from "./chat-session-models.js"

export const getChatSession = async (req, res) => {
    try {
        let id = { _id: "66091243d17db7b518003608" }
        const chatSessions = await ChatSession.find(id);
        res.status(200).json(chatSessions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const startChatSession = async (req, res) => {
    try {
        const { user } = req.body
        const chatSession = await ChatSession.findOneAndUpdate(
            { participants: { $size: 1 } },
            { $addToSet: { participants: user } },
            { upsert: true, new: true }
        )
        res.status(200).send(chatSession)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const sendMessage = async (req, res) => {
    try {
        const { message, currentUser } = req.body;
        const { id } = req.params
        // const currentUser = req.user;
        const updatedChatSession = await ChatSession.findByIdAndUpdate(
            id,
            { $push: { chats: { sender: currentUser, message } } },
            { new: true }
        );
        res.status(200).json(updatedChatSession);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};