import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Registration from "../pages/Authentication/Registration";
import Login from "../pages/Authentication/Login";
import AllJobs from "../pages/AllJobs/AllJobs";
import AddJob from "../pages/AddJob/AddJob";
import MyJobs from "../pages/MyJobs/MyJobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import UpdateJob from "../pages/UpdateJob/UpdateJob";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Profile from "../pages/Profile/Profile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Blogs from "../pages/Blogs/Blogs";
import TokenDetails from "../pages/TokenDetails/TokenDetails";
import FrameworksBlog from "../pages/FrameworksBlog/FrameworksBlog";
import PrivateRoute from "../provider/PrivateRoute";
import CodeExplanationBlog from "../pages/CodeExplanationBlog/CodeExplanationBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/all-jobs",
        element: <AllJobs />,
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/applied-jobs",
        element: (
          <PrivateRoute>
            <AppliedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-job/:id",
        element: (
          <PrivateRoute>
            <UpdateJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/token-blog",
        element: <TokenDetails />,
      },
      {
        path: "/frameworks-blog",
        element: <FrameworksBlog />,
      },
      {
        path: "/code-explain",
        element:<CodeExplanationBlog/>
      },
    ],
  },
]);


export default router;