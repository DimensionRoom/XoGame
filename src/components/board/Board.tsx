import React from 'react';
import './Board.css';
import { Marker } from "../marker/Marker"

export interface Props {
  board?: any;
  winLine?: [];
  onClick?: any;
}

export function Board({ board, winLine, onClick }:Props) {

  return (
    <div className="board" id="board">
      {
        board.map((value:any, markIdx:number) => {
          const winMark = winLine?.some((mark:number) => mark === markIdx)
          return <Marker key={`marker${markIdx}`} winMark={winMark} value={value} onClick={() =>  onClick(markIdx)} />;
        })
      }
    </div>
  );
}
