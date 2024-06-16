import { createContext, useContext, useEffect, useState } from "react";
import { loaderContext } from "./LoaderContext";
import { toastContext } from "./ToastContext";

export const productsContext = createContext();

function ProductsContext({ children }) {
  const [products, setProducts] = useState([]);
  const { setLoaderIsVisible } = useContext(loaderContext);
  const { setToasts } = useContext(toastContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/products`
        );
        const data = await response.json();

        if (response.ok) {
          setProducts(data);
        } else {
          throw data;
        }
      } catch (error) {
        setToasts((prev) => [
          ...prev,
          {
            title: "oops !",
            message: `Error  ${error.msg || error.message} 🤷‍♀️`,
            type: "danger",
            id: Date.now(),
          },
        ]);
      } finally {
        setLoaderIsVisible(false);
      }
    };

    if (products.length === 0) {
      fetchData();
    }
  }, [products, setLoaderIsVisible, setToasts]);

  return (
    <productsContext.Provider value={{ products, setProducts }}>
      {children}
    </productsContext.Provider>
  );
}

export default ProductsContext;
