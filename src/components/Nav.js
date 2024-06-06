import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { cartProductsContext } from "../state-mangment/CartContext";
import CartList from "./Cart/CartList";
import { authContext } from "../state-mangment/AuthContext";
import { authModalContext } from "../state-mangment/AuthModalContentContext";

const Nav = () => {
  const { cartProducts } = useContext(cartProductsContext);
  const {
    auth: { isLoggedIn },
  } = useContext(authContext);

  const { setLoginOrRegister } = useContext(authModalContext);

  return (
    <header
      style={{ backgroundColor: "#01497c" }}
      className="border-bottom border-1 fixed-top "
    >
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid ">
          <div className="d-flex align-items-center ">
            <NavLink
              className="navbar-brand fw-bold text-light d-flex align-items-center "
              to="/"
            >
              <img
                className="rounded"
                width="85px"
                src="./assets/logo.png"
                alt="logo"
              />
            </NavLink>
          </div>
          <button
            className="navbar-toggler text-light border-light border-1 py-1 px-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fs-4 fa-solid fa-bars text-light"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav nav-ul ms-auto mb-2 mb-lg-0 fw-medium gap-1 flex-grow-1 justify-content-end ">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-light fs-6 py-1"
                  aria-current="page"
                  to="/"
                >
                  Home <i className="fa-solid fa-home "></i>
                </NavLink>
              </li>
              <li className="nav-item cart-link">
                <NavLink
                  to={"cart"}
                  className=" nav-link text-light fs-6 py-1 "
                >
                  Cart{" "}
                  <i className="position-relative z-3 fa-solid fa-cart-shopping text-light ">
                    {cartProducts.length !== 0 && (
                      <span className="cart-count">{cartProducts.length}</span>
                    )}
                  </i>
                </NavLink>
                <CartList />
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-light fs-6 py-1"
                  to="/contact"
                >
                  contact <i className="fa-solid fa-mobile-screen-button"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light fs-6 py-1 " to="/about">
                  About <i className="fa-solid fa-file-invoice"></i>
                </NavLink>
              </li>
              <ul
                style={{ flexBasis: "13%" }}
                className="navbar-nav gap-1 align-items-center justify-content-center"
              >
                {!isLoggedIn ? (
                  <>
                    <li className="nav-item w-50">
                      <button
                        onClick={() => {
                          setLoginOrRegister("login");
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#auth-modal"
                        style={{ padding: "3.5px" }}
                        className="btn btn-sm w-100  btn-success"
                      >
                        login
                      </button>
                    </li>
                    <li className="nav-item w-50">
                      <button
                        onClick={() => setLoginOrRegister("register")}
                        style={{ padding: "3.5px" }}
                        data-bs-toggle="modal"
                        data-bs-target="#auth-modal"
                        className={`btn btn-sm btn-warning text-light  text-center w-100`}
                      >
                        register
                      </button>
                    </li>
                  </>
                ) : (
                  <li className="nav-item w-50">
                    <button
                      onClick={() => {}}
                      style={{ padding: "3.5px" }}
                      className="btn btn-sm w-100  btn-danger"
                    >
                      logout
                    </button>
                  </li>
                )}
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
