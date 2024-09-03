import ChatRoomRepository from "../database/repository/chat-room/ChatRoomRepository";

class ChatRoomService {
    constructor(private readonly chatRoomRepository: ChatRoomRepository) { }

}

export default ChatRoomService;