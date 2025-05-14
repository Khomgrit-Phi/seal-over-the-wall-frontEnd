import { createBrowserRouter, RouterProvider } from 'react-router';
import ProtectedRoute from '../context/ProtectedRoute';
import CreateDesignLayout from '../layouts/CreateDesignLayout';
import Layout from '../layouts/Layout';
import LayoutAdmin from '../layouts/LayoutAdmin';
import Category from '../pages/admin/Category';
import Dashboard from '../pages/admin/Dashboard';
import Manage from '../pages/admin/Manage';
import Product from '../pages/admin/Product';
import Register from '../pages/auth/Register';
import Cart from '../pages/Cart';
import CheckOut from '../pages/checkout/Checkout';
import Create from '../pages/Create';
import ExpressYourself from '../pages/ExpressYourself';
import Home from '../pages/Home';
import HowtoWork from '../pages/HowtoWork';
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail';
import Shop from '../pages/Shop';
import Signup from '../pages/Signup';
import HomeUser from '../pages/user/HomeUser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'shop/:productId', element: <ProductDetail /> },
      { path: 'how-to-work', element: <HowtoWork /> },
      { path: 'express-yourself', element: <ExpressYourself /> },
      {
        path: 'cart',
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        )
      },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      {
        path: 'checkout',
        element: (
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>
        )
      },
      { path: 'signup', element: <Signup /> }
    ]
  },
  {
    path: '/admin',
    element: <LayoutAdmin />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'category', element: <Category /> },
      { path: 'product', element: <Product /> },
      { path: 'manage', element: <Manage /> }
    ]
  },
  {
    path: '/user',
    element: <LayoutAdmin />,
    children: [{ index: true, element: <HomeUser /> }]
  },
  {
    path: '/create',
    element: <CreateDesignLayout />,
    children: [{ index: true, element: <Create /> }]
  }
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
