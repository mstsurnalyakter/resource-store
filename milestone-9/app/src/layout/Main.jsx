import { Outlet } from "react-router"
import Nav from "../components/Nav"


const Main = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-20">
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Main