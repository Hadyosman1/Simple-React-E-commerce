import { useContext, useState } from "react";
import { toastContext } from "../../state-mangment/ToastContext";

const getUserByEmail = async (email, setIsBtnDisabled, setToasts) => {
  setIsBtnDisabled(true);
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/users/get_user_by_email/${email}`
    );
    const data = await res.json();
    if (res.ok) {
      setToasts((prev) => [
        ...prev,
        {
          title: "Nice 😀",
          message: `You can reset password now... 👍`,
          type: "success",
          id: Date.now(),
        },
      ]);
      return data;
    } else {
      throw new Error(data.message || data.msg);
    }
  } catch (error) {
    setToasts((prev) => [
      ...prev,
      {
        title: "oops !",
        message: `${error.message || error.msg} 🤷‍♀️`,
        type: "danger",
        id: Date.now(),
      },
    ]);
  } finally {
    setIsBtnDisabled(false);
  }
};

const ForgetPassForm = ({ setUser }) => {
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const { setToasts } = useContext(toastContext);

  const handleFormSubmitted = async (e) => {
    e.preventDefault();
    const fetchedUser = await getUserByEmail(
      e.target.email.value,
      setIsBtnDisabled,
      setToasts
    );

    if (fetchedUser) {
      setUser(fetchedUser);
    }
  };

  return (
    <form onSubmit={handleFormSubmitted}>
      <label className="mt-3 mb-2 text-primary fw-semibold pointer" htmlFor="email">
        Enter your E-mail
      </label>
      <input
        placeholder="example@example.com"
        className="form-control"
        id="email"
        type="email"
        name="email"
        required
        autoComplete="email"
      />
      <button
        disabled={isBtnDisabled}
        className="form-control mt-3 btn btn-primary"
      >
        {isBtnDisabled && (
          <span className="spinner-border spinner-border-sm" role="status" />
        )}{" "}
        Submit
      </button>
    </form>
  );
};

export default ForgetPassForm;
