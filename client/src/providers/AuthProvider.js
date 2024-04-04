import { createContext } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const anonymousLogin = async (name) => {
        try {
            const res = await axiosInstance.post('/users/auth', { name })
            setUser(res.data)
            return res.data
        } catch (error) {
            console.error("Error occurred during login:", error);
            throw error;
        }
    }

    const logout = () => {
        setUser(null)
    }

    const contextValue = {
        user,
        anonymousLogin,
        logout
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}