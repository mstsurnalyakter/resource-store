import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Root