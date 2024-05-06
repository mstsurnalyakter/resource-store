import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";
import BlogDetails from "pages/BlogDetails";
import ContactUs from "pages/ContactUs";
import BloggerDetails from "pages/BloggerDetails";
import Root from "layout/Root";
import Login from "pages/Login/Login";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "blogdetails", element: <BlogDetails /> },
        { path: "/contactus", element: <ContactUs /> },
        { path: "/bloggerdetails", element: <BloggerDetails /> },
        { path: "/login", element: <Login /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;



// const ProjectRoutes = () => {
//   let element = useRoutes([
//     { path: "dhiwise-dashboard", element: <Home /> },
//     { path: "*", element: <NotFound /> },
//     {
//       path: "/",
//       element: <LandingPage />,
//     },
//     {
//       path: "blogdetails",
//       element: <BlogDetails />,
//     },
//     {
//       path: "contactus",
//       element: <ContactUs />,
//     },
//     {
//       path: "contactus",
//       element: <BloggerDetails />,
//     },
//   ]);

//   return element;
// };

// export default ProjectRoutes;
