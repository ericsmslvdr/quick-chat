import { useAuth } from '@hooks/useAuth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthGuard = ({ children }) => {
    const { user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/')
            return
        }
    }, [])

    return children

}
