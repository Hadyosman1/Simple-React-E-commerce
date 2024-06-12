import { useContext } from "react";
import { authContext } from "../../state-mangment/AuthContext";
import LightBoxModal from "../../layout/LightBoxModal";
import { lightBoxModalContext } from "../../state-mangment/LightBoxModalContext";

const Profile = () => {
  const {
    auth: { user, token },
  } = useContext(authContext);

  return (
    <main className="container">
      {token ? (
        <div className="row justify-content-center px-2">
          <div className="col-12 ">
            <h2 className="fs-2 my-4 fw-bold text-primary mb-3">
              {user.firstName}'s Profile
            </h2>
          </div>

          <div className="col-12 gap-2 row py-3 bg-body-secondary rounded-3 shadow align-items-center justify-content-evenly">
            <div className="col-12 col-sm-3 col-md-2 position-relative">
              <ProfilePic user={user} />
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
                <button type="button" className="btn btn-primary">
                  Edit Profile{" "}
                  <span className="badge p-0 ps-1">
                    <i className="fa-solid fa-gear"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row p-5 justify-content-center">
          <p className="alert alert-primary my-5 fs-4 col-9 ">
            you should login first !{" "}
          </p>
        </div>
      )}
      <LightBoxModal>
        <ProfilePic user={user} />
      </LightBoxModal>
    </main>
  );
};

export default Profile;

export const ProfilePic = ({ user }) => {
  const { isLightBoxVisible,setIsLightBoxVisible } = useContext(lightBoxModalContext);

  return (
    <>
      <img
        onClick={() => setIsLightBoxVisible(true)}
        className={`img-fluid rounded-4 ${!isLightBoxVisible && "pointer"}`}
        src={user.avatar}
        alt={user.firstName}
      />
      <button
        id="edit-picture"
        style={{
          bottom: "0",
          right: "0",
          aspectRatio: "1",
          backgroundColor: "#87939e",
          translate:"10% 30%"
        }}
        className="position-absolute btn btn-secondary rounded-circle btn-sm"
      >
        <i className="fa-solid fa-pencil"></i>
        <span
          style={{
            minWidth: "90px",
            left: "0",
            top: "50%",
            translate: "-120% -50%",
            backgroundColor: "#87939e",
          }}
          className="my-tooltip position-absolute d-inline-block p-1"
        >
          Edit Your Picture
        </span>
      </button>
    </>
  );
};
