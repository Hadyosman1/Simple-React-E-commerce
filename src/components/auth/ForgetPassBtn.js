const ForgetPassBtn = ({ children, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{ fontSize: "14px" }}
      className="fst-italic d-block my-2 text-end text-decoration-none text-primary pointer"
    >
      {children}
    </span>
  );
};

export default ForgetPassBtn;
