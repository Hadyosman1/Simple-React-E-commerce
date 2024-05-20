import { Link } from "react-router-dom";
import logo from "./../logo.svg";

export default function Nav() {
  return (
    <header
      style={{ backgroundColor: "#01497c" }}
      className="border-bottom border-3 fixed-top "
    >
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid ">
          <a
            className="navbar-brand fw-bold text-light d-flex align-items-center "
            href="/#"
          >
            <img width="50px" src={logo} alt="logo" />
            Store
          </a>
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
              className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold"
            >
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  <i className="fa-solid fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact">
                  <i className="fa-solid fa-mobile-screen-button"></i> contact
                  Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
