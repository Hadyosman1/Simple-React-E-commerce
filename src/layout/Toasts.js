import { useContext, useEffect } from "react";
import { toastContext } from "../state-mangment/ToastContext";

function Toasts() {
  const { toasts, setToasts } = useContext(toastContext);

  const handleDeleteToast = (e, id) => {
    e.stopPropagation();
    setToasts((prev) => {
      return prev.filter((toast) => toast.id !== id);
    });
  };

  useEffect(() => {
    if (toasts.length === 0) {
      return;
    }

    let timeOut = setTimeout(
      () => {
        setToasts((prev) => {
          let newArr = [...prev];
          newArr.shift();
          return newArr;
        });
      },
      toasts.length === 1 ? 4000 : toasts.length * 1000
    );

    return () => {
      clearTimeout(timeOut);
    };
  }, [toasts, setToasts]);

  const toastsList = toasts.reverse().map((toast) => (
    <div key={toast.id} className={`my-toast bg-${toast.type} `}>
      <div className="row justify-content-between  m-0">
        <p
          className={`col-11 text-start fw-semibold m-0 text-light fs-6 ${
            toast.type === "warning" && "text-primary"
          }`}
        >
          {toast.title}
        </p>
        <button
          className="btn p-0 col-1"
          onClick={(e) => handleDeleteToast(e, toast.id)}
        >
          <i
            className={`fa-solid fa-xmark fs-3 text-light m-0 ${
              toast.type === "warning" && "text-primary"
            }`}
          ></i>
        </button>
      </div>
      <hr className=" m-0 text-light" />
      <div className="row p-2">
        <p
          className={` text-start fw-semibold m-0 text-light fs-6 ${
            toast.type === "warning" && "text-primary"
          }`}
        >
          {toast.message}
        </p>
      </div>
    </div>
  ));

  return (
    <div className={`toasts-parent ${toasts.length >= 4 && "overlay"}`}>
      <div className="toasts-wrapper">{toastsList}</div>
    </div>
  );
}

export default Toasts;
