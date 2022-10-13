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
    <path stroke="#a9a9a9" d="M2 0h12M1 1h1M14 1h1M0 2h1M6 2h4M15 2h1M0 3h1M5 3h6M15 3h1M0 4h1M4 4h3M9 4h3M15 4h1M0 5h1M4 5h2M10 5h2M15 5h1M0 6h1M10 6h2M15 6h1M0 7h1M9 7h3M15 7h1M0 8h1M8 8h3M15 8h1M0 9h1M7 9h3M15 9h1M0 10h1M7 10h2M15 10h1M0 11h1M15 11h1M0 12h1M7 12h2M15 12h1M0 13h1M7 13h2M15 13h1M1 14h1M14 14h1M2 15h12" />
    <path stroke="#686868" d="M2 1h12M1 2h5M10 2h5M1 3h4M11 3h4M1 4h3M7 4h2M12 4h3M1 5h3M6 5h4M12 5h3M1 6h9M12 6h3M1 7h8M12 7h3M1 8h7M11 8h4M1 9h6M10 9h5M1 10h6M9 10h6M1 11h14M1 12h6M9 12h6M1 13h6M9 13h6M2 14h12" />
    </svg>
  );
};
