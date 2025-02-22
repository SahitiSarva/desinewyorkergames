import React, { useState } from "react";
import "../styles/Connections.css";

const wordGroups = [
  { category: "Fruits", words: ["Apple", "Banana", "Cherry", "Grape"] },
  { category: "Animals", words: ["Dog", "Cat", "Elephant", "Lion"] },
  { category: "Colors", words: ["Red", "Blue", "Green", "Yellow"] },
  { category: "Countries", words: ["USA", "Canada", "India", "France"] }
];

const shuffledWords = wordGroups.flatMap(group => group.words).sort(() => Math.random() - 0.5);

const Connections = () => {
  const [selectedWords, setSelectedWords] = useState([]);
  const [foundGroups, setFoundGroups] = useState([]);

  const handleWordClick = (word) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter(w => w !== word));
    } else if (selectedWords.length < 4) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const checkSelection = () => {
    const matchedGroup = wordGroups.find(group =>
      group.words.every(word => selectedWords.includes(word))
    );

    if (matchedGroup) {
      setFoundGroups([...foundGroups, matchedGroup.category]);
      setSelectedWords([]);
    }
  };

  return (
    <div className="connections-container">
      <h2>Connections</h2>
      <div className="connections-grid">
        {shuffledWords.map((word, index) => (
          <button
            key={index}
            className={`connections-word ${selectedWords.includes(word) ? "selected" : ""}`}
            onClick={() => handleWordClick(word)}
          >
            {word}
          </button>
        ))}
      </div>
      <button className="check-button" onClick={checkSelection} disabled={selectedWords.length !== 4}>Check</button>
      <div className="found-groups">
        {foundGroups.map((group, index) => (
          <p key={index}>{group} Found!</p>
        ))}
      </div>
    </div>
  );
};

export default Connections;
