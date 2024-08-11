import { useContext, useState } from "react";
import SmallLodaer from "../../layout/SmallLodaer";
import { lightBoxModalContext } from "../../state-mangment/LightBoxModalContext";
import { authContext } from "../../state-mangment/AuthContext";
import { toastContext } from "../../state-mangment/ToastContext";

const DeleteAcc = () => {
  const { setLightBox } = useContext(lightBoxModalContext);
  const { setToasts } = useContext(toastContext);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const {
    auth: { user },
    setAuth,
  } = useContext(authContext);

  const handleDeleteUser = async () => {
    setIsLoaderVisible(true);
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/users/${user._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const data = await res.json();
      
      if (res.ok) {
        //---------
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setAuth((prev) => ({
          ...prev,
          user: {},
          token: "",
          isLoggedIn: false,
        }));
        //----------
        setToasts((prev) => [
          ...prev,
          {
            title: "operation success 👍",
            message: `Account Deleted Successfully..!`,
            type: "orange",
            id: Date.now(),
          },
        ]);
      }

      if (data.msg) {
        throw data;
      }
    } catch (error) {
      setToasts((prev) => [
        ...prev,
        {
          title: "oops !",
          message: `Error ${error.msg ?? error.message ?? error} 🤷‍♀️`,
          type: "danger",
          id: Date.now(),
        },
      ]);
    } finally {
      setIsLoaderVisible(false);
      setLightBox((prev) => ({
        ...prev,
        isVisible: false,
        content: <></>,
      }));
    }
  };

  return (
    <div className="bg-light rounded shadow border border-1 " tabIndex="-1">
      <div>
        <div>
          <div className="p-3">
            <h5 className="m-0 fw-bold text-danger">Are You Sure ..?</h5>
          </div>
          <hr className="m-0" />
          <div className="p-3">
            <p className="text-danger fw-bold">
              If You Delete Your Account You Can't Access It Again !
            </p>
          </div>
          <hr className="m-0 " />
          <div className="modal-footer p-3">
            {isLoaderVisible && (
              <span className="me-auto" style={{ translate: "250% 0" }}>
                <SmallLodaer />
              </span>
            )}
            <button
              onClick={() =>
                setLightBox((prev) => ({
                  ...prev,
                  isVisible: false,
                  content: <></>,
                }))
              }
              type="button"
              className="btn btn-sm mx-1 btn-secondary"
            >
              Close
            </button>
            <button
              onClick={handleDeleteUser}
              type="button"
              className="btn btn-sm mx-1 btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAcc;
