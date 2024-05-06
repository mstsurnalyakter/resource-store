import Footer from 'components/Footer'
import Header from 'components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}

export default Root