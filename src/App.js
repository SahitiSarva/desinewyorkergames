import React from "react";
import "./App.css"; // Add styling for the main app

const games = [
  { name: "Wordle", link: "https://mywordle.strivemath.com/?word=iijln", logo: "wordle-logo.png" },
  { name: "Strands", link: "https://customstrandsnyt.com/play/Siddhanths30/", logo: "strands-logo.png" },
  { name: "Connections", link: "https://custom-connections-game.vercel.app/msEjSxccAJwB0gmFFpWC", logo: "connections-logo.png" }
];

const App = () => {
  return (
    <div className="app-container">
      <div className="game-selection" style={{ marginTop: "100px" }}>
        <div className="game-boxes" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          margin: "50px auto",
          width: "80%",
        }}>
          {games.map((game, index) => (
            <a key={index} href={game.link} target="_blank" rel="noopener noreferrer" className="game-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "200px",
                height: "200px",
                border: "2px solid #ccc",
                borderRadius: "10px",
                cursor: "pointer",
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#f9f9f9",
                textDecoration: "none",
                color: "black"
              }}>
              <img src={game.logo} alt={game.name} className="game-logo" style={{ width: "100px", height: "100px", marginBottom: "10px" }} />
              <p className="game-name" style={{ fontSize: "18px", fontWeight: "bold" }}>{game.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
