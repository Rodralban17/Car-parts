import React from "react";
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";

const App = () =>{
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <HomePage/>,
        },
        // {
        //   path: "/catalog",
        //   element: <WeaponCatalog/>,
        // },
        // {
        //   path: "/about",
        //   element: <AboutUs/>,
        // },
        // {
        //   path: "/login",
        //   element: <LoginPage/>,
        // },
        // {
        //   path: "/register",
        //   element: <RegisterPage/>,
        // },
        // {
        //   path: "/dashboard",
        //   element: <Dashboard/>,
          
        // }
      ]
    }
    // {
    //   path: "/",
    //   element: <RequireAuth/>,
    //   loader: authGuardLoader,
    //   children: [
    //     {
    //       path: "/dashboard",
    //       element: <Dashboard/>,
    //       loader: dashboardLoader
    //     },
    //   ]
    // }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
