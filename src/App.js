import Nav from "./components/Nav";
import CardsContainer from "./components/home/CardsContainer";
import Slider from "./components/home/Slider";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import SingleProductPage from "./components/SingleProductPage";
import Footer from "./components/Footer";
import Contact from "./components/contact/Contact";
import Cursor from "./layout/Cursor";
import BtnScrollToTop from "./layout/BtnScrollToTop";
import CartContext from "./state-mangment/CartContext";
import CartPage from "./components/Cart/CartPage";
import Toasts from "./layout/Toasts";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import ToastContext from "./state-mangment/ToastContext";
import ProductsContext from "./state-mangment/ProductsContext";
import LoaderContext from "./state-mangment/LoaderContext";

function App() {
  return (
    <>
      <BtnScrollToTop />

      {/* cursor shape */}
      <Cursor />

      <LoaderContext>
        <ProductsContext>
          <CartContext>
            <ToastContext>
              {/* Toasts  */}
              <Toasts />

              <Nav />
              <div
                style={{ minHeight: "50svh", marginTop: "55px" }}
                className=""
              >
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Slider />
                        <CardsContainer />
                      </>
                    }
                  />
                  <Route
                    path="About"
                    element={
                      <>
                        <About />
                      </>
                    }
                  />
                  <Route
                    path="/SingleProductPage/:productId"
                    element={
                      <>
                        <SingleProductPage />
                      </>
                    }
                  />

                  <Route
                    path="/contact"
                    element={
                      <>
                        <Contact />
                      </>
                    }
                  />

                  <Route
                    path="/cart"
                    element={
                      <>
                        <CartPage />
                      </>
                    }
                  />
                </Routes>
              </div>
            </ToastContext>
          </CartContext>
        </ProductsContext>
      </LoaderContext>
      <Footer />
    </>
  );
}

export default App;
