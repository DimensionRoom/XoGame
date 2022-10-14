import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Board } from "../../components/board/Board";
import HomeMini from "../../assets/btn/HomeMini";
import ResetMini from "../../assets/btn/ResetMini";
import SoundMini from "../../assets/btn/SoundMini";
import bgSound from "../../assets/sound/EnterSandman8Bit.mp3";

import { useNavigate } from "react-router-dom";

import "./game.css";
import Loading from "../../components/global/loading/Loading";

export function Game({ ...props }) {
  const navigate = useNavigate();
  const { gamemode } = useParams();
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerX, setPlayerX] = React.useState(true);
  const [winner, setWinner] = useState(null);
  const [winLine, setWinLine] = useState<any>([]);
  const [gameOver, setGameOver] = useState(false);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [audio, setAudio] = useState(new Audio(bgSound));
  const [playingMusic, setPlayingMusic] = useState(false);
  const soundBtnRef = useRef<any>(null);
  const [markTemp, setMarkTemp] = useState<any>([]);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [loadingCurrent, setLoadingCurrent] = useState(0);
  const [loadingMax, setLoadingMax] = useState(100);

  const handleMarkerClick = (markIdx: number) => {
    if (board[markIdx] === null) {
      board[markIdx] = playerX ? "X" : "O";
      setBoard(board);
      setPlayerX(!playerX);
    }
    checkWinner(board);
  };

  const botLogic = () => {
    const playerMark = [];
    let unMark = [];
    for (let index = 0; index < board.length; index++) {
      if (board[index]) {
        playerMark.push(index);
      } else {
        unMark.push(index);
      }
    }
    let botMark = Math.floor(Math.random() * unMark.length);
    console.log(unMark[botMark], playerMark, unMark, "botMark");
    handleMarkerClick(unMark[botMark]);
  };

  const toggleMusic = () => {
    if (!playingMusic) {
      setPlayingMusic(true);
      audio.loop = true;
      audio.play();
    } else {
      setPlayingMusic(false);
      audio.loop = false;
      audio.pause();
    }
  };

  const checkWinner = (board: any) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [a, b, c] = WIN_CONDITIONS[i];
      const allFill = !board.some((mark: number) => mark === null);
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setGameOver(true);
        console.log("win", board[a]);
        setWinLine([a, b, c]);
        setWinner(board[a]);
        if (board[a] === "X") {
          setScoreX(scoreX + 1);
        }
        if (board[a] === "O") {
          setScoreO(scoreO + 1);
        }
      }
      if (allFill) {
        setGameOver(true);
      }
    }
  };

  const resetBoard = () => {
    setPlayerX(true);
    setGameOver(false);
    setWinLine([]);
    setWinner(null);
    setBoard(Array(9).fill(null));
  };

  const onClickResetBtn = async () => {
    resetBoard();
    setScoreX(0);
    setScoreO(0);
  };

  const onClickHomeBtn = async () => {
    setPlayingMusic(false);
    audio.pause();
    navigate(`/`);
  };

  useEffect(() => {
    // console.log("gameOver", gameOver,"winner is",winner);
  }, [gameOver]);

  useEffect(() => {
    if (gamemode !== "bot") return;
    if (!playerX) {
      botLogic();
    } else {
    }
  }, [playerX]);

  // useEffect(() => {
  //   // Auto Play Bg Music แต่ติด Permission Google ห้ามเปิดเพลงตอนเข้า
  //   soundBtnRef.current.click()
  // }, []);

  useEffect(() => {
    if (loadingCurrent != loadingMax && loadingStatus) {
      setTimeout(() => setLoadingCurrent(loadingCurrent + 25), 500);
    } else {
      setTimeout(() => setLoadingStatus(false), 500);    
    }
  }, [loadingCurrent]);

  return (
    <>
      {loadingStatus ? (
        <Loading loadCurrent={loadingCurrent} loadMax={loadingMax} />
      ) : (
        <>
          <div className="gameMenu">
            <div className="row justifyContentEnd alignItemsBaseline">
              <button
                id="resetBtn"
                name="resetBtn"
                className="btn resetBtn"
                onClick={() => onClickResetBtn()}
              >
                <ResetMini />
              </button>
              <button
                id="soundBtn"
                name="soundBtn"
                className="btn soundBtn"
                ref={soundBtnRef}
                onClick={() => toggleMusic()}
              >
                <SoundMini active={playingMusic} />
              </button>
              <button
                id="homeBtn"
                name="homeBtn"
                className="btn homeBtn"
                onClick={() => onClickHomeBtn()}
              >
                <HomeMini />
              </button>
            </div>
          </div>
          <div className="gameContainer">
            <div className="gameHeader row justifyContentCenter alignItemsBaseline">
              <div className="textMode textGap">Game Mode : </div>
              <div className="modeSelect">{gamemode}</div>
            </div>
            <div className="gameBoard row justifyContentEvenly alignItemsCenter">
              <div className="textScore">
                Score <span className="winnerX">X</span> : {scoreX}
              </div>
              <Board
                board={board}
                winLine={winLine}
                onClick={gameOver ? resetBoard : handleMarkerClick}
              />
              <div className="textScore">
                Score <span className="winnerO">0</span> : {scoreO}
              </div>
            </div>

            <div className="gameFooter row justifyContentCenter alignItemsBaseline">
              {winner ? (
                <>
                  <div className="textWinner textGap">Winner is : </div>
                  <div
                    className={
                      winner == "X"
                        ? "winnerX markWinner"
                        : winner == "O"
                        ? "winnerO  markWinner"
                        : ""
                    }
                  >
                    {winner}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </>
      )}
    </>
  );
}
