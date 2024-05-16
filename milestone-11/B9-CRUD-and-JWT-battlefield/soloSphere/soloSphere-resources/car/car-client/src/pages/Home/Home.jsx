import About from "../../components/About"
import Banner from "./Banner"
import Services from "./Services"


const Home = () => {
  return (
    <div className="space-y-5">
      <Banner/>
      <About/>
      <Services/>
    </div>
  )
}

export default Home