import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { cartProductsContext } from "../state-mangment/CartContext";
import CartList from "./Cart/CartList";

export default function Nav() {
  const { cartProducts } = useContext(cartProductsContext);

  return (
    <header
      style={{ backgroundColor: "#01497c" }}
      className="border-bottom border-3 fixed-top "
    >
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid ">
          <div className="d-flex align-items-center ">
            <NavLink
              className="navbar-brand fw-bold text-light d-flex align-items-center "
              to="/"
            >
              <img className="rounded" width="85px" src={logo} alt="logo" />
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
            <ul
              style={{ width: "fit-content" }}
              className="navbar-nav nav-ul ms-auto mb-2 mb-lg-0 fw-medium gap-1"
            >
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
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
