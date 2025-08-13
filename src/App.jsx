import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Navbar/Navbar";
import Story from "./pages/Story";
import Signup from "./auth/Signup";
import Login from "./auth/Login";


const ROUTER = {
  HOME: "/",
  STORY: "/story",
  SIGNUP: "/signup",
  LOGIN: "/login",
};

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// Layout without Navbar (for Dashboard)
const DashboardLayout = () => <Outlet />;

const router = createBrowserRouter([
  {
    element: <AppLayout />, 
    children: [
      { path: ROUTER.HOME, element: <Home /> },
      { path: ROUTER.STORY, element: <Story /> },
      { path: ROUTER.SIGNUP, element: <Signup /> },
      { path: ROUTER.LOGIN, element: <Login /> },
    ],
  },
 
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;