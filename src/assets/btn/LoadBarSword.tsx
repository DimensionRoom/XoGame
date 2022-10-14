import React from "react";
export interface Props {
    width?: any;
    className?: string;
    current:number;
    max:number;

 }

export default ({width,className,current,max}:Props) => {
  const fullBar = 20;
  const currentVal = current;
  const maxVal = max;
  const percent = (currentVal/maxVal)*100;
  const barFill = (fullBar*percent)/100;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 31 12" shapeRendering="crispEdges" width={width} className={className}>
    <path stroke="#ffe05d" d="M8 0h1M8 1h1M7 2h1M6 3h1" />
    <path stroke="#fbd436" d="M8 2h1M7 3h2M1 4h1M6 4h3M6 5h1M7 7h2M7 8h2M8 9h1" />
    <path stroke="#5b5b5b" d="M9 3h20" />
    <path stroke="#414141" d="M9 4h21M29 5h2" />
    <path stroke="#c24255" d="M0 5h1" />
    <path stroke="#d4af18" d="M1 5h1M1 6h1" />
    <path stroke="#272727" d="M2 5h4M29 6h2M9 7h21" />
    <path stroke="#ee435d" d="M7 5h1" />
    <path stroke="#d82842" d="M8 5h1" />
    <path stroke="#9fa09e" d="M9 5h20" />
    <path stroke="#ac3244" d="M0 6h1" />
    <path stroke="#1a1a1a" d="M2 6h4" />
    <path stroke="#eec728" d="M6 6h1M6 7h1M7 9h1M8 10h1M8 11h1" />
    <path stroke="#c22940" d="M7 6h1" />
    <path stroke="#a91f34" d="M8 6h1" />
    <path stroke="#8f8f8f" d="M9 6h20" />
    <path stroke="#ba9912" d="M1 7h1" />
    <path stroke="#dcb928" d="M6 8h1" />
    <path stroke="#232222" d="M9 8h20" />

    <rect fill="#c3f692" x={9} y={4.5} width={barFill} height={1}/>
    <rect fill="#99e550" x={9} y={5.5} width={barFill} height={1}/>

    </svg>
  );
};
