import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './utils/index.css';

import App from './App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Home from './pages/Home.tsx';
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import Details from './pages/Details.tsx'
import Checkout from './pages/Checkout.tsx'
import Cart from './pages/Cart.tsx'
import { CartProvider } from './components/CartState.tsx';
import { WishlistProvider } from './components/wishlistSate.tsx';
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
        element: <Home />
      }, 
      {
        path: '/Register',
        element: <Register />
      }, 
      {
        path: '/Login',
        element: <Login />
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
