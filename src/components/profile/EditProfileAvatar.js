import { useContext, useState } from "react";
import { authContext } from "../../state-mangment/AuthContext";
import { toastContext } from "../../state-mangment/ToastContext";
import SmallLodaer from "../../layout/SmallLodaer";
import { lightBoxModalContext } from "../../state-mangment/LightBoxModalContext";

const EditProfileAvatar = () => {
  const [file, setFile] = useState({});
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const { setLightBox } = useContext(lightBoxModalContext);
  const { setToasts } = useContext(toastContext);
  const {
    auth: { user },
    setAuth,
  } = useContext(authContext);

  const handleEdit = async () => {
    const fileSize = file.size / 1024 / 1024;
    if (fileSize > 3) {
      // 3MB
      setToasts((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: "danger",
          title: "Error 🤷‍♂️",
          message: "File size must be less than 3MB",
        },
      ]);
      return;
    }

    if (file?.name) {
      udatePic(user, file, setAuth, setToasts, setIsLoaderVisible, setLightBox);
    }
  };

  return (
    <div className="mb-3 bg-light p-4 rounded-2 shadow-lg">
      <form className="d-flex flex-column" onSubmit={(e) => e.preventDefault()}>
        <label
          style={{ borderBottom: "1.5px solid #e6e6e6" }}
          htmlFor="formFileSm"
          className="form-label text-primary fs-4 pb-2"
        >
          Upload your picture 😃
        </label>

        <input
          onChange={(e) => setFile(e.target.files[0])}
          className="form-control form-control-sm mt-2"
          id="formFileSm"
          type="file"
          name="avatar"
        />
        {file?.name && (
          <div className="mt-3">
            <img
              style={{ maxWidth: "100%", objectFit: "contain" }}
              className="rounded"
              src={URL.createObjectURL(file)}
              alt="uploaded file"
            />
          </div>
        )}
        <div className="d-flex justify-content-between align-items-center">
          {isLoaderVisible && <SmallLodaer translate={"200% 150%"} />}
          <button
            disabled={!file?.name ? true : false}
            onClick={handleEdit}
            type="submit"
            className="btn btn-primary  mt-3 ms-auto"
          >
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileAvatar;

const udatePic = async (
  user,
  file,
  setAuth,
  setToasts,
  setIsLoaderVisible,
  setLightBox
) => {
  try {
    setIsLoaderVisible(true);
    const formData = new FormData();
    formData.append("avatar", file);
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/users/${user._id}`,
      {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      setAuth((prev) => ({ ...prev, user: { ...data } }));
      setToasts((prev) => [
        ...prev,
        {
          title: "nice 😀",
          message: "picture updated successfully 👌",
          type: "success",
          id: Date.now(),
        },
      ]);
    } else {
      throw data.msg || new Error("an error occured!");
    }
  } catch (error) {
    setToasts((prev) => [
      ...prev,
      {
        title: "oops 😮",
        message: error.msg || "an error occured",
        type: "danger",
        id: Date.now(),
      },
    ]);
  } finally {
    setIsLoaderVisible(false);
    setLightBox((prev) => ({
      ...prev,
      isVisible: false,
      status: "",
      content: <></>,
    }));
  }
};
