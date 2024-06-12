import CardsContainer from "./components/home/CardsContainer";
import Slider from "./components/home/Slider";
import About from "./components/about/About";
import SingleProductPage from "./components/SingleProductPage";
import Contact from "./components/contact/Contact";
import CartPage from "./components/Cart/CartPage";
import Toasts from "./layout/Toasts";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home";
import AuthModal from "./components/auth/AuthModal";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/404page/NotFoundPage";
import GlobalContext from "./state-mangment/GlobalContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [
      {
        index: true,
        element: (
          <>
            <Slider />
            <CardsContainer />
          </>
        ),
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
    ],
  },
]);

function App() {
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
