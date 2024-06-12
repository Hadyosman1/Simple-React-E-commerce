import { NavLink } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { cartProductsContext } from "../state-mangment/CartContext";
import CartList from "../components/Cart/CartList";
import { authContext } from "../state-mangment/AuthContext";
import { authModalContext } from "../state-mangment/AuthModalContentContext";
import { toastContext } from "../state-mangment/ToastContext";
import SmallLodaer from "../layout/SmallLodaer";

const Nav = () => {
  const { cartProducts } = useContext(cartProductsContext);
  const {
    auth: { isLoggedIn, user, token },
    setAuth,
  } = useContext(authContext);
  const { setToasts } = useContext(toastContext);

  const { setLoginOrRegister } = useContext(authModalContext);

  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const handleLogout = async (closeBtnRef) => {
    try {
      setIsLoaderVisible(true);
      const res = await fetch(
        `https://node-server-32yn.onrender.com/api/users/logout/${user._id}`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setAuth({
          token: "",
          user: {},
          isLoggedIn: false,
        });
        setToasts((prev) => [
          ...prev,
          {
            title: "Hi  😊",
            message: `you logged out successfully... 👍 `,
            type: "orange",
            id: Date.now(),
          },
        ]);
      }
      if (data.msg && !res.ok) {
        throw data.msg;
      } else {
        closeBtnRef.current.click();
      }
    } catch (error) {
      setToasts((prev) => [
        ...prev,
        {
          title: "oops !",
          message: `Error ${error} 🤷‍♀️`,
          type: "danger",
          id: Date.now(),
        },
      ]);
    } finally {
      setIsLoaderVisible(false);
    }
  };

  return (
    <>
      <header
        style={{ backgroundColor: "#01497c" }}
        className="border-bottom border-1 fixed-top "
      >
        <nav className="navbar navbar-expand-lg container">
          <div className="container-fluid  ">
            <div className="d-flex align-items-center ">
              <NavLink
                className="navbar-brand fw-bold text-light d-flex align-items-center "
                to="/"
              >
                <img
                  className="rounded"
                  width="85px"
                  src="./assets/logo.svg"
                  alt="logo"
                />
              </NavLink>
            </div>

            <button
              className="navbar-toggler order-2 text-light border-light border-1 py-1 px-2"
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
              style={{ flexGrow: "1" }}
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav flex-grow-1 nav-ul ms-auto mb-2 mb-lg-0 fw-medium gap-1 justify-content-end ">
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
                        <span className="cart-count">
                          {cartProducts.length}
                        </span>
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
                    Contact <i className="fa-solid fa-mobile-screen-button"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-light fs-6 py-1 "
                    to="/about"
                  >
                    About <i className="fa-solid fa-file-invoice"></i>
                  </NavLink>
                </li>

                {!isLoggedIn && (
                  <ul className="list-unstyled d-flex list-unstyled gap-1 align-items-center justify-content-center flex-column flex-lg-row ms-2">
                    <li className="nav-item ">
                      <button
                        onClick={() => {
                          setLoginOrRegister("login");
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#auth-modal"
                        style={{ padding: "3.5px", minWidth: "80px" }}
                        className="btn btn-sm w-100  btn-login"
                      >
                        login
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={() => setLoginOrRegister("register")}
                        style={{ padding: "3.5px", minWidth: "80px" }}
                        data-bs-toggle="modal"
                        data-bs-target="#auth-modal"
                        className={`btn btn-sm btn-register text-light  text-center w-100`}
                      >
                        register
                      </button>
                    </li>
                  </ul>
                )}
              </ul>
            </div>
            {isLoggedIn && (
              <div
                onClick={() => setIsDropDownVisible(!isDropDownVisible)}
                className="position-relative me-auto text-light  d-flex align-items-center justify-content-center order-1  pointer ms-2"
              >
                <div className="d-flex justify-content-center align-items-center dropdown-toggle ">
                  <img
                    style={{
                      maxWidth: "40px",
                      aspectRatio: "1",
                      objectFit: "contain",
                      border: "2.5px solid #e6e6e6",
                      borderRadius: "50%",
                    }}
                    src={user.avatar}
                    alt="profile"
                    title={user.firstName}
                  />

                  <ul
                    style={{ maxWidth: "96svw" }}
                    className={`${
                      !isDropDownVisible && "drop-down-hidden"
                    } position-absolute p-1 gap-3 list-unstyled bg-light drop-down-profile shadow-lg border-1 border border-dark-subtle rounded`}
                  >
                    <li className="mb-2 border-1 border-bottom border-dark-subtle py-1 ">
                      <NavLink
                        style={{
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        to="profile"
                        className="text-primary nav-link fs-6 fw-semibold m-0 d-flex justify-content-between align-items-center px-1 gap-3"
                      >
                        {user.firstName} {user.lastName}
                        <i
                          style={
                            {
                              //   borderRadius: "50%",
                              // border: "1px solid #e7e7e7",
                            }
                          }
                          className=" fa-solid fa-user p-1"
                        ></i>
                      </NavLink>
                    </li>
                    <li className="nav-item flex-grow-1   ">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ padding: "3.5px" }}
                        className="btn btn-sm w-100  btn-danger"
                      >
                        logout{" "}
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
      <LogOutModal
        handleLogout={handleLogout}
        isLoaderVisible={isLoaderVisible}
      />
    </>
  );
};
export default Nav;

const LogOutModal = ({ handleLogout, isLoaderVisible }) => {
  const closeBtnRef = useRef();
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                are you sure !
              </h1>
              <button
                ref={closeBtnRef}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-footer">
              {isLoaderVisible && (
                <div className="flex-grow-1 px-5 d-flex justify-content-start">
                  <SmallLodaer />
                </div>
              )}
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => handleLogout(closeBtnRef)}
                type="button"
                className="btn btn-danger"
                disabled={isLoaderVisible}
              >
                logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
