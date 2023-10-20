import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import Brand from "../components/Brands/Brand";
import ProductDetail from "../components/Products/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/product/:brand",
        element: (
          <PrivateRoute>
            <Brand></Brand>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path:"/productdetail/:productId",
        element: <ProductDetail></ProductDetail>
      }
    ],
  },
]);

export default router;
