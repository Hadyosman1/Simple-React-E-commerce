import EditProfileAvatar from "./EditProfileAvatar";

const ProfilePic = ({ user, lightBox, setLightBox, hideIcon }) => {
  return (
    <>
      <img
        style={{
          width: "100%",
          objectFit: "cover",
          backgroundColor: "#d6d6d6",
        }}
        onClick={() =>
          setLightBox((prev) => ({
            ...prev,
            isVisible: true,
            content: (
              <ProfilePic
                user={user}
                lightBox={lightBox}
                setLightBox={setLightBox}
              />
            ),
          }))
        }
        className={` rounded-4 ${!lightBox.isVisible && "pointer"}`}
        src={user.avatar}
        alt={user.firstName}
      />
      {!hideIcon && (
        <button
          onClick={() =>
            setLightBox((prev) => ({
              ...prev,
              isVisible: true,
              content: <EditProfileAvatar />,
            }))
          }
          id="edit-picture"
          style={{
            bottom: "0",
            right: "0",
            aspectRatio: "1",
            backgroundColor: "#87939e",
            translate: "5% 30%",
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
            Update Your Picture
          </span>
        </button>
      )}
    </>
  );
};
export default ProfilePic;
