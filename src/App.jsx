import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Home } from './page/Home';
import Rootlayout from './Layout/Rootlayout';
import { ProdactFilterInCategory } from './page/ProdactFilterInCategory';
import { ProductDtails } from './page/ProductDtails';

export const App = () => {
  let router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      { path: "product-filters", Component: ProdactFilterInCategory },
      { path: "view-product", Component: ProductDtails },
     
    ],
  },
]);

  
  return (
    <>
    
    <RouterProvider router={router} />
    
    </>
  )
}
