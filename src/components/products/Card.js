import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartProductsContext } from "../../state-mangment/CartContext";
import { toastContext } from "../../state-mangment/ToastContext";
import { productsContext } from "../../state-mangment/ProductsContext";
import ProductImage from "./ProductImage";

export default function Card(props) {
  const [isDesHide, setIsDesHide] = useState(true);
  const [isTitleHide, setIsTitleHide] = useState(true);

  //taost
  const { setToasts } = useContext(toastContext);

  //cart
  const { cartProducts, setCartProducts } = useContext(cartProductsContext);

  //products
  const { products, setProducts } = useContext(productsContext);

  const handleDes = () => {
    setIsDesHide(!isDesHide);
  };

  const handleTitle = () => {
    setIsTitleHide(!isTitleHide);
  };

  const handleAddToCart = (e) => {
    setToasts((prev) => [
      ...prev,
      {
        title: "welcome 😊",
        message: "added product successfully 🎉",
        type: "success",
        id: Date.now(),
      },
    ]);

    const pro = cartProducts.find((product) => product._id === props.id);

    if (!pro) {
      setCartProducts((prev) => {
        return [
          ...prev,
          {
            _id: props.id,
            title: props.title,
            image: props.image,
            price: props.price,
            category: props.category,
            description: props.description,
            rate: props.rate,
            quantity: 1,
          },
        ];
      });
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
      if (product._id === props.id) {
        return {
          ...product,
          rating: { ...product.rating, count: product.rating.count - 1 },
        };
      }

      return product;
    });
    setProducts(updatedProductsCount);
  };
  const product = cartProducts.find((pro) => pro._id === props.id);

  return (
    <>
      <div
        data-aos-offset="0"
        data-aos={props.animationType}
        className={
          props.media === "single"
            ? `col-12  col-lg-6 my-0 mb-3`
            : `col-12 col-md-6  col-lg-4 col-xl-3 px-3 my-2`
        }
      >
        <div
          style={{ minHeight: "400px" }}
          className="card rounded-3  p-1 shadow"
        >
          <ProductImage props={props} />
          <div className="card-body px-3">
            <h4
              style={{ color: "#78290F", fontWeight: "900" }}
              title="Click To See More"
              onClick={handleTitle}
              className={`card-title pointer py-2  ${
                isTitleHide && "card-title-over-flow fw-bold"
              }`}
            >
              {props.title}
              {!isTitleHide && <p className="text-primary fs-5 ">less... 🤞</p>}
            </h4>
            <hr className="text-primary m-0" />

            <span className="d-block text-primary fw-bold mb-1 fs-4 text-capitalize">
              description
            </span>
            <p
              onClick={
                props.media !== "single" ? handleDes : () => console.log("")
              }
              className={` mb-0 ${props.media !== "single" && "pointer"} ${
                isDesHide && props.media !== "single" && "card-desc text-clamp"
              } `}
            >
              {props.description}
            </p>

            {props.media !== "single" && (
              <p onClick={handleDes} className="pointer show-more mt-0">
                See {isDesHide ? "more" : "less"} ...
              </p>
            )}
            <hr className="text-primary " />

            <h6
              style={{ color: "#78290F" }}
              className="card-title fw-bold text-opacity-75 text-capitalize "
            >
              <span className="fw-bold text-primary fs-5">Category:</span>{" "}
              {props.category}
            </h6>
            <hr className="text-primary" />

            <h6 className="card-title text-success fw-bold fs-5">
              <span className="fw-bold fs-5">price:</span> {props.price}$
            </h6>
            <hr className="text-primary" />

            <h6 className="card-title fw-bold text-warning text-capitalize ">
              <span className="fw-bold text-primary fs-5">stock:</span>{" "}
              {props.count}
            </h6>
            <hr className="text-primary" />

            <h6 className="card-title fw-bold  text-capitalize ">
              <span className="fw-bold text-primary fs-6">rating:</span>{" "}
              <span
                style={{
                  width: "fit-content",
                  backgroundClip: "text",
                  backgroundImage: `linear-gradient(to right,#FFC107 ${
                    props.rate * 10
                  }% ,transparent ${props.rate * 10 + 1}% )`,
                  color: "transparent",
                  WebkitTextStroke: "1px #fed867",
                }}
              >
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </h6>
            {props.media !== "single" && (
              <>
                <hr className="text-primary" />{" "}
                <Link
                  to={`/SingleProductPage/${props.id}`}
                  className="text-primary text-decoration-none fw-bold fs-5"
                >
                  More Details ... 🕵️‍♀️
                </Link>
              </>
            )}
            <button
              onClick={handleAddToCart}
              className="btn btn-primary fw-bold shadow-lg mt-2 form-control position-relative"
            >
              Add To Cart <i className="fa-solid fa-cart-plus mx-2 fs-5"></i>
              {product && (
                <span
                  style={{
                    right: "-5px",
                    top: "-5px",
                    padding: "6px",
                    background: "#01497c",
                    border: "2px solid #fff",
                    color: "#fff",
                  }}
                  className="cart-count"
                >
                  {product?.quantity}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
