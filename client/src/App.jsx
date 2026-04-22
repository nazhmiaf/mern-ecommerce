import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import OrderPage from "./pages/OrderPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AboutPage from "./pages/AboutPage";
import DetailProduct from "./pages/DetailProduct";
import { loader as HomeLoader } from "./components/HomeContent";
import { loader as ProductLoader } from "./pages/ProductPage";
import {action as LoginAction } from "./pages/auth/LoginPage"
import {store} from './store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: HomeLoader
      },
      {
        path: "product",
        element: <ProductPage />,
        loader: ProductLoader
      },
      {
        path: "order",
        element: <OrderPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "product/:id",
        element: <DetailProduct />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    action : LoginAction(store)
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
