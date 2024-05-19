import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const Home = () => {
  return (
    <div className="container mx-auto p-7 lg:px-10 xl:px-24">
      <Header />
      <div className="h-4/5 flex flex-col items-center justify-center text-2xl space-y-4">
        <h2 className="text-center">This is the home page component</h2>
        <Outlet />
      </div>
    </div>
  );
}

export default Home