import React from "react";
import "./Loading.css";
import LoadBarSword from "../../../assets/btn/LoadBarSword";

export interface Props {
  loadCurrent:number;
  loadMax:number;
}

export default ({loadCurrent,loadMax}:Props) => {
  return (
    <>
      <div className="loadingContainer">
        <div className="row justifyContentCenter">
          <div className="item barContainer">
            <LoadBarSword className="loadingBar" current={loadCurrent} max={loadMax}/>
          </div>
        </div>
      </div>
    </>
  );
}
