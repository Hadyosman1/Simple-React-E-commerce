const ProductImage = ({ media, image }) => {
  return (
    <div
      style={{
        height: media === "single" ? `50vh` : "250px",
        borderRadius: "8px",
        overflow: "hidden",
      }}
      className={`d-flex justify-content-center align-items-center ${
        media !== "single" && "img-overlay"
      }`}
    >
      <img
        loading={"lazy"}
        src={image}
        className="zoom-in-img"
        style={{
          background: "#fff",
          objectFit: "contain",
          maxWidth: "100%",
          maxHeight: "100%",
          borderRadius: "10px",
        }}
        alt="product"
      />
    </div>
  );
};

export default ProductImage;
