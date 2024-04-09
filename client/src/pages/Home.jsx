import React, { useState } from 'react'
import { AnonymousForm } from '@components/forms/AnonymousForm'
import { LoginForm } from '@components/forms/LoginForm'
import { useAuth } from '@hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useChat } from '@hooks/useChat'

export const Home = () => {
    const { anonymousLogin } = useAuth()
    const { startSession } = useChat()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        userName: '',
        userNameAnon: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userData = await anonymousLogin(formData.userNameAnon || formData.userName)
            const sessionData = await startSession(userData._id)
            const chatSessionId = sessionData.data._id
            navigate(`/chat/${chatSessionId}`)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='container m-auto h-dvh grid place-items-center'>
            <div className='w-96'>
                <LoginForm onSubmit={handleSubmit} onChange={handleChange} formData={formData} />
                <h1 className='text-center'>or</h1>
                <AnonymousForm onSubmit={handleSubmit} onChange={handleChange} formData={formData} />
                <div>No account yet? Signup here</div>
            </div>
        </div>
    )
}