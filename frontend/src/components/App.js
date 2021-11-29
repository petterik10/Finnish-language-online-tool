import Column from "./Column";
import { useState, useEffect } from "react";
function App() {
  const [grid, setGrid] = useState([...Array(750).keys()]);
  const [currentColumn, setCurrentColumn] = useState(0);

  const randomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  const nextColumn = (key) => {
    switch (key) {
      case 37:
        setCurrentColumn((prevValue) => prevValue - 1);
        break;
      case 38:
        setCurrentColumn((prevValue) => prevValue - 25);
        break;
      case 39:
        setCurrentColumn((prevValue) => prevValue + 1);
        break;
      case 40:
        setCurrentColumn((prevValue) => prevValue + 25);
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

  useEffect(() => {
    const number = randomNumber();
    setCurrentColumn(number);
  }, []);

  return (
    <div className="container">
      {grid.map((elem) => {
        return <Column currentColumn={currentColumn} key={elem} elem={elem} />;
      })}
    </div>
  );
}

export default App;
