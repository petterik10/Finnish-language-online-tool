import Column from "./Column";
import { useState, useEffect, useRef } from "react";
import useWindowSize from "../hooks.js/windowHook";

function App() {
  const [grid, setGrid] = useState([...Array(71).keys()]);
  const [currentColumn, setCurrentColumn] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(0);
  const gridRef = useRef(null);

  const randomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  const nextColumn = (key) => {
    switch (key) {
      case 37:
        setCurrentColumn((prevValue) => prevValue - 1);
        break;
      case 38:
        setCurrentColumn((prevValue) => prevValue - currentWidth);
        break;
      case 39:
        setCurrentColumn((prevValue) => prevValue + 1);
        break;
      case 40:
        setCurrentColumn((prevValue) => prevValue + currentWidth);
        break;
      default:
        setCurrentColumn((prevValue) => prevValue);
    }
  };

  const handleKeyDown = (event) => {
    nextColumn(event.keyCode);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleResize = () => {
    const gridComputedStyle = window.getComputedStyle(gridRef.current);
    const gridComptedValue = gridComputedStyle
      .getPropertyValue("grid-template-columns")
      .split(" ").length;
    setCurrentWidth(gridComptedValue);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    const number = randomNumber();
    setCurrentColumn(number);
    const innerNumber = Math.floor(window.innerWidth / 4)
    setGrid([...Array(288).keys()]);
    handleResize();
  }, []);

  return (
    <div>
      <div className="container" ref={gridRef}>
        {grid.map((elem) => {
          return (
            <Column currentColumn={currentColumn} key={elem} elem={elem} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
