import React from 'react'
import { useLoaderData } from 'react-router'
import User from './User';

const Users = () => {
    const users = useLoaderData();
  return (
    <div>

        <h2>Our Users: {users.length}</h2>
        <p>Fantastic Users</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            {
                users.map(user=><User key={user.id} user={user} />)
            }
        </div>
    </div>
  )
}

export default Users