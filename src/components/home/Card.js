import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const [isDesHide, setIsDesHide] = useState(true);
  const [isTitleHide, setIsTitleHide] = useState(true);

  const handleDes = () => {
    setIsDesHide(!isDesHide);
  };
  const handleTitle = () => {
    setIsTitleHide(!isTitleHide);
  };

  return (
    <div
      className={
        props.media === "single"
          ? `col-12  col-lg-6 my-0 mb-3`
          : `col-12 col-sm-6  col-md-4 col-lg-3 px-3 my-2`
      }
    >
      <div
        style={{ minHeight: "400px" }}
        className="card rounded-3  p-1 shadow"
      >
        <div className="overflow-hidden">
          <img
            src={props.image}
            className="zoom-in-img"
            style={{
              width:"100%",
              height: props.media === "single" ? `50vh` : "200px",
              objectFit: "contain",
            }}
            alt="product"
          />
        </div>
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
            className={` mb-0  ${
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

          <h6 className="card-title fw-bold text-primary text-opacity-75 text-capitalize ">
            <span className="fw-bold text-primary fs-5">Category:</span>{" "}
            {props.category}
          </h6>
          <hr className="text-primary" />

          <h6 className="card-title fw-bold text-warning text-capitalize ">
            <span className="fw-bold text-primary fs-5">rate:</span>{" "}
            {props.rate} ⭐
          </h6>
          <hr className="text-primary" />

          <h6 className="card-title text-success fw-bold fs-4">
            <span className="fw-bold fs-4">price:</span> {props.price}$
          </h6>

          {props.media !== "single" ? (
            <>
              <hr className="text-primary" />{" "}
              <Link
                to={`/SingleProductPage/${props.id}`}
                className="btn btn-primary"
              >
                More Details ... 🕵️‍♀️
              </Link>
            </>
          ) : (
            <button className="btn btn-primary  fw-bold shadow mt-2 form-control ">
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
