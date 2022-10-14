import React, { useState, useEffect } from "react";
import { useNavigate, redirect } from "react-router-dom";

import PlayBtn from "../../assets/btn/PlayBtn";
import PlayPressBtn from "../../assets/btn/PlayPressBtn";
import PVPBtn from "../../assets/btn/PVPBtn";
import PVPPressBtn from "../../assets/btn/PVPPressBtn";
import BotBtn from "../../assets/btn/BotBtn";
import BotPressBtn from "../../assets/btn/BotPressBtn";
import HomeLogo from "../../assets/logo/HomeLogo";
import FaqMini from "../../assets/btn/FaqMini";
import Loading from "../../components/global/loading/Loading";

import "./home.css";

export function Home({ ...props }) {
  //navigate
  const navigate = useNavigate();
  //setBtn
  const [playBtnDisable, setPlayBtnDisable] = useState(false);
  const [playBtnPress, setPlayBtnPress] = useState(false);
  const [pvpBtnDisable, setPvpBtnDisable] = useState(false);
  const [pvpBtnPress, setPvpBtnPress] = useState(false);
  const [botBtnDisable, setBotBtnDisable] = useState(false);
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
    if (mode == "pvp" && !pvpBtnDisable) {
      if (selectedMode == "" || selectedMode == "bot") {
        setSelectedMode("pvp");
      } else {
        setSelectedMode("");
      }
    }
    if (mode == "bot" && !botBtnDisable) {
      if (selectedMode == "" || selectedMode == "pvp") {
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

  const onClickFaqBtn = async () => {
    window.open("https://github.com/DimensionRoom/XoGame/blob/dev/README.md");
  };

  return (
    <>
      <div className="gameMenu">
        <div className="row justifyContentEnd alignItemsBaseline">
          <button
            id="homeBtn"
            name="homeBtn"
            className="btn homeBtn"
            onClick={() => onClickFaqBtn()}
          >
            <FaqMini />
          </button>
        </div>
      </div>
      <div className="appContainer">
        <div className="row justifyContentCenter">
          <div className="item logoContainer">
            <HomeLogo className="mainLogo" />
          </div>
        </div>
        <div className="row justifyContentCenter">
          <div className="item">
            <button
              id="pvpBtn"
              name="pvpBtn"
              className="btn pvpBtn modeBtn"
              onMouseEnter={() => onHoverBtn(setPvpBtnPress(true), "pvpBtn")}
              onMouseLeave={() => onLeaveBtn(setPvpBtnPress(false), "pvpBtn")}
              onClick={() => onClickSelectModeBtn("pvp")}
            >
              {pvpBtnPress && !pvpBtnDisable && selectedMode == "" ? (
                <PVPPressBtn className="pvpBtnImg press" />
              ) : (
                <PVPBtn
                  selected={
                    selectedMode != "" && selectedMode == "pvp" ? true : false
                  }
                  disable={pvpBtnDisable}
                  className="pvpBtnImg"
                />
              )}
            </button>
          </div>
          <div className="item">
            <button
              id="botBtn"
              name="botBtn"
              className="btn botBtn modeBtn"
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
    </>
  );
}
