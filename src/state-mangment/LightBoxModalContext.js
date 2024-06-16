import { createContext, useState } from "react";

export const lightBoxModalContext = createContext();

const LightBoxModalContext = ({ children }) => {
  const [lightBox, setLightBox] = useState({
    isVisible: false,
    content: <></>,
  });
  return (
    <lightBoxModalContext.Provider value={{ lightBox, setLightBox }}>
      {children}
    </lightBoxModalContext.Provider>
  );
};

export default LightBoxModalContext;
