const NotFoundPage = () => {
  return (
    <div className="container ">
      <div className="row">
        <h1 className="text-primary my-5 text-center">
          404
          <strong className="fs-1" style={{ verticalAlign: "bottom" }}>
            {" "}
            |{" "}
          </strong>
          Page Not Found
        </h1>
      </div>
      <div className="row">
        <img
          style={{ maxWidth: "100%", objectFit: "contain",aspectRatio:"21/9" }}
          src="./assets/404.jpg"
          alt="not found"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
