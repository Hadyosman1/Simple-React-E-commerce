import { Outlet } from "react-router-dom";
import Footer from "../../layout/Footer";
import Nav from "../../layout/Nav";
import Cursor from "../../layout/Cursor";
import BtnScrollToTop from "../../layout/BtnScrollToTop";


function Home() {
  return (
    <>
      
      <BtnScrollToTop />
      <Cursor />
      <Nav />
      <div style={{ minHeight: "50svh", marginTop: "52px" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Home;
