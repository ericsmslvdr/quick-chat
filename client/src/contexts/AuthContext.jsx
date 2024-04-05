import { axiosInstance } from "@configs/axios";
import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('asdasd')

    const anonymousLogin = async (name) => {
        try {
            const userRes = await axiosInstance.post('/api/users/auth', { name })
            setUser(userRes.data)
            return userRes.data
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