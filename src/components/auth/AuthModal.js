import { useContext } from "react";
import { authModalContext } from "../../state-mangment/AuthModalContentContext";

const AuthModal = () => {
  const { loginOrRegister, setLoginOrRegister } = useContext(authModalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      let formData = new FormData();
      if (loginOrRegister === "login") {
        formData.append("password", e.target.password.value);
        formData.append("email", e.target.email.value);
      } else {
        formData.append("firstName", e.target.firstName.value);
        formData.append("lastName", e.target.lastName.value);
        formData.append("password", e.target.password.value);
        formData.append("email", e.target.email.value);
        formData.append("avatar", e.target.avatar.files[0]);
      }

      try {
        const res = await fetch(
          `https://node-server-32yn.onrender.com/api/users/${loginOrRegister}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: formData,
           
          }
        );
        const data = await res.json();
        console.log(data);
        if (res.ok) {
        // handle success
        }

        if (data.msg) {
          throw data.msg;
        }
      } catch (error) {
        alert(error);
      }
    })();

    // e.target.firstName.value
    // e.target.lastName.value
    // e.target.password.value
    // e.target.email.value
    // e.target.avatar.files[0]
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
                <input
                  required
                  name="password"
                  minLength={8}
                  type="password"
                  className="form-control form-control-sm"
                  id="exampleInputPassword1"
                />
              </div>
              {loginOrRegister === "register" && (
                <div className="mb-1">
                  <label htmlFor="image" className="form-label">
                    Image
                  </label>
                  <input
                    name="avatar"
                    className="form-control form-control-sm"
                    id="image"
                    type="file"
                  />
                </div>
              )}
              <div className="modal-footer p-0 pt-2 mt-3">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className={`btn text-light btn-${
                    loginOrRegister === "login" ? "primary" : "warning"
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
