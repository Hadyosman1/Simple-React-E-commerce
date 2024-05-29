import { createContext, useState } from "react";

export const loaderContext = createContext();

function LoaderContext({ children }) {
  const [loaderIsVisible, setLoaderIsVisible] = useState(true);

  return (
    <loaderContext.Provider value={{ loaderIsVisible, setLoaderIsVisible }}>
      {children}
    </loaderContext.Provider>
  );
}

export default LoaderContext;
