import { useEffect, useRef } from "react";

export default function BtnScrollToTop() {
  const btnRef = useRef();
  useEffect(() => {
    btnRef.current.style.scale = "0";
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        btnRef.current.style.scale = "1";
      } else {
        btnRef.current.style.scale = "0";
      }
    });
  }, []);

  return (
    <div
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      ref={btnRef}
      className="btn-to-top"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </div>
  );
}
