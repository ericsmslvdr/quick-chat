import { AuthProvider } from "@contexts/AuthContext"
import { ChatProvider } from "@contexts/ChatContext"
import { router } from "@routes/routes"
import { RouterProvider } from "react-router-dom"

export const App = () => {

    return (
        <AuthProvider>
            <ChatProvider>
                <RouterProvider router={router} />
            </ChatProvider>
        </AuthProvider>
    )
}