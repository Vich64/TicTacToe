import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TicTacToe from "./Components/TicTacToe.jsx";
import PlayAi from "./Components/PlayAi.jsx";
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="home">
                <h1 className="title">Tic Tac Toe Game</h1>
                <div className="game-mode-container">
                  <h2 className="game-mode">Game Mode</h2>
                  <Link to="/playWithFriend">
                    <button className="mode-button">Play With Friend</button>
                  </Link>
                  <Link to="/playWithAI">
                    <button className="mode-button">Play With Bot</button>
                  </Link>
                </div>
              </div>
            }
          />
          {/* Play With Friend */}
          <Route path="/playWithFriend" element={<TicTacToe />} />
          {/* Play With AI */}
          <Route path="/playWithAI" element={<PlayAi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
