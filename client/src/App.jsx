import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChatRoom } from "./components/chat-room/ChatRoom"
import { Home } from "./components/home/Home"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
