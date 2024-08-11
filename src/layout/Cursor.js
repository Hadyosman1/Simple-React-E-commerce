import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef();

  const mouseMoveEvent = (event) => {
    cursorRef.current.style.left = `${event.clientX - 10}px`;
    cursorRef.current.style.top = `${event.clientY - 10}px`;
    cursorRef.current.style.display = "block";
  };

  const mouseLeaveEvent = (event) => {
    cursorRef.current.style.display = "none";
  };

  useEffect(() => {
    if (cursorRef?.current) {
      document.addEventListener("mousemove", mouseMoveEvent);
      document.addEventListener("mouseleave", mouseLeaveEvent);
    }

    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-shape"></div>;
}
