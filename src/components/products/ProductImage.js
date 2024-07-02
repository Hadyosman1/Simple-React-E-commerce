const ProductImage = ({ props }) => {
  return (
    <div
      style={{
        textAlign: "center",
        height: props.media === "single" ? `50vh` : "250px",
        borderRadius: "8px",
      }}
      className={`overflow-hidden ${props.media !== "single" && "img-overlay"}`}
    >
      <img
        loading={"lazy"}
        src={props.image}
        className="zoom-in-img"
        style={{
          background: "#eee",
          height: "100%",
          objectFit: "contain",
          borderRadius: "8px",
        }}
        alt="product"
      />
    </div>
  );
};

export default ProductImage;
