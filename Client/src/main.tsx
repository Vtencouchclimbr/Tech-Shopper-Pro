import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './utils/index.css';

import Login from './pages/Home.tsx'
import App from './App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Shop from './pages/Shop.tsx';
import Register from './pages/Register.tsx'
import Details from './pages/Details.tsx'
import Checkout from './pages/Checkout.tsx'
import Cart from './pages/Cart.tsx'

import { CartProvider } from './components/CartState.tsx';
import { WishlistProvider } from './components/wishlistState.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <CartProvider> 
      <WishlistProvider>  {/* Wraps App with WishlistProvider */}
        <App />
      </WishlistProvider>
      </CartProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />
      }, 
      {
        path: '/Register',
        element: <Register />
      }, 
      {
        path: '/Shop',
        element: <Shop />
      }, 
      {
        path: '/Details',
        element: <Details />
      }, 
      {
        path: '/Cart',
        element: <Cart />
      }, 
      {
        path: '/Checkout',
        element: <Checkout />
      }, 
    ]
  }
])

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
