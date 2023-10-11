"use client"; // This is a client component 👈🏽
import { useState } from "react";

const generateBoard = (size) => {
  const newBoard = [];
  for (let i = 0; i < size; i++) {
    newBoard.push([...Array(size)]);
  }
  return newBoard;
};

// const checkForWin = (board) => {
//   // horizantal
//   for(let row of board){
//     const rowSet=new Set(row)
//   }
//   // vertical
//   // diagnol
// };

function Tictoctoe() {
  const [board, setBoard] = useState(generateBoard(4));
  const [currPlayer, setCurrPlayer] = useState("x");

  const handleClick = (row, col) => {
    board[row][col] = currPlayer;
    setBoard([...board]);
    // if (checkForWin(board)) {
    //   console.log(currPlayer + "wins");
    // }
    setCurrPlayer(currPlayer == "x" ? "0" : "x");
  };

  return (
    <div>
      {board.map((row, r) => {
        return (
          <div key={r} style={{ display: "flex" }}>
            {row.map((cell, c) => {
              return (
                <div
                  key={c}
                  onClick={() => handleClick(r, c)}
                  style={{
                    border: "solid white 1px",
                    height: "50px",
                    width: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {cell}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Tictoctoe;
