import { AuthGuard } from "@components/guards/AuthGuard";
import { ChatRoom } from "@pages/ChatRoom";
import { Home } from "@pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/chat/:chatSessionId',
        element:
            <AuthGuard>
                <ChatRoom />
            </AuthGuard>
    },
]);