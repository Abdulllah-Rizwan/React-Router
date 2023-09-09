import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userId} = useParams()
    return (
    <div className='bg-gray-600 text-white text-3xl text-center p-3'>
      <h1>user:{userId}</h1>
    </div>
  )
}

export default User
