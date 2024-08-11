import { useState, memo, useContext } from "react";
import { Link } from "react-router-dom";
import { cartProductsContext } from "../../state-mangment/CartContext";

import ProductImage from "./ProductImage";

const Card = (props) => {
  const [isDesHide, setIsDesHide] = useState(true);
  const [isTitleHide, setIsTitleHide] = useState(true);

  const { handleAddToCart } = useContext(cartProductsContext);

  const handleDes = () => {
    setIsDesHide(!isDesHide);
  };

  const handleTitle = () => {
    setIsTitleHide(!isTitleHide);
  };

  return (
    <>
      <div
        data-aos={props.animationType}
        className={
          props.media === "single"
            ? `col-12  col-lg-6 my-0 mb-3`
            : `col-12 col-md-6  col-lg-4 col-xl-3 px-2 my-2`
        }
      >
        <div
          style={{ minHeight: "400px" }}
          className="card rounded-3  p-1 shadow"
        >
          <ProductImage media={props.media} image={props.image} />
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
              <span className="fw-bold text-primary fs-6">Category :</span>{" "}
              {props.category}
            </h6>
            <hr className="text-primary" />

            <h6 className="card-title text-success fw-bold fs-5">
              <span className="fw-bold fs-5">price :</span> {props.price}$
            </h6>
            <hr className="text-primary" />

            <h6 className="card-title fw-bold text-warning text-capitalize ">
              <span className="fw-bold text-primary fs-5">stock :</span>{" "}
              {props.rating.count}
            </h6>
            <hr className="text-primary" />

            <h6 className="card-title fw-bold  text-capitalize ">
              <span className="fw-bold text-primary fs-6">rating :</span>{" "}
              <span
                style={{
                  width: "fit-content",
                  backgroundClip: "text",
                  backgroundImage: `linear-gradient(to right,#FFC107 ${
                    props.rating.rate * 10
                  }% ,transparent ${props.rating.rate * 10 + 1}% )`,
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
                  to={`/SingleProductPage/${props._id}`}
                  className="text-primary text-decoration-none fw-bold fs-5"
                >
                  More Details ... 🕵️‍♀️
                </Link>
              </>
            )}
            <button
              onClick={() => handleAddToCart(props)}
              className="btn btn-primary fw-bold shadow-lg mt-2 form-control position-relative"
            >
              Add To Cart <i className="fa-solid fa-cart-plus mx-2 fs-5"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Card);
