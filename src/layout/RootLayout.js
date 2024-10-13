import { Outlet, ScrollRestoration } from "react-router-dom";
import BtnScrollToTop from "./BtnScrollToTop";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Nav from "./Nav";
import LightBoxModal from "./LightBoxModal";
import Toasts from "./Toasts";
import AuthModal from "../components/auth/AuthModal";
import { Suspense } from "react";
import Loader from "./Loader";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
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
        <Suspense
          fallback={
            <div className="loader-container row justify-content-center my-5">
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
