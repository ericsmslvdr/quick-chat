import { createBrowserRouter } from "react-router-dom";
import HomeRoute from "./home/home";
import ConversationRoute from "./conversation/conversation";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeRoute />
    },
    {
        path: '/conversation',
        element: <ConversationRoute />
    }
]);

export default router;