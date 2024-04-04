import React from 'react'

export const AnonymousForm = ({ onSubmit, onChange, formData }) => {
    return (
        <form className="max-w-sm mx-auto bg-green-100 p-4" onSubmit={onSubmit}>
            <h1>Anonymous</h1>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                <input type="text" name='userNameAnon' value={formData.name} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your name here..." required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
    )
}