import Header from "./Header"
import Profile from "./Profile"
import TableOfContent from "./TableOfContent"


const Todos = () => {
  return (
    <div className=" space-y-5 border-2 p-6 border-red-700">
        <Header/>
        <Profile/>
        <TableOfContent/>
    </div>
  )
}

export default Todos