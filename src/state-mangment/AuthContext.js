import { createContext, useState } from "react";
export const authContext = createContext();

function AuthContext({ children }) {
  const [auth, setAuth] = useState({
    isLoggedIn: localStorage.getItem("token") ? true : false,
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
  });
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
}
export default AuthContext;
