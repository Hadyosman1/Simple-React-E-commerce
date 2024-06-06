import { createContext, useState } from "react";

export const authModalContext = createContext();

function AuthModalContext({ children }) {
  const [loginOrRegister, setLoginOrRegister] = useState("");
  return (
    <authModalContext.Provider value={{ loginOrRegister, setLoginOrRegister }}>
      {children}
    </authModalContext.Provider>
  );
}
export default AuthModalContext;
