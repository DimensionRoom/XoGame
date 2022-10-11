import React from "react";
export interface Props {
    width?: any;
    className?: string;
    disable?:boolean;
    selected?:boolean;
 }

export default ({width,className,disable,selected}:Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 16 16" shapeRendering="crispEdges" width={width} className={className}>
    <path stroke="#75c0fb" d="M3 1h10M2 2h1M13 2h1M1 3h1M14 3h1M1 4h1M14 4h1M1 5h1M14 5h1" />
    <path stroke="#63baff" d="M3 2h10M2 3h4M10 3h4M2 4h3M11 4h3M2 5h3M11 5h3M2 6h3M11 6h3M2 7h3M11 7h3M2 8h3M11 8h3M2 9h3M11 9h3M2 10h3M11 10h3M3 11h2M11 11h2M3 12h3M10 12h3M4 13h8" />
    <path stroke="#73bcf6" d="M1 6h1M14 6h1M1 7h1M14 7h1M1 8h1M14 8h1" />
    <path stroke="#68b7f6" d="M1 9h1M14 9h1M1 10h1M14 10h1M2 11h1M13 11h1" />
    <path stroke="#5ab6ff" d="M1 11h1M14 11h1M2 12h1M13 12h1M3 13h1M12 13h1" />
    <path stroke="#4fb1ff" d="M1 12h1M14 12h1M2 13h1M13 13h1M3 14h3M10 14h3" />
    <path stroke="#4bb0ff" d="M6 14h4" />
    </svg>
  );
};
