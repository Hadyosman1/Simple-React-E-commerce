const ProductImage = ({props}) => {
  return  <div
  className={`overflow-hidden ${
    props.media !== "single" && "img-overlay"
  }`}
>
  <img
    loading={"lazy"}
    src={props.image}
    className="zoom-in-img"
    style={{
      width: "100%",
      height: props.media === "single" ? `50vh` : "200px",
      objectFit: "contain",
    }}
    alt="product"
  />
</div>;
};

export default ProductImage;
