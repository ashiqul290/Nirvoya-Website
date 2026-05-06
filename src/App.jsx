import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Home } from './page/Home';
import Rootlayout from './Layout/Rootlayout';
import { ProdactFilterInCategory } from './page/ProdactFilterInCategory';

export const App = () => {
  let router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      { path: "product-filters", Component: ProdactFilterInCategory },
     
    ],
  },
]);

  
  return (
    <>
    
    <RouterProvider router={router} />
    
    </>
  )
}
