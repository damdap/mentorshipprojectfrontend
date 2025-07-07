import React, { useState } from 'react'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      console.log('Email:', email)
      console.log('Password:', password)
    } catch (error) {
      console.error('Error during login:', error)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Mentorship Page Login</h1>
      <form onSubmit={submit} className='bg-white p-8 rounded shadow-md w-96'>
        <div className='mb-4'>
          <label className='block text-sm font-medium mb-2' htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter your email'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-sm font-medium mb-2' htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter your password'
          />
        </div>
        <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
