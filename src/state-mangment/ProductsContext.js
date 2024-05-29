import { createContext, useContext, useEffect, useState } from "react";
import { loaderContext } from "./LoaderContext";

export const productsContext = createContext();

function ProductsContext({ children }) {
  const [products, setProducts] = useState([]);
  const { setLoaderIsVisible } = useContext(loaderContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://node-server-32yn.onrender.com/api/products"
        );
        const data = await response.json();

        if (response.ok) {
          setProducts(data);
        }
      } catch (error) {
        console.log(error);
        alert("failed to fetch data");
      } finally {
        setLoaderIsVisible(false);
      }
    };

    if (products.length === 0) {
      fetchData();
    }
  }, [products, setLoaderIsVisible]);

  return (
    <productsContext.Provider value={{ products, setProducts }}>
      {children}
    </productsContext.Provider>
  );
}

export default ProductsContext;
