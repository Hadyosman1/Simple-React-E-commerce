import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef();

  useEffect(() => {
    if (cursorRef?.current) {
      document.addEventListener("mousemove", (event) => {
        cursorRef.current.style.left = `${event.clientX - 10}px`;
        cursorRef.current.style.top = `${event.clientY - 10}px`;
        cursorRef.current.style.display = "block";
      });
      document.addEventListener("mouseleave", (event) => {
        cursorRef.current.style.display = "none";
      });
    }

    return () => {
      document.removeEventListener("mousemove", null);
      document.removeEventListener("mouseleave", null);
    };
  }, [cursorRef]);

  return <div ref={cursorRef} className="cursor-shape"></div>;
}
