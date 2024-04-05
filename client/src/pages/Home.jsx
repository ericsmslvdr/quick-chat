import React, { useState } from 'react'
import { AnonymousForm } from '@components/forms/AnonymousForm'
import { LoginForm } from '@components/forms/LoginForm'
import { useAuth } from '@hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const { anonymousLogin } = useAuth()
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
            await anonymousLogin(formData.userNameAnon || formData.userName)
            navigate('/chat')
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