import { createContext, useState } from "react";

export const toastContext = createContext();
function ToastContext({ children }) {
  const [toasts, setToasts] = useState([]);

  return (
    <toastContext.Provider value={{ toasts, setToasts }}>
      {children}
    </toastContext.Provider>
  );
}

export default ToastContext;
