import React, { useState } from "react";
import TicTacToe from "./Components/TicTacToe.jsx";
import PlayAi from "./Components/PlayAi.jsx";
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState("menu"); // Tracks the current page

  return (
    <div className="app-container">
      {currentPage === "menu" && (
        <>
          <h1 className="title">Tic Tac Toe Game</h1>
          <div className="game-mode-container">
            <h2 className="game-mode">Game Mode</h2>
            <button className="mode-button" onClick={() => setCurrentPage("playWithFriend")}>
              Play With Friend
            </button>
            <button className="mode-button" onClick={() => setCurrentPage("playWithAI")}>
              Play With Bot
            </button>
          </div>
        </>
      )}

      {currentPage === "playWithFriend" && <TicTacToe />}
      {currentPage === "playWithAI" && <PlayAi />}
    </div>
  );
}

export default App;
