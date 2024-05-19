import React from 'react'
import { useLoaderData } from 'react-router'
import User from './User';

const Users = () => {
    const users = useLoaderData();
  return (
    <div>
        <h2 className='mb-6 text-center font-bold text-2xl text-purple-600'>Users: {users.length}</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {
                users.map(user=><User user={user} key={user.id} />)
            }
        </div>
    </div>
  )
}

export default Users