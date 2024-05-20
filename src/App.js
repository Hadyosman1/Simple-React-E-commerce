import Nav from "./components/Nav";
import CardsContainer from "./components/home/CardsContainer";
import Slider from "./components/home/Slider";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import SingleProductPage from "./components/SingleProductPage";
import Footer from "./components/Footer";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Nav />
      <div className="mt-5 py-3">
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
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
