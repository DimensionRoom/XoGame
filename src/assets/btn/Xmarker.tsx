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
    <path stroke="#e94f6e" d="M1 1h3M12 1h3M4 2h1M11 2h1M5 3h1M10 3h1M5 8h1M10 8h1M4 9h1M11 9h1M3 10h1M12 10h1M2 11h1M13 11h1M1 12h1M14 12h1" />
    <path stroke="#e12c50" d="M1 2h3M12 2h3M2 3h3M11 3h3M3 4h3M10 4h3M4 5h3M9 5h3M5 6h6M6 7h4M6 8h4M5 9h2M9 9h2M4 10h2M10 10h2M3 11h2M11 11h2M2 12h2M12 12h2M1 13h2M13 13h2M1 14h1M14 14h1" />
    <path stroke="#d42145" d="M1 3h1M14 3h1M2 4h1M13 4h1M3 5h1M12 5h1M4 6h1M11 6h1M5 7h1M10 7h1M7 9h2M6 10h1M9 10h1M5 11h1M10 11h1M4 12h1M11 12h1M3 13h1M12 13h1M2 14h1M13 14h1" />
    <path stroke="#e93e60" d="M6 4h1M9 4h1M7 5h2" />
    <path stroke="#d4183e" d="M7 10h2M6 11h1M9 11h1M5 12h1M10 12h1M4 13h1M11 13h1M3 14h1M12 14h1" />
    </svg>
  );
};
