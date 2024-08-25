import { RouterProvider } from "react-router-dom";
import AppProvider from "./AppProvider";
import router from "./routes";

const AppRouter = () => {
    return <RouterProvider router={router} />
}

const App = () => {
    return (
        <AppProvider>
            <AppRouter />
        </AppProvider>
    )
}

export default App;