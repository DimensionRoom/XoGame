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
  const [winLine, setWinLine] = useState<any>([]);
  const [gameOver, setGameOver] = useState(false);
  const [scoreX,setScoreX] = useState(0);
  const [scoreO,setScoreO] = useState(0);

  const handleMarkerClick = (markIdx: number) => {
    if (board[markIdx] === null) {
      board[markIdx] = playerX ? "X" : "O";
      setBoard(board);
      setPlayerX(!playerX);
    }
    checkWinner(board);
  };

  const checkWinner = (board: any) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [a, b, c] = WIN_CONDITIONS[i];
      const allFill = !board.some((mark:number) => mark === null)
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setGameOver(true);
        console.log('win',board[a])
        setWinLine([a, b, c])
        setWinner(board[a])
        if(board[a] === 'X'){
          setScoreX(scoreX+1)
        }
        if(board[a] === 'O'){
          setScoreO(scoreO+1)
        }
      }
      if (allFill) {
        setGameOver(true);
      }
    }
  };

  useEffect(() => {
    // console.log("gameOver", gameOver,"winner is",winner);
  }, [gameOver]);


  const resetBoard = () => {
    setPlayerX(true)
    setGameOver(false);
    setWinLine([]);
    setWinner(null);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="gameContainer">
      <div className="mode row justifyContentCenter alignItemsBaseline">
        <div className="textMode textGap">Game Mode : </div>
        <div className="modeSelect">{gamemode}</div>
      </div>
      <Board
        board={board}
        winLine={winLine}
        onClick={gameOver ? resetBoard : handleMarkerClick}
      />
      {winner?
        <div className="row justifyContentCenter alignItemsBaseline">
          <div className="textWinner textGap">Winner is : </div>
          <div className={winner=='X'?'winnerX markWinner':winner=='O'?'winnerO  markWinner':''}>{winner}</div>
        </div>
      :null
      }
       <div className="justifyContentCenter alignItemsBaseline">
       <div className="textWinner textGap">Score <span className="winnerX">X</span> : {scoreX}</div>
       <div className="textWinner textGap">Score <span className="winnerO">0</span> : {scoreO}</div>
       </div>
    </div>
  );
}
