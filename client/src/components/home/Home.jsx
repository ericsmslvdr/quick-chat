import React, { useState } from 'react'
import axiosInstance from '../../config/axios'

export const Home = () => {
    const [user, setUser] = useState('')
    const [name, setName] = useState('')

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await axiosInstance.post('/users/auth', { name: name || 'Stranger' })
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='container mx-auto'>
            <form onSubmit={handleSubmit} className='w-1/2 m-auto border border-solid'>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Enter your name: </label>
                    <input type="text" name='name' value={name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='"Stranger" is default if empty' />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Start</button>
            </form>
        </div>
    )
}
