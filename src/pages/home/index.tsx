import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import PlayBtn from "../../assets/btn/PlayBtn";
import PlayPressBtn from "../../assets/btn/PlayPressBtn";
import P2PBtn from "../../assets/btn/P2PBtn";
import P2PPressBtn from "../../assets/btn/P2PPressBtn";
import BotBtn from "../../assets/btn/BotBtn";
import BotPressBtn from "../../assets/btn/BotPressBtn";
import HomeLogo from "../../assets/logo/HomeLogo";

import "./home.css";

export function Home({ ...props }) {
  //navigate
  const navigate = useNavigate();
  //setBtn
  const [playBtnDisable, setPlayBtnDisable] = useState(false);
  const [playBtnPress, setPlayBtnPress] = useState(false);
  const [p2pBtnDisable, setP2pBtnDisable] = useState(false);
  const [p2pBtnPress, setP2pBtnPress] = useState(false);
  const [botBtnDisable, setBotBtnDisable] = useState(true);
  const [botBtnPress, setBotBtnPress] = useState(false);
  //setPlayMode
  const [selectedMode, setSelectedMode] = useState("");

  const onHoverBtn = async (fnc: any, name: string) => {
    //เผื่อไว้ใช้ตอน V.2
  };
  const onLeaveBtn = async (fnc: any, name: string) => {
    //เผื่อไว้ใช้ตอน V.2
  };
  const onClickSelectModeBtn = async (mode: string) => {
    if (mode == "p2p" && !p2pBtnDisable) {
      if (selectedMode == "" || selectedMode == "bot") {
        setSelectedMode("p2p");
      } else {
        setSelectedMode("");
      }
    }
    if (mode == "bot" && !botBtnDisable) {
      if (selectedMode == "" || selectedMode == "p2p") {
        setSelectedMode("bot");
      } else {
        setSelectedMode("");
      }
    }
  };

  const onClickPlayBtn = async () => {
    if (selectedMode == "") return;
    navigate(`/game/${selectedMode}`);
  };

  return (
    <div className="appContainer">
      <div className="row justifyContentCenter">
        <div className="item logoContainer">
          <HomeLogo className="mainLogo" />
        </div>
      </div>
      <div className="row justifyContentCenter">
        <div className="item">
          <button
            id="p2pBtn"
            name="p2pBtn"
            className="btn p2pBtn"
            onMouseEnter={() => onHoverBtn(setP2pBtnPress(true), "p2pBtn")}
            onMouseLeave={() => onLeaveBtn(setP2pBtnPress(false), "p2pBtn")}
            onClick={() => onClickSelectModeBtn("p2p")}
          >
            {p2pBtnPress && !p2pBtnDisable && selectedMode == "" ? (
              <P2PPressBtn className="p2pBtnImg press" />
            ) : (
              <P2PBtn
                selected={
                  selectedMode != "" && selectedMode == "p2p" ? true : false
                }
                disable={p2pBtnDisable}
                className="p2pBtnImg"
              />
            )}
          </button>
        </div>
        <div className="item">
          <button
            id="botBtn"
            name="botBtn"
            className="btn botBtn"
            onMouseEnter={() => onHoverBtn(setBotBtnPress(true), "botBtn")}
            onMouseLeave={() => onLeaveBtn(setBotBtnPress(false), "botBtn")}
            onClick={() => onClickSelectModeBtn("bot")}
          >
            {botBtnPress && !botBtnDisable && selectedMode == "" ? (
              <BotPressBtn className="botBtnImg press" />
            ) : (
              <BotBtn
                selected={
                  selectedMode != "" && selectedMode == "bot" ? true : false
                }
                disable={botBtnDisable}
                className="botBtnImg"
              />
            )}
          </button>
        </div>
      </div>
      <div className="row justifyContentCenter">
        <div className="item">
          <button
            id="playBtn"
            name="playBtn"
            className="btn playBtn"
            onMouseEnter={() => onHoverBtn(setPlayBtnPress(true), "playBtn")}
            onMouseLeave={() => onLeaveBtn(setPlayBtnPress(false), "playBtn")}
            onClick={onClickPlayBtn}
          >
            {playBtnPress && !playBtnDisable && selectedMode != "" ? (
              <PlayPressBtn className="playBtnImg press" />
            ) : (
              <PlayBtn
                disable={playBtnDisable || selectedMode == ""}
                className="playBtnImg"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
