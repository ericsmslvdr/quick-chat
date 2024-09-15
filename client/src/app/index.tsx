import { RouterProvider } from "react-router-dom";
import AppProvider from "./main-provider";
import router from "./routes";

function AppRouter() {
    return <RouterProvider router={router} />;
}

function App() {
    return (
        <AppProvider>
            <AppRouter />
        </AppProvider>
    );
}

export default App;