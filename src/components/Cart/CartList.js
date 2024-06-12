import { useContext } from "react";
import { cartProductsContext } from "../../state-mangment/CartContext";
import { Link } from "react-router-dom";

function CartList() {
  const { cartProducts, setCartProducts } = useContext(cartProductsContext);

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

  const handleClearCart = (e) => {
    e.stopPropagation();
    setCartProducts([]);
  };

  const handleDelete = (id) => {
    const newCartProducts = cartProducts.filter((pro) => pro._id !== id);
    setCartProducts(newCartProducts);
  };

  const totalPrice = cartProducts
    .reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0)
    .toFixed(2);

  const cartList = cartProducts.map((pro) => (
    <div key={pro._id} className="pro-in-list">
      <div className="position-relative">
        <img src={pro.image} alt={pro.title} className="me-2" />
        <div className=" quantity">
          <h3 className="fs-6 text-light fw-semibold text-center m-0">
            {pro.quantity}
          </h3>
        </div>
      </div>
      <h2 className="fs-6 fw-semibold">{pro.title}</h2>
      <div className="row justify-content-between flex-column">
        <span className="d-block fw-semibold">price</span>
        <h3 className="text-success fs-6 fw-semibold ">
          {(pro.price * pro.quantity).toFixed(2)}${" "}
        </h3>
      </div>

      <div className="d-inline-flex align-items-center justify-content-evenly flex-grow-1">
        <div
          style={{ maxWidth: "120px" }}
          className="bg-secondary-subtle rounded-3 shadow d-inline-flex align-items-center  gap-2 p-2"
        >
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
        <button
          onClick={() => handleDelete(pro._id)}
          className="btn btn-danger ms-1"
        >
          Delete <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <div className="cart-list">
      {cartList.length !== 0 ? (
        <>
          <h2 className="fs-5 fw-semibold m-0">your cart 😀</h2>
          <div
            style={{ borderBottom: "1px solid #01497c" }}
            className="d-flex justify-content-between mt-1 py-2 "
          >
            <Link to={"/cart"} className="btn btn-success btn-sm m-0">
              Go To Cart page <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <button
              onClick={handleClearCart}
              className="btn btn-danger btn-sm m-0"
            >
              Clear All <i className="fa-solid fa-delete-left"></i>
            </button>
          </div>

          <div className="cart-products-list-wrapper">{cartList}</div>
          <div className="bg-success bg-opacity-75 rounded text-center text-light p-1 m-0 mt-2 mb-1 fw-bold">
            Total: <span>{totalPrice}$</span>
          </div>
        </>
      ) : (
        <h2 className="fs-5 fw-semibold border-0 my-3 mx-3">
          your cart is empty!
        </h2>
      )}
    </div>
  );
}

export default CartList;
