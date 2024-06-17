import About from "./components/about/About";
import SingleProductPage from "./components/products/SingleProductPage";
import Contact from "./components/contact/Contact";
import CartPage from "./components/Cart/CartPage";
import Toasts from "./layout/Toasts";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home";
import AuthModal from "./components/auth/AuthModal";
import RootLayout from "./layout/RootLayout";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { myLoader } from "./components/profile/EditProfile";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/404page/NotFoundPage";
import GlobalContext from "./state-mangment/GlobalContext";
import EditProfile from "./components/profile/EditProfile";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
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
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      <GlobalContext>
        <Toasts />
        <AuthModal />
        <RouterProvider router={router} />
      </GlobalContext>
    </>
  );
}

export default App;
