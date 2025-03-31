import React, { useState, useRef } from "react";
import "./TicTacToe.css";
import cross from "../Assets/cross.png";
import circle from "../Assets/circle.png";
let data = ["", "", "", "", "", "", "", "", ""];


const TicTacToe = () => {
let [count, setCount] = useState(0);
let [lock, setLock] = useState(false);
let tittleRef = useRef(null);

const toggle = (e,num) => {
  if (lock) {
    return 0;
  }
  if (count%2===0) {
    e.target.innerHTML = `<img src='${cross}'>`;
    data[num]="x";
    setCount(++count);
  }
  else {
    e.target.innerHTML = `<img src='${circle}'>`;
    data[num] ="o";
    setCount(++count);
  }
  checkWin();
}

const checkWin = () => {
  if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
    won(data[0]);
  }
  else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
    won(data[5]);
  }
  else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
    won(data[8]);
  }
  else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
    won(data[6]);
  }
  else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
    won(data[7]);
  }
  else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
    won(data[8]);
  }
  else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
    won(data[8]);
  }
  else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
    won(data[6]);
  }
}

const won = (winner) => {
  setLock(true);
  tittleRef.current.classList.add("no-margin");
  if (winner==="x") {
    tittleRef.current.innerHTML = `<div>Winner Winner Chicken Dinner</div><img src='${cross}'> <div>Won</div>`;
  }
  else {
    tittleRef.current.innerHTML = `<div>Winner Winner Chicken Dinner</div><img src='${circle}'> <div>Won</div>`;
  }
}

const resetGame = () => {
  data = ["", "", "", "", "", "", "", "", ""];
  setCount(0);
  setLock(false);
  tittleRef.current.classList.remove("no-margin");
  tittleRef.current.innerHTML = "Tic Tac Toe";
  document.querySelectorAll('.boxs').forEach(box => box.innerHTML = "");
}

  return (
    <div className= 'container'>
      <div className="back" onClick={() => window.location.reload()}>Back</div>
      <div className="title" ref={tittleRef} >Tic Tac Toe</div>
      <div className="board">
        <div className="row1">
          <div className="boxs" onClick={(e)=>{toggle(e,0)}}></div>
          <div className="boxs" onClick={(e)=>{toggle(e,1)}}></div>
          <div className="boxs" onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className="row2">
          <div className="boxs" onClick={(e)=>{toggle(e,3)}}></div>
          <div className="boxs" onClick={(e)=>{toggle(e,4)}}></div>
          <div className="boxs" onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className="row3">
          <div className="boxs" onClick={(e)=>{toggle(e,6)}}></div>
          <div className="boxs" onClick={(e)=>{toggle(e,7)}}></div>
          <div className="boxs" onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>

      <button className="reset" onClick={resetGame}>Reset</button>
    </div>
  );
}
export default TicTacToe;