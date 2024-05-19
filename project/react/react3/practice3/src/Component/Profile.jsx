import React from 'react'

const Profile = () => {
    const user = {
      name: "Hedy Lamarr",
      imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
      imageSize: 90,
    };
    let isLoggedIn = true;
    let isAdmin = true;
  return (
    <div>
        <h3>{user.name}</h3>
        <img src={user.imageUrl} width={user.imageSize} alt={`Photo of ${user.name}`} />

        {isLoggedIn ?(
            <p>AdminPanel</p>
        ):(
            <p>LoginForm</p>
        )}

        {isAdmin && <p>Show All users</p>}


    </div>
  )
}

export default Profile