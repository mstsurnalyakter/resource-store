import { Outlet } from 'react-router'
import Header from '../components/Header/Header'

const Main = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

Main.propTypes = {}

export default Main