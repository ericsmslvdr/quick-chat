import { AuthProvider } from "@contexts/AuthContext"
import { router } from "@routes/routes"
import { RouterProvider } from "react-router-dom"

export const App = () => {

    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    )
}