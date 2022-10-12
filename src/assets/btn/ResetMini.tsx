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
    <path stroke="#a9a9a9" d="M2 0h12M1 1h1M14 1h1M0 2h1M6 2h5M15 2h1M0 3h1M4 3h8M13 3h1M15 3h1M0 4h1M3 4h11M15 4h1M0 5h1M3 5h3M11 5h3M15 5h1M0 6h1M2 6h3M10 6h4M15 6h1M0 7h1M2 7h3M15 7h1M0 8h1M2 8h3M15 8h1M0 9h1M2 9h3M13 9h1M15 9h1M0 10h1M3 10h3M11 10h3M15 10h1M0 11h1M3 11h11M15 11h1M0 12h1M4 12h9M15 12h1M0 13h1M6 13h5M15 13h1M1 14h1M14 14h1M2 15h12" />
    <path stroke="#686868" d="M2 1h12M1 2h5M11 2h4M1 3h3M12 3h1M14 3h1M1 4h2M14 4h1M1 5h2M6 5h5M14 5h1M1 6h1M5 6h5M14 6h1M1 7h1M5 7h10M1 8h1M5 8h10M1 9h1M5 9h8M14 9h1M1 10h2M6 10h5M14 10h1M1 11h2M14 11h1M1 12h3M13 12h2M1 13h5M11 13h4M2 14h12" />
    </svg>
  );
};
