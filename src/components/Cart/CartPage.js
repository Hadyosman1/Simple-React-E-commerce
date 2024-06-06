import { useContext } from "react";
import { cartProductsContext } from "../../state-mangment/CartContext";
import useScrollToTop from "../../hooks/useScrollToTop";

function CartPage() {
  useScrollToTop();
  const { cartProducts, setCartProducts } = useContext(cartProductsContext);

  const handleDelete = (id) => {
    const newCartProducts = cartProducts.filter((pro) => pro._id !== id);
    setCartProducts(newCartProducts);
  };

  const minusOne = (id) => {
    const newArr = cartProducts.map((pro) => {
      if (pro._id === id) {
        pro.quantity -= 1;
      }
      return pro;
    });

    setCartProducts(newArr);
  };

  const plusOne = (id) => {
    const newArr = cartProducts.map((pro) => {
      if (pro._id === id) {
        pro.quantity += 1;
      }
      return pro;
    });

    setCartProducts(newArr);
  };

  const handleClearCart = () => {
    setCartProducts([]);
  };

  const totalPrice = cartProducts
    .reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0)
    .toFixed(2);

  const productsList = cartProducts.map((pro) => {
    return (
      <tr key={pro._id}>
        <td style={{ maxWidth: "200px" }}>{pro.title}</td>
        <td className="text-success fw-bolder">
          {(pro.price * pro.quantity).toFixed(2)}$
        </td>
        <td>
          <img
            style={{
              maxWidth: "150px",
              aspectRatio: "4/3",
              objectFit: "contain",
            }}
            src={`https://node-server-32yn.onrender.com/uploads/${pro.image}`}
            alt={pro.title}
          />
        </td>
        <td className="">
          <div className="bg-secondary-subtle rounded-3 shadow d-inline-flex align-items-center gap-4 p-2">
            <button
              disabled={pro.quantity > 1 ? false : true}
              onClick={() => minusOne(pro._id)}
              className="btn bg-danger  btn-sm"
            >
              <i className="fa-solid text-light fa-minus"></i>
            </button>
            {pro.quantity}
            <button
              onClick={() => plusOne(pro._id)}
              className="btn bg-success btn-sm"
            >
              <i className="fa-solid text-light fa-plus"></i>
            </button>
          </div>
        </td>
        <td>
          <button
            onClick={() => handleDelete(pro._id)}
            className="btn btn-danger mx-2"
          >
            Delete <i className="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="container pt-4">
        {cartProducts.length !== 0 ? (
          <>
            <div className="d-flex my-3 align-items-center justify-content-between">
              <h2 style={{ color: "#01497c" }} className="m-0 fw-bold">
                Your Cart
              </h2>
              <button
                onClick={handleClearCart}
                className="btn btn-danger fw-bold "
              >
                Clear All <i className="fa-solid fa-delete-left"></i>
              </button>
            </div>
            <div className="cart-table" style={{ overflowX: "auto" }}>
              <table className=" m-0 table table-primary align-middle fw-bold text-center w-100">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                <tbody>{productsList}</tbody>
                <tfoot>
                  <tr>
                    <th colSpan={10} scope="row" className="text-center fs-5 ">
                      Total Price: {""}
                      <span className="text-success">{totalPrice}$</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </>
        ) : (
          <>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="alert alert-primary">
                Your Cart is Empty Go To Home To Add Product.. 😃
              </h3>
            </div>
            <div className="text-center">
              <img
                style={{
                  width: "100%",
                  aspectRatio: "21/10",
                  objectFit: "contain",
                }}
                src={"./assets/shopping-fun.png"}
                alt="cart"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartPage;
