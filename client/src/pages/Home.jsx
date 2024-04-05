import React, { useState } from 'react'
import axiosInstance from '../configs/axios'
import { AnonymousForm } from '@components/forms/AnonymousForm'
import { LoginForm } from '@components/forms/LoginForm'

export const Home = () => {
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
            const user = await axiosInstance.post('/api/users/auth', { name: formData.name })
            const chat = await axiosInstance.post('/api/chats/start', { user: user.data._id })
            console.log("USER: ", user)
            console.log("CHAT: ", chat);
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