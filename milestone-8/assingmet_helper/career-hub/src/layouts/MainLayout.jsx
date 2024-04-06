import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div>
      <div className="h-24">
        <NavBar />
      </div>
      <div className="min-h-[calc(100vh-450px)] md:min-h-[calc(100vh-370px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout