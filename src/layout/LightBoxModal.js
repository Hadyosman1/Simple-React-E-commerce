import { useContext } from "react";
import { lightBoxModalContext } from "../state-mangment/LightBoxModalContext";

const LightBoxModal = ({ children }) => {
  const { isLightBoxVisible, setIsLightBoxVisible } =
    useContext(lightBoxModalContext);
  return (
    <div
      style={{
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        position: "fixed",
        display: "grid",
        placeItems: "center",
        backgroundColor: "rgba(0 ,0 ,0 , 0.633 )",
        zIndex: "9997",
        transition: "all .4s linear",
        translate: `0 ${isLightBoxVisible ? "0" : "-100%"}`,
        opacity: `${isLightBoxVisible ? "1" : "0"}`,
        visibility: `${isLightBoxVisible ? "visible" : "hidden"}`,
      }}
      className=""
    >
      <div
        className="position-relative"
        style={{ width: "400px", maxWidth: "97svw", minWidth: "300px" }}
      >
        <div className="d-flex">
          <button
            onClick={() => setIsLightBoxVisible(false)}
            className="btn p-0 mb-1 ms-auto"
          >
            <i className="fa-solid text-light fs-3 fa-xmark"></i>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default LightBoxModal;
