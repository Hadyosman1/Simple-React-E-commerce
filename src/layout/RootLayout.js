import { Outlet } from "react-router-dom";
import BtnScrollToTop from "./BtnScrollToTop";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Nav from "./Nav";
import LightBoxModal from "./LightBoxModal";
import Toasts from "./Toasts";
import AuthModal from "../components/auth/AuthModal";

const RootLayout = () => {
  return (
    <>
      <Toasts />
      <AuthModal />
      <BtnScrollToTop />
      <Cursor />
      <LightBoxModal />
      <Nav />
      <div
        style={{
          minHeight: "50svh",
          marginTop: "52px",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
