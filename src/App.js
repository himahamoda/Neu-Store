import React, { Children } from 'react'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Layout from './Layout/layout'
import NAv from './nav/nav'
import Homepage from './HomePage/homepage';
import ProductDetails from './ProductDetails/productsdetails';
import Products from './products/products';
import VideoHome from './video/Video';
import ListComponent from './video/Video';
import { Suspense } from 'react';
import LoadingIndicator from './LoadingIndicator';

// import ProductDetails from './ProductDetails.jsx/ProductDetails';
// import Products from './products/products';

export default function App() {


  let routers = createBrowserRouter([
    {
      path:'/',element:<Layout />, children: [
        {path : '/' , element:<Homepage/>},
        {path : 'NAv' , element:<NAv/>},
        {path : "ProductDetails/:id" , element:<ProductDetails/>},
        {path : '/Products' , element:<Products/>},
        {path : 'video' , element:<VideoHome  />},
        {path : 'ListComponent' , element:<ListComponent  />},
        
      ]
    }
  ])
  return (
    <Suspense fallback={<LoadingIndicator />}>
    <RouterProvider router={routers}></RouterProvider>
    </Suspense>

  )
}
