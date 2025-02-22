import React, { useState, useEffect } from "react";
import "../styles/Wordle.css"; // Add styling for Wordle

const WORDS = ["MUSIC", "CHILD", "LOVER", "SMOKE", "TABLE"]; // Example word list
const MAX_ATTEMPTS = 6;

const getRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)];

const Wordle = () => {
  const [solution, setSolution] = useState(getRandomWord);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (guesses.includes(solution)) {
      setGameOver(true);
    } else if (guesses.length >= MAX_ATTEMPTS) {
      setGameOver(true);
    }
  }, [guesses]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameOver) return;
      const key = event.key.toUpperCase();
      if (key === "ENTER" && currentGuess.length === 5) {
        setGuesses([...guesses, currentGuess.toUpperCase()]);
        setCurrentGuess("");
      } else if (key === "BACKSPACE") {
        setCurrentGuess(currentGuess.slice(0, -1));
      } else if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess(currentGuess + key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentGuess, gameOver]);

  const getTileColor = (letter, index, word) => {
    if (word[index] === letter) return "green";
    if (word.includes(letter)) return "yellow";
    return "gray";
  };

  return (
    <div className="wordle-container">
      {guesses.map((word, i) => (
        <div key={i} className="word-row">
          {word.split("").map((letter, j) => (
            <span key={j} className={`tile ${getTileColor(letter, j, solution)}`}>
              {letter}
            </span>
          ))}
        </div>
      ))}
      {!gameOver && (
        <div className="word-row">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="tile active">
              {currentGuess[i] || ""}
            </span>
          ))}
        </div>
      )}
      {gameOver && <p className="message">Solution: {solution}</p>}
    </div>
  );
};

export default Wordle;
