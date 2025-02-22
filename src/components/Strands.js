import React, { useState } from "react";
import "../styles/Strands.css";

const gridSize = 6;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const generateGrid = () => {
  return Array.from({ length: gridSize }, () =>
    Array.from({ length: gridSize }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    )
  );
};

const Strands = () => {
  const [grid] = useState(generateGrid);
  const [selectedCells, setSelectedCells] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (row, col) => {
    setSelectedCells([[row, col]]);
    setIsDragging(true);
  };

  const handleMouseEnter = (row, col) => {
    if (isDragging) {
      setSelectedCells((prev) => [...prev, [row, col]]);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setSelectedCells([]);
  };

  return (
    <div className="strands-container">
      <h2>Strands</h2>
      <div
        className="strands-grid"
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)}
      >
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="strands-row">
            {row.map((letter, colIndex) => (
              <div
                key={colIndex}
                className={`strands-cell ${selectedCells.some(
                  ([r, c]) => r === rowIndex && c === colIndex
                ) ? "selected" : ""}`}
                onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
              >
                {letter}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strands;
