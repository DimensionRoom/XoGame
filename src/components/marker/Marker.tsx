import React from "react";
import "./Marker.css";
import Xmarker from "../../assets/btn/Xmarker";
import Omarker from "../../assets/btn/Omarker";
export interface Props {
  value?: any;
  winMark?: any;
  onClick?: any;
}

export function Marker({ value, winMark , onClick }: Props) {
  return (
    <>
      <button
        className={
          value == 'X'
            ? `X-mark mark ${winMark?'winMark':''}`
            : value == 'O'
            ? `O-mark mark ${winMark?'winMark':''}`
            : `None-mark mark`
        }
        onClick={onClick}
      >
        {value == 'X'?
          <Xmarker/>
        :value == 'O'?
          <Omarker/>
        :null
        }
      </button>
    </>
  );
}
