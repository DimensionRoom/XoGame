import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Board } from "../../components/board/Board";

import "./game.css";

export function Game({ ...props }) {
  const { gamemode } = useParams();
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerX, setPlayerX] = React.useState(true);
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const handleMarkerClick = (markIdx: number) => {
    if (board[markIdx] === null) {
      board[markIdx] = playerX ? "X" : "O";
      setBoard(board);
      setPlayerX(!playerX);
    }
    checkWinner(board);
    console.log("markIdx", markIdx, !playerX, board);
  };

  const checkWinner = (board: any) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [a, b, c] = WIN_CONDITIONS[i];
      const allFill = !board.some((mark:any) => mark === null)
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setGameOver(true);
        console.log('win',board[a])
        setWinner(board[a])
      }
      if (allFill) {
        setGameOver(true);
        console.log('DD',allFill)
      }
    }
  };

  useEffect(() => {
    console.log("gameOver", gameOver,"winner is",winner);
  }, [gameOver]);


  const resetBoard = () => {
    setGameOver(false);
    setWinner(null)
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="gameContainer">
      <div style={{ color: "red" }}>Game Mode "{gamemode}"</div>
      <Board
        board={board}
        onClick={gameOver ? resetBoard : handleMarkerClick}
      />
      {winner?
       <div style={{ color: "red" }}>Winner is "{winner}"</div>
      :null
      }
    </div>
  );
}
