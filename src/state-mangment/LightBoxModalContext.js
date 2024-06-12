import { createContext, useState } from "react";

export const lightBoxModalContext = createContext();

const LightBoxModalContext = ({ children }) => {
  const [isLightBoxVisible, setIsLightBoxVisible] = useState(false);
  return (
    <lightBoxModalContext.Provider
      value={{ isLightBoxVisible, setIsLightBoxVisible }}
    >
      {children}
    </lightBoxModalContext.Provider>
  );
};

export default LightBoxModalContext;
