import React from 'react'


const Profile = () => {
  return (
    <section>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    </section>
  );
};

const Gallery = () => {
  return (
    <div>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}






export default Gallery