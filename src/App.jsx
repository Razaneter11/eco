
import {createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Signin from "./pages/Signin.jsx"
import Login from "./pages/Login.jsx"
import Cart from "./pages/Cart.jsx"
import Categore from "./pages/Categore.jsx"
import Products from "./pages/Products.jsx"
import Notfound from "./pages/Notfound.jsx"
import Hero from "./pages/Hero.jsx"
import Root from "./rotes/Root.jsx"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
  children: [
    {
      path: '*',
      element: <Notfound/>
    },
    {
      path: '/',
      element: <Home/>
    },
    {
      path: "/Signin",
      element: <Signin/>
    },
    
    {
      path: "/Login",
      element: <Login/>
    },
    {
      path: "/cart",
      element: <Cart/>
    },
    {
      path: "/Categore",
      element: <Categore/>
    },
    {
      path: "/Hero",
      element: <Hero/>
    },
    {
      path: '/products/category/:productId',
      element: <Products />
    }
  ]
},
]);
export default function App() {
  return (
      <RouterProvider router={router} />
  )
}


