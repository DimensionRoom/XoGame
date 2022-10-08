import React from "react";

export interface Props {
  width?: any;
  className?: string;
}

export default ({width,className}:Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 26 10" shape-rendering="crispEdges" width={width} className={className}>
    <path stroke="#ad4242" d="M10 1h2M10 2h1M10 3h1M11 5h1M11 6h1M12 7h3M13 8h1" />
    <path stroke="#ac3232" d="M15 1h2M14 2h4M12 3h5M15 4h1M15 5h1" />
    <path stroke="#777777" d="M20 1h2M19 2h2M19 3h1M19 4h1M19 5h1M19 6h1M19 7h2" />
    <path stroke="#707070" d="M22 1h2M23 2h1M20 8h1" />
    <path stroke="#d7d26a" d="M7 2h1M6 3h1" />
    <path stroke="#b14d4d" d="M9 2h1M9 3h1M9 4h2M10 5h1" />
    <path stroke="#ad3a3a" d="M11 2h2M11 3h1M11 4h4M12 5h3M12 6h3" />
    <path stroke="#b6aeae" d="M21 2h2M21 3h1M20 6h2" />
    <path stroke="#696969" d="M24 2h1M24 3h1M24 4h1M24 5h1M21 8h1" />
    <path stroke="#ddda99" d="M3 3h1M4 4h1M5 5h1M6 6h1" />
    <path stroke="#a42727" d="M17 3h1M16 4h2M16 5h1M15 6h1" />
    <path stroke="#c7c4c4" d="M20 3h1M20 4h1M20 5h1" />
    <path stroke="#a0a0a0" d="M22 3h2M23 4h1M23 5h1M22 6h2M21 7h2" />
    <path stroke="#d2ce79" d="M5 4h1" />
    <path stroke="#73ceff" d="M21 4h1" />
    <path stroke="#41beff" d="M22 4h1" />
    <path stroke="#444444" d="M3 5h1M2 6h2M1 7h2" />
    <path stroke="#c13434" d="M4 5h1" />
    <path stroke="#35aae9" d="M21 5h1" />
    <path stroke="#21b1ff" d="M22 5h1" />
    <path stroke="#a4a2a2" d="M4 6h1M3 7h1M2 8h1" />
    <path stroke="#525252" d="M24 6h1M24 7h1M23 8h1" />
    <path stroke="#757575" d="M23 7h1" />
    <path stroke="#b5b5b5" d="M1 8h1" />
    <path stroke="#656565" d="M22 8h1" />
    </svg>
  );
};
