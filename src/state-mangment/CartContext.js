import { createContext,  useContext, useState } from "react";
import { toastContext } from "./ToastContext";
import { productsContext } from "./ProductsContext";

export const cartProductsContext = createContext();

function CartContext({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  //taost
  const { setToasts } = useContext(toastContext);

  //products
  const { products, setProducts } = useContext(productsContext);

  const handleAddToCart = (props) => {
    setToasts((prev) => [
      ...prev,
      {
        title: "welcome 😊",
        message: "added product successfully 🎉",
        type: "success",
        id: Date.now(),
      },
    ]);

    const pro = cartProducts.find((product) => product._id === props._id);

    if (!pro) {
      setCartProducts((prev) => [
        ...prev,
        {
          _id: props._id,
          title: props.title,
          image: props.image,
          price: props.price,
          category: props.category,
          description: props.description,
          rate: props.rating.rate,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts((prev) => {
        return prev.map((product) => {
          if (product._id === pro._id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          } else {
            return product;
          }
        });
      });
    }

    //decrement count of this product
    let updatedProductsCount = products.map((product) => {
      if (product._id === props._id) {
        return {
          ...product,
          rating: { ...product.rating, count: product.rating.count - 1 },
        };
      }

      return product;
    });
    setProducts(updatedProductsCount);
  };

  return (
    <cartProductsContext.Provider
      value={{ cartProducts, setCartProducts, handleAddToCart }}
    >
      {children}
    </cartProductsContext.Provider>
  );
}

export default CartContext;
