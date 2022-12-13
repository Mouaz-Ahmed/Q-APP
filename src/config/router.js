import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../views/Home";
import LogIn from "../views/LogIn";
import App from '../App'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LogIn />
    },{
        path: "/home",
        element: <Home />
    }
  ]);
export default function Router(){
    return (
        <RouterProvider router={router} />
    );
}