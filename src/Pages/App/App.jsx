import { BrowserRouter, useRoutes } from 'react-router-dom'

/* Pages */BlobEvent

import Home from "../Home/Home.jsx";
import MyOrder from "../MyOrder/MyOrder.jsx";
import MyOrders from "../MyOrders/MyOrders.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import SignIn from "../SignIn/SignIn.jsx";
import MyAccount from '../MyAccount/MyAccount.jsx';

/* Components */

import Navbar from '../../Components/Navbar/index.jsx';
import Layout from "../../Components/Layout";
import { ShoppingCart } from '../../Components/ShoppingCart/index.jsx';
import { ShoppingCartProvider } from "../../Context/index.jsx"
import './App.css'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home />},
    { path: "/my-account", element: <MyAccount />},
    { path: "/my-order", element: <MyOrder/>},
    { path: "/my-orders", element: <MyOrders />},
    { path: "/sign-in", element: <SignIn/>},
    { path: "/*", element: <NotFound/>}
  ]);

  return routes;
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
          <ShoppingCart />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
