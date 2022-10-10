import React from 'react';
import './Board.css';
import { Marker } from "../marker/Marker"

export interface Props {
  board?: any;
  onClick?: any;
}

export function Board({ board, onClick }:Props) {
  return (
    <div className="board">
      {
        board.map((value:any, markIdx:number) => {
          // console.log('inboard',value,markIdx)
          // return <Marker key={`marker${markIdx}`} value={value} onClick={() => value === null && onClick(markIdx)} />;
          return <Marker key={`marker${markIdx}`} value={value} onClick={() =>  onClick(markIdx)} />;
        })
      }
    </div>
  );
}
