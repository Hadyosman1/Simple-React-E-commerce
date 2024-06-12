import { useContext, useRef, useState } from "react";
import { authModalContext } from "../../state-mangment/AuthModalContentContext";
import { authContext } from "../../state-mangment/AuthContext";
import { toastContext } from "../../state-mangment/ToastContext";
import SmallLodaer from "../../layout/SmallLodaer";

const AuthModal = () => {
  const { loginOrRegister } = useContext(authModalContext);
  const { setAuth } = useContext(authContext);
  const { setToasts } = useContext(toastContext);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [isPassVisible, setIsPassVisible] = useState(false);
  const closeBtnRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let json;
    let formData = new FormData();
    if (loginOrRegister === "login") {
      json = JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      });
    } else {
      formData.append("firstName", e.target.firstName.value);
      formData.append("lastName", e.target.lastName.value);
      formData.append("password", e.target.password.value);
      formData.append("email", e.target.email.value);
      formData.append("avatar", e.target.avatar.files[0]);
    }

    try {
      setIsLoaderVisible(true);
      const fetchConfig = {
        method: "POST",
        body: loginOrRegister === "login" ? json : formData,
      };

      if (loginOrRegister === "login") {
        fetchConfig.headers = { "Content-Type": "application/json" };
      }

      const res = await fetch(
        `https://node-server-32yn.onrender.com/api/users/${loginOrRegister}`,
        fetchConfig
      );
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        handleSuccess(e, data);
        closeBtnRef.current.click();
      }

      if (data.msg && !res.ok) {
        throw data.msg;
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

  const handleSuccess = (e, user) => {
    if (loginOrRegister === "register") {
      e.target.firstName.value = "";
      e.target.lastName.value = "";
    }
    e.target.password.value = "";
    e.target.email.value = "";

    let token = user.token;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);

    setAuth({
      token,
      user,
      isLoggedIn: true,
    });

    setToasts((prev) => [
      ...prev,
      {
        title: "Hello 😊",
        message: `you ${loginOrRegister} successfully 🎉`,
        type: "success",
        id: Date.now(),
      },
    ]);
  };

  return (
    <div
      className="modal fade"
      id="auth-modal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1
              className="modal-title fs-5 text-primary text-capitalize fw-bold"
              id="exampleModalLabel"
            >
              {loginOrRegister === "login" ? "login" : "register"}
            </h1>
            <button
              ref={closeBtnRef}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {loginOrRegister === "register" && (
                <>
                  <div className="mb-1">
                    <label htmlFor="first-name" className="form-label">
                      First Name
                    </label>
                    <input
                      placeholder="John"
                      minLength="2"
                      maxLength="10"
                      name="firstName"
                      required
                      type="text"
                      className="form-control form-control-sm"
                      id="first-name"
                    />
                    <div id="emailHelp" className="form-text"></div>
                  </div>
                  <div className="mb-1">
                    <label htmlFor="last-name" className="form-label">
                      Last Name
                    </label>
                    <input
                      placeholder="Doe"
                      minLength="2"
                      maxLength="10"
                      name="lastName"
                      required
                      type="text"
                      className="form-control form-control-sm"
                      id="last-name"
                    />
                    <div id="emailHelp" className="form-text"></div>
                  </div>
                </>
              )}
              <div className="mb-1">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  placeholder="example@example.com"
                  required
                  name="email"
                  type="email"
                  className="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-1">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <fieldset className="d-flex p-0 ">
                  <input
                    placeholder="min length 8 digits"
                    required
                    name="password"
                    minLength={8}
                    type={!isPassVisible ? "password" : "text"}
                    id="exampleInputPassword1"
                    className="password-input-field form-control form-control-sm rounded-0 flex-grow-1   "
                  />
                  <i
                    onMouseDown={() => setIsPassVisible(!isPassVisible)}
                    onMouseUp={() => setIsPassVisible(!isPassVisible)}
                    style={{ display: "grid", placeItems: "center",width:"38px",maxWidth:"38px" }}
                    className={` fa-solid ${
                      isPassVisible ? "fa-eye-slash" : "fa-eye"
                    } px-2 pointer `}
                  ></i>
                </fieldset>
              </div>
              {loginOrRegister === "register" && (
                <div className="mb-1">
                  <label htmlFor="image" className="form-label">
                    Image
                  </label>
                  <input
                    accept="image/*"
                    name="avatar"
                    className="form-control form-control-sm"
                    id="image"
                    type="file"
                  />
                </div>
              )}
              <div className="modal-footer p-0 pt-2 mt-3">
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
                  type="submit"
                  disabled={isLoaderVisible}
                  className={`btn text-light btn-${
                    loginOrRegister === "login" ? "primary" : "register"
                  }`}
                >
                  {loginOrRegister === "login" ? "login" : "register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
