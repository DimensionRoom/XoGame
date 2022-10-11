import React from "react";
export interface Props {
    width?: any;
    className?: string;
    disable?:boolean;
    selected?:boolean;
 }

export default ({width,className,disable,selected}:Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 34 18" shapeRendering="crispEdges" width={width} className={className}>
    <path stroke={disable?"#3a3a3a":selected?"#ffffff":"#369fb6"} d="M2 0h30M1 1h2M31 1h2M0 2h2M32 2h2M0 3h1M33 3h1M0 4h1M33 4h1M0 5h1M33 5h1M0 6h1M33 6h1M0 7h1M33 7h1M0 8h1M33 8h1M0 9h1M33 9h1M0 10h1M33 10h1M0 11h1M33 11h1M0 12h1M33 12h1" />
    <path stroke={disable?"#c2c2c2":selected?"#137d93":"#5fcde4"} d="M3 1h28M2 2h30M1 3h3M11 3h2M16 3h2M21 3h1M29 3h4M1 4h3M12 4h1M16 4h2M21 4h1M30 4h3M1 5h3M12 5h1M16 5h2M21 5h1M30 5h3M1 6h3M7 6h2M12 6h1M16 6h2M21 6h1M25 6h2M30 6h3M1 7h3M12 7h1M16 7h2M21 7h1M30 7h3M1 8h3M11 8h2M16 8h2M21 8h1M29 8h4M1 9h3M11 9h2M16 9h2M21 9h1M29 9h4M1 10h3M7 10h6M16 10h2M21 10h1M25 10h8M1 11h3M7 11h6M21 11h1M25 11h8M1 12h3M7 12h7M20 12h2M25 12h8M1 13h3M7 13h8M19 13h3M25 13h8M2 14h30M3 15h28" />
    <path stroke={disable?"#7a7a7a":"#ffffff"} d="M4 3h7M13 3h3M18 3h3M22 3h7M4 4h8M13 4h3M18 4h3M22 4h8M4 5h3M9 5h3M13 5h3M18 5h3M22 5h3M27 5h3M4 6h3M9 6h3M13 6h3M18 6h3M22 6h3M27 6h3M4 7h7M13 7h3M18 7h3M22 7h7M4 8h7M13 8h3M18 8h3M22 8h7M4 9h3M13 9h3M18 9h3M22 9h3M4 10h3M13 10h3M18 10h3M22 10h3M4 11h3M14 11h6M22 11h3M4 12h3M15 12h4M22 12h3" />
    <path stroke={disable?"#282828":"#1e4148"} d="M7 5h2M25 5h2M11 7h1M29 7h1M7 9h4M25 9h4M13 11h1M20 11h1M14 12h1M19 12h1M4 13h3M15 13h4M22 13h3" />
    <path stroke={disable?"#282828":selected?"#cbcbcb":"#21879c"} d="M0 13h1M33 13h1M0 14h2M32 14h2M1 15h2M31 15h2M1 16h32M2 17h30" />
    </svg>
  );
};
