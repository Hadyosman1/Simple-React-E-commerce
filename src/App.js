import { lazy, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { myLoader } from "./components/profile/EditProfile";
import GlobalContext from "./state-mangment/GlobalContext";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import RootLayout from "./layout/RootLayout";
import Home from "./components/home/Home";
import NotFoundPage from "./components/404page/NotFoundPage";
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Profile = lazy(() => import("./components/profile/Profile"));
const EditProfile = lazy(() => import("./components/profile/EditProfile"));
const CartPage = lazy(() => import("./components/Cart/CartPage"));
const SingleProductPage = lazy(() =>
  import("./components/products/SingleProductPage")
);
const ForgetPassword = lazy(() =>
  import("./components/ForgetPassword/ForgetPassword")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "SingleProductPage/:productId",
        element: <SingleProductPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/edit",
        element: <EditProfile />,
        loader: myLoader,
      },
      {
        path: "forget_password",
        element: <ForgetPassword />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });

    return () => {
      AOS.destroy();
    };
  }, []);

  return (
    <GlobalContext>
      <RouterProvider router={router} />
    </GlobalContext>
  );
}

export default App;
