import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const anonymousLogin = async (name) => {
        try {
            const userRes = await axiosInstance.post('/api/users/auth', { name })
            await axiosInstance.post('/api/chats/start', { user: userRes.data._id })
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

export const useAuth = () => useContext(AuthContext)