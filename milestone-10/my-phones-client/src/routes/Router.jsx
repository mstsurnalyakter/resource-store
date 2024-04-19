import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Phones from "../components/Phones";
import Phone from "../components/Phone";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader: () => fetch("http://localhost:5000/phones"),
      },
      {
        path: "/phone/:id",
        element: <Phone />,
        loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.id}`),
      },
    ],
  },
]);


export default router;