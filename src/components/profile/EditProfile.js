import React, { useContext, useEffect, useRef, useState } from "react";
import { lightBoxModalContext } from "../../state-mangment/LightBoxModalContext";
import { Link, redirect, useNavigate } from "react-router-dom";
import ProfilePic from "./ProfilePic";
import { authContext } from "../../state-mangment/AuthContext";
import EditProfileAvatar from "./EditProfileAvatar";
import DeleteAcc from "./DeleteAcc";
import { toastContext } from "../../state-mangment/ToastContext";
import SmallLodaer from "../../layout/SmallLodaer";

const EditProfile = () => {
  const { lightBox, setLightBox } = useContext(lightBoxModalContext);
  const { setToasts } = useContext(toastContext);
  const navigate = useNavigate();
  const {
    auth: { user },
    setAuth,
  } = useContext(authContext);
  const [formInputs, setFormInputs] = useState({ ...user });
  const [isPasswordFieldHidden, setIsPasswordFieldHidden] = useState(true);
  const [isOldPassVisible, setIsOldPassVisible] = useState(false);
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [isCofirmPassWrong, setIsConfirmPassWrong] = useState(false);
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true);
  const paraWarningRef = useRef();

  useEffect(() => {
    if (!user.token) {
      navigate("/");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const myForm = e.target;
      const firstName = myForm.firstName.value;
      const lastName = myForm.lastName.value;
      const oldPassword = myForm.oldPassword?.value;
      const password = myForm.password?.value;
      const confirmPassword = myForm.confirmPass?.value;

      if (!isPasswordFieldHidden && password !== confirmPassword) {
        setIsConfirmPassWrong(true);

        return false;
      }
      setIsLoaderVisible(true);

      let res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/users/${user._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            oldPassword,
            password,
            confirmPassword,
          }),
        }
      );
      let data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data));
        //------
        setAuth((prev) => ({
          ...prev,
          user: data,
          token: data.token,
        }));
        //-------
        setToasts((prev) => [
          ...prev,
          {
            title: "Nice 😀",
            message: `Personal Information Updated successfully... 👍`,
            type: "success",
            id: Date.now(),
          },
        ]);
        //------
        navigate("/profile");
      } else {
        throw data.msg;
      }
    } catch (error) {
      setToasts((prev) => [
        ...prev,
        {
          title: "oops !",
          message: `${error || error.msg} 🤷‍♀️`,
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
      <div className="container py-5 px-3">
        <div className="d-flex align-items-center">
          <h2 className="my-4 fw-bold text-primary d-inline-block">
            Edit Profile
          </h2>
          <button
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            className="btn btn-danger btn-sm  ms-auto"
          >
            <i
              style={{ rotate: "180deg" }}
              className="fa-solid fa-arrow-right-to-bracket"
            ></i>{" "}
            logout
          </button>
          <Link to={"/profile"} className="btn btn-sm btn-primary mx-2 ">
            <i className="fa-solid fa-arrow-left"> </i> Go To Profile
          </Link>
        </div>
        <div className="row bg-dark-subtle bg-opacity-25 p-2 p-md-4 rounded gap-3 ">
          <h3 className="fw-bold text-primary px-3 pt-1 py-md-0 m-0">
            Personal Information
          </h3>

          <div className="flex-shrink-0 col-12 col-md-3 position-relative">
            <ProfilePic
              lightBox={lightBox}
              setLightBox={setLightBox}
              user={user}
              hideIcon={true}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightBox((prev) => ({
                  ...prev,
                  isVisible: true,
                  content: <EditProfileAvatar />,
                }));
              }}
              className="btn btn-sm btn-primary btn-register mt-3 w-100"
            >
              <i className="fa-solid fa-pencil"> </i> Updata Profile Picture
            </button>
          </div>

          <div className="col d-flex flex-column gap-3">
            <div className="row gap-3 px-3 ">
              <form
                onSubmit={handleSubmit}
                className=" bg-light p-3 rounded col-12 col-md-8"
              >
                <fieldset className="mb-3">
                  <label
                    className="text-primary fw-bold mb-1"
                    htmlFor="first-name"
                  >
                    F Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    className="form-control"
                    id="first-name"
                    value={formInputs.firstName}
                    onChange={(e) => {
                      setIsSubmitBtnDisabled(false);
                      setFormInputs((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }));
                    }}
                  />
                </fieldset>
                <fieldset className="mb-3">
                  <label
                    className="text-primary fw-bold mb-1"
                    htmlFor="last-name"
                  >
                    L Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    className="form-control"
                    id="last-name"
                    value={formInputs.lastName}
                    onChange={(e) => {
                      setIsSubmitBtnDisabled(false);
                      setFormInputs((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }));
                    }}
                  />
                </fieldset>
                <button
                  style={{ width: "160px" }}
                  type="button"
                  onClick={() =>
                    setIsPasswordFieldHidden(!isPasswordFieldHidden)
                  }
                  className="btn btn-sm btn-primary  mb-3"
                >
                  {isPasswordFieldHidden ? (
                    <i className="fa-solid fa-key"></i>
                  ) : (
                    <i className="fa-solid fa-hand"></i>
                  )}
                  {isPasswordFieldHidden
                    ? ` Change Password`
                    : " Keep Password"}
                </button>
                {!isPasswordFieldHidden && (
                  <>
                    <div>
                      <label
                        className="text-primary fw-bold mb-1"
                        htmlFor="old-pass"
                      >
                        Old Password
                      </label>
                      <fieldset className="mb-3 d-flex p-0 ">
                        <input
                          onChange={() => {
                            setIsSubmitBtnDisabled(false);
                          }}
                          placeholder="min length 8 digits"
                          required={!isPasswordFieldHidden}
                          name="oldPassword"
                          minLength={8}
                          type={!isOldPassVisible ? "password" : "text"}
                          id="old-pass"
                          className="password-input-field form-control form-control-sm rounded-0 flex-grow-1   "
                        />
                        <i
                          onMouseDown={() =>
                            setIsOldPassVisible(!isOldPassVisible)
                          }
                          onMouseUp={() =>
                            setIsOldPassVisible(!isOldPassVisible)
                          }
                          style={{
                            display: "grid",
                            placeItems: "center",
                            width: "38px",
                            maxWidth: "38px",
                          }}
                          className={` fa-solid ${
                            isOldPassVisible ? "fa-eye-slash" : "fa-eye"
                          } px-2 pointer `}
                        ></i>
                      </fieldset>
                    </div>
                    {/*field*/}
                    <div>
                      <label
                        className="text-primary fw-bold mb-1"
                        htmlFor="new-pass"
                      >
                        New Password
                      </label>
                      <fieldset className="mb-3 d-flex p-0 ">
                        <input
                          onChange={() => {
                            setIsSubmitBtnDisabled(false);
                          }}
                          placeholder="min length 8 digits"
                          required={!isPasswordFieldHidden}
                          name="password"
                          minLength={8}
                          type={!isPassVisible ? "password" : "text"}
                          id="new-pass"
                          className="password-input-field form-control form-control-sm rounded-0 flex-grow-1   "
                        />
                        <i
                          onMouseDown={() => setIsPassVisible(!isPassVisible)}
                          onMouseUp={() => setIsPassVisible(!isPassVisible)}
                          style={{
                            display: "grid",
                            placeItems: "center",
                            width: "38px",
                            maxWidth: "38px",
                          }}
                          className={` fa-solid ${
                            isPassVisible ? "fa-eye-slash" : "fa-eye"
                          } px-2 pointer `}
                        ></i>
                      </fieldset>
                    </div>
                    {/*field*/}
                    <div>
                      <label
                        className="text-primary fw-bold mb-1"
                        htmlFor="confirm-new-pass"
                      >
                        Confirm New Password
                      </label>
                      <fieldset
                        className={`mb-1 d-flex p-0 ${
                          isCofirmPassWrong && "warning"
                        }`}
                      >
                        <input
                          onChange={() => {
                            setIsSubmitBtnDisabled(false);
                            setIsConfirmPassWrong(false);
                          }}
                          placeholder="min length 8 digits"
                          required={!isPasswordFieldHidden}
                          name="confirmPass"
                          minLength={8}
                          type={!isConfirmPassVisible ? "password" : "text"}
                          id="confirm-new-pass"
                          className="password-input-field  form-control form-control-sm rounded-0 flex-grow-1"
                        />
                        <i
                          onMouseDown={() =>
                            setIsConfirmPassVisible(!isConfirmPassVisible)
                          }
                          onMouseUp={() =>
                            setIsConfirmPassVisible(!isConfirmPassVisible)
                          }
                          style={{
                            display: "grid",
                            placeItems: "center",
                            width: "38px",
                            maxWidth: "38px",
                          }}
                          className={` fa-solid ${
                            isConfirmPassVisible ? "fa-eye-slash" : "fa-eye"
                          } px-2 pointer `}
                        ></i>
                      </fieldset>
                      {isCofirmPassWrong && (
                        <p ref={paraWarningRef} className="text-danger m-0">
                          Wrong Confirm Password..!
                        </p>
                      )}
                    </div>
                    {/*field*/}
                  </>
                )}
                <hr />
                <div className="d-flex align-items-center">
                  <button
                    disabled={isSubmitBtnDisabled}
                    type="submit"
                    className="btn btn-login"
                  >
                    Submit Changes
                  </button>
                  {isLoaderVisible && (
                    <span className="ms-auto">
                      <SmallLodaer translate={"-20px 0"} />
                    </span>
                  )}
                </div>
              </form>

              <div className="form-floating p-0 col d-flex flex-column gap-3">
                <input
                  disabled
                  readOnly
                  type="email"
                  className="form-control text-primary"
                  id="floatingInputValue"
                  placeholder="name@example.com"
                  value={user.email}
                />
                <label htmlFor="floatingInputValue"> E-mail </label>
                <button
                  onClick={() =>
                    setLightBox((prev) => ({
                      ...prev,
                      isVisible: true,
                      content: <DeleteAcc />,
                    }))
                  }
                  className="btn btn-sm btn-danger ms-auto"
                >
                  <i className="fa-solid fa-user-slash"></i> Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;

export const myLoader = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/");
  }
  return null;
};
