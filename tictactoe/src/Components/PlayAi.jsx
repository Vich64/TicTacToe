import React, { useState, useRef } from "react";
import "./TicTacToe.css";
import cross from "../Assets/cross.png";
import circle from "../Assets/circle.png";
let data = ["", "", "", "", "", "", "", "", ""];

const PlayAi = () => {
  let [lock, setLock] = useState(false);
  let tittleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return; // Prevent moves if the game is locked or the cell is already filled
    }

    // Player's move (Cross)
    e.target.innerHTML = `<img src='${cross}'>`;
    data[num] = "x";

    checkWin(); // Check if the player wins

    if (!lock) {
      botMove(); // Let the bot make its move if the game is not over
    }
  };

  const botMove = () => {
    if (lock) {
      return; // Stop the bot from making a move if the game is locked
    }

    // Find all empty cells
    const emptyCells = data
      .map((value, index) => (value === "" ? index : null))
      .filter((index) => index !== null);

    if (emptyCells.length === 0) {
      return; // No moves left
    }

    // Add a 1-second delay before the bot makes its move
    setTimeout(() => {
      if (lock) {
        return; // Double-check if the game is locked before placing the move
      }

      // Choose a random empty cell
      const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      data[randomIndex] = "o";

      // Update the board visually
      const boxes = document.querySelectorAll(".boxs");
      boxes[randomIndex].innerHTML = `<img src='${circle}'>`;

      checkWin();
    }, 300);
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
      won(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
      won(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
      won(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") {
      won(data[0]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[1] !== "") {
      won(data[1]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[2] !== "") {
      won(data[2]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[0] !== "") {
      won(data[0]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
      won(data[2]);
    } else if (!data.includes("")) {
      tittleRef.current.innerHTML = "It's a Draw!";
      setLock(true);
    }
  };

  const won = (winner) => {
    setLock(true); // Lock the game to prevent further moves
    if (winner === "x") {
      tittleRef.current.innerHTML = `<div>Winner Winner Chicken Dinner</div><img src='${cross}'> <div>Won</div>`;
    } else {
      tittleRef.current.innerHTML = `<div>Winner Winner Chicken Dinner</div><img src='${circle}'> <div>Won</div>`;
    }
  };

  const resetGame = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    setLock(false);
    tittleRef.current.innerHTML = "Tic Tac Toe";
    document.querySelectorAll(".boxs").forEach((box) => (box.innerHTML = ""));
  };

  return (
    <div className="container">
      <div className="back" onClick={() => window.location.reload()}>
        Back
      </div>
      <div className="title" ref={tittleRef}>
        Tic Tac Toe
      </div>
      <div className="board">
        <div className="row1">
          <div className="boxs" onClick={(e) => toggle(e, 0)}></div>
          <div className="boxs" onClick={(e) => toggle(e, 1)}></div>
          <div className="boxs" onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxs" onClick={(e) => toggle(e, 3)}></div>
          <div className="boxs" onClick={(e) => toggle(e, 4)}></div>
          <div className="boxs" onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxs" onClick={(e) => toggle(e, 6)}></div>
          <div className="boxs" onClick={(e) => toggle(e, 7)}></div>
          <div className="boxs" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>

      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default PlayAi;