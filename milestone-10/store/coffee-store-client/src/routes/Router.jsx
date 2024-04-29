import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import SignUp from "../pages/SignUp/SignUp";
import SgnIn from "../pages/SgnIn/SgnIn";
import Users from "../pages/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://coffee-store-server-lilac-one.vercel.app/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-lilac-one.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SgnIn />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

export default router;
