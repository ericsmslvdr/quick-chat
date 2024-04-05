import { AuthGuard } from "@components/AuthGuard";
import { ChatRoom } from "@pages/ChatRoom";
import { Home } from "@pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/chat',
        element:
            <AuthGuard>
                <ChatRoom />
            </AuthGuard>
    },
]);