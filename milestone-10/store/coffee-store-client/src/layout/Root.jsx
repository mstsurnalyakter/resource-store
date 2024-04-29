import { Outlet } from "react-router"
import NavBar from "../components/NavBar/NavBar"


const Root = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default Root