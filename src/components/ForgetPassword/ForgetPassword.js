import { useState } from "react";
import ForgetPassForm from "./ForgetPassForm";
import ResetPassForm from "./ResetPassForm";

const ForgetPassword = () => {
  const [user, setUser] = useState({});

  return (
    <main className="forget-pass-page">
      <div className="shadow">
        <div>
          <img
            className="bg-secondary-subtle rounded shadow-sm"
            src={` ${user.avatar ? user.avatar : "assets/forgetPass.jpg"}`}
            alt={user.firstName ? user.firstName : "forget Pass"}
          />
        </div>
        {user.firstName && (
          <h6 className="m-0 text-primary fw-bold my-3 d-flex gap-1 flex-wrap justify-content-between align-items-center">
            <span>
              {user.firstName} {user.lastName}
            </span>
            <span
              style={{ fontSize: "13px" }}
              className="h6 m-0 bg-primary text-light p-2 rounded-3 "
            >
              {user.email}
            </span>
          </h6>
        )}

        {user.firstName ? (
          <ResetPassForm user={user} />
        ) : (
          <ForgetPassForm setUser={setUser} />
        )}
      </div>
    </main>
  );
};

export default ForgetPassword;
