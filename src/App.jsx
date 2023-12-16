import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Landing,
  Login,
  Orders,
  Products,
  SingleProduct,
  Register,
} from "./pages";

import {loader as landingLoader} from './pages/Landing'
import {loader as SingleProductLoader} from './pages/SingleProduct'
import {loader as ProductsLoader} from './pages/Products'
import {loader as checkoutLoader} from './pages/Checkout'
import {loader as orderLoader} from './pages/Orders'

import {action as registerAction} from './pages/Register'
import {action as loginAction} from './pages/Login'
import {action as checkoutAction} from './components/Checkoutform'
import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error />,
    children:[
      {
        index:true,
        element:<Landing/>,
        loader: landingLoader,
      },
      {
        path:'products',
        element:<Products/>,
        loader: ProductsLoader,
      },
      {
        path:'products/:id',
        element:<SingleProduct/>,
        loader: SingleProductLoader,
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'checkout',
        element:<Checkout/>,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'orders',
        element:<Orders/>,
        loader: orderLoader(store),
      },
    ]
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register/>,
    errorElement: <Error />,
    action: registerAction,
  },
]);

function App() {
  return <RouterProvider router ={router} />;
}

export default App;
