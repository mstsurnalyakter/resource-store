import { Outlet, useLocation, useNavigation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { CirclesWithBar } from "react-loader-spinner";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header />
      {navigation.state === "loading" ? (
        <div className="min-h-screen flex items-center justify-center">
          <CirclesWithBar
            height="500"
            width="500"
            color="purple"
            outerCircleColor="purple"
            innerCircleColor="purple"
            barColor="purple"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <Outlet> </Outlet>
      )}

      <Footer />
    </div>
  );
};

export default Home;
