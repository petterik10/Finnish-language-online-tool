import { useState, useEffect, useRef } from "react";
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const gridRef = useRef(null);
  useEffect(() => {
    const gridComputedStyle = window.getComputedStyle(gridRef.current);
    const gridComptedValue = gridComputedStyle
      .getPropertyValue("grid-template-columns")
      .split(" ").length;
    function handleResize() {
      setWindowSize({
        width: gridComptedValue,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { windowSize, gridRef };
}
