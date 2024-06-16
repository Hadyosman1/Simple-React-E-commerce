import { useContext } from "react";
import { lightBoxModalContext } from "../state-mangment/LightBoxModalContext";

const LightBoxModal = () => {
  const { lightBox, setLightBox } = useContext(lightBoxModalContext);
  return (
    <div
      onClick={() =>
        setLightBox((prev) => ({ ...prev, isVisible: false, content: <></> }))
      }
      style={{
        padding: "50px 0",
        overflowY: "auto",
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
        translate: `0 ${lightBox.isVisible ? "0" : "-100%"}`,
        opacity: `${lightBox.isVisible ? "1" : "0"}`,
        visibility: `${lightBox.isVisible ? "visible" : "hidden"}`,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="position-relative"
        style={{ width: "400px", maxWidth: "97svw", minWidth: "300px" }}
      >
        <div className="d-flex">
          <button
            onClick={() =>
              setLightBox((prev) => ({
                ...prev,
                isVisible: false,
                content: <></>,
              }))
            }
            className="btn p-0 mb-1 ms-auto"
          >
            <i className="fa-solid text-light fs-3 fa-xmark"></i>
          </button>
        </div>
        {lightBox.content}
      </div>
    </div>
  );
};

export default LightBoxModal;
