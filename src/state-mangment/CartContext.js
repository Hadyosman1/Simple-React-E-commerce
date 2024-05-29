import { createContext, useState } from "react";

export const cartProductsContext = createContext();

function CartContext({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <cartProductsContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </cartProductsContext.Provider>
  );
}

export default CartContext;
