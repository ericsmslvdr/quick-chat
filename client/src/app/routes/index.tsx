import { createBrowserRouter } from "react-router-dom";
import Chat from "./chat/Chat";
import Home from "./home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/chat',
        element: <Chat />
    }
])

export default router;