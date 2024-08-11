import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastContext } from "../../state-mangment/ToastContext";

const changePassword = async (
  user,
  newPassword,
  setIsBtnDisabled,
  navigate,
  setToasts
) => {
  setIsBtnDisabled(true);
  try {
    const res = await fetch(
      `${process.env.PUBLIC_URL}/api/users/reset_password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...user, password: newPassword }),
      }
    );
    const data = await res.json();

    if (res.ok) {
      setToasts((prev) => [
        ...prev,
        {
          title: "Nice 😀",
          message: `${data.msg} .. 👍`,
          type: "success",
          id: Date.now(),
        },
      ]);
      navigate("/", { replace: true });
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

const ResetPassForm = ({ user }) => {
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [isPasswordMatched, setIsPasswordMatched] = useState(true);
  const { setToasts } = useContext(toastContext);
  const navigate = useNavigate();

  const handleFormSubmitted = async (e) => {
    e.preventDefault();
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (confirmPassword !== newPassword) return setIsPasswordMatched(false);
    changePassword(user, newPassword, setIsBtnDisabled, navigate, setToasts);
  };

  return (
    <form onSubmit={handleFormSubmitted}>
      <div>
        <label
          className="my-2 text-primary fw-medium pointer"
          htmlFor="new_pass"
        >
          New password
        </label>
        <input
          placeholder="Min length 8 digits"
          className="form-control my-1"
          id="new_pass"
          type="password"
          name="newPassword"
          minLength={8}
          required
        />
      </div>
      <div>
        <label
          className="mt-3 text-primary fw-medium pointer"
          htmlFor="confirm_pass"
        >
          Confirm new password
        </label>
        <input
          onChange={() => setIsPasswordMatched(true)}
          placeholder="Min length 8 digits"
          className={`form-control my-1 ${!isPasswordMatched && "is-invalid"}`}
          id="confirm_pass"
          type="password"
          name="confirmPassword"
          minLength={8}
          required
        />
        <div id="confirm_pass" className="invalid-feedback">
          Passwords not matched..!
        </div>
      </div>

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

export default ResetPassForm;
