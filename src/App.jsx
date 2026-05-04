import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Home } from './page/Home';
import Rootlayout from './Layout/Rootlayout';

export const App = () => {
  let router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      // { path: "about", Component: About },
     
    ],
  },
]);

  
  return (
    <>
    
    <RouterProvider router={router} />
    
    </>
  )
}
