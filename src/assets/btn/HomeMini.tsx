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
    <path stroke="#a9a9a9" d="M2 0h12M1 1h1M14 1h1M0 2h1M6 2h4M15 2h1M0 3h1M5 3h6M15 3h1M0 4h1M4 4h8M15 4h1M0 5h1M3 5h10M15 5h1M0 6h1M2 6h12M15 6h1M0 7h1M2 7h12M15 7h1M0 8h1M3 8h10M15 8h1M0 9h1M3 9h4M9 9h4M15 9h1M0 10h1M3 10h4M9 10h4M15 10h1M0 11h1M3 11h4M9 11h4M15 11h1M0 12h1M3 12h4M9 12h4M15 12h1M0 13h1M3 13h4M9 13h4M15 13h1M1 14h1M14 14h1M2 15h12" />
    <path stroke="#686868" d="M2 1h12M1 2h5M10 2h5M1 3h4M11 3h4M1 4h3M12 4h3M1 5h2M13 5h2M1 6h1M14 6h1M1 7h1M14 7h1M1 8h2M13 8h2M1 9h2M7 9h2M13 9h2M1 10h2M7 10h2M13 10h2M1 11h2M7 11h2M13 11h2M1 12h2M7 12h2M13 12h2M1 13h2M7 13h2M13 13h2M2 14h12" />
    </svg>
  );
};
