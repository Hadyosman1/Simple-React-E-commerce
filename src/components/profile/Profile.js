import { useContext, useEffect } from "react";
import { authContext } from "../../state-mangment/AuthContext";
import { lightBoxModalContext } from "../../state-mangment/LightBoxModalContext";
import useScrollToTop from "../../hooks/useScrollToTop";

import { Link, useNavigate } from "react-router-dom";
import  ProfilePic  from "./ProfilePic";

const Profile = () => {
  useScrollToTop();
  const navigate = useNavigate();

  const { lightBox, setLightBox } = useContext(lightBoxModalContext);
  const {
    auth: { user, token },
  } = useContext(authContext);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });

  return (
    <main className="container">
      {token ? (
        <div className="row justify-content-center align-items-start px-2 gap-3">
          <div className="col-12 ">
            <h2 className="fs-2 mt-4 fw-bold text-primary">
              {user.firstName}'s Profile
            </h2>
          </div>

          <div className="col gap-2 row p-3 bg-body-secondary rounded-3 shadow align-items-center justify-content-evenly">
            <div className="col-12 col-sm-4 position-relative">
              <ProfilePic
                lightBox={lightBox}
                setLightBox={setLightBox}
                user={user}
              />
            </div>
            <div className=" align-self-stretch col d-flex flex-column justify-content-evenly gap-3">
              <div className="pt-4">
                <h3 className="text-primary fw-bold ">
                  <span className="text-dark text-opacity-75">User Name: </span>
                  {user.firstName} {user.lastName}
                </h3>
                <h4 className="text-primary fw-bold">
                  <span className="text-dark text-opacity-75">Email: </span>
                  {user.email}
                </h4>
              </div>
              <div className=" ">
                <Link
                  to={"/profile/edit"}
                  type="button"
                  className="btn btn-primary"
                >
                  Edit Profile{" "}
                  <span className="badge p-0 ps-1">
                    <i className="fa-solid fa-gear"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-3">
            <img
              className="img-fluid rounded"
              src="./assets/profile_fun.jpg"
              alt="funny"
            />
          </div>
        </div>
      ) : (
        <div className="row p-5 justify-content-center">
          <p className="alert alert-primary my-5 fs-4 col-9 ">
            you should login first !{" "}
          </p>
        </div>
      )}
    </main>
  );
};

export default Profile;


