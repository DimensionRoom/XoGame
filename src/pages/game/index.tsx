import React from 'react';
import { useParams } from 'react-router-dom';

import "./game.css";

export function Game ({ ...props }) {
  const { gamemode } = useParams();
  return (
    <div className='gameContainer'>
      <div style={{color:'red'}}>Game Mode "{gamemode}"</div>
    </div>
  );
}
