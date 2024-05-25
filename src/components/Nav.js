import { NavLink } from "react-router-dom";
import logo from "./../logo.svg";
import { useContext } from "react";
import { cartProductsContext } from "../state-mangment/cartContext/CartContext";

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
              <img width="50px" src={logo} alt="logo" />
              Store
            </NavLink>
          </div>
          <button
            className="navbar-toggler text-light border-light py-1 px-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fs-2 fa-solid fa-bars text-light"></span>
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
                  className="nav-link text-light fs-5 py-1"
                  aria-current="page"
                  to="/"
                >
                  Home <i className="fa-solid fa-home "></i>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to={"cart"} className=" nav-link text-light fs-5 py-1 ">
                  Cart{" "}
                  <i
                    className="position-relative z-3 fa-solid fa-cart-shopping text-light "
                    // style={{ lineHeight: "1" }}
                  >
                    <span className="cart-count">{cartProducts.length}</span>
                  </i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light fs-5 py-1" to="/contact">
                  contact {" "}
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light fs-5 py-1 " to="/about">
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
