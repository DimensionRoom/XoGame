import React from "react";
import "./Marker.css";
export interface Props {
  value?: any;
  onClick?: any;
}

export function Marker({ value, onClick }: Props) {
  return (
    <>
      <button
        className={
          value == "X"
            ? "X-mark mark"
            : value == "O"
            ? "O-mark mark"
            : "None-mark mark"
        }
        onClick={onClick}
      >
        {value}
      </button>
    </>
  );
}
