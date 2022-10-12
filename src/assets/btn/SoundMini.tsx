import React from "react";
export interface Props {
  width?: any;
  className?: string;
  disable?: boolean;
  selected?: boolean;
  active?: boolean;
}

export default ({ width, className, disable, selected, active }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 16 16"
      shapeRendering="crispEdges"
      width={width}
      className={className}
    >
      {active ? (
        <>
          <path
            stroke="#a9a9a9"
            d="M2 0h12M1 1h1M14 1h1M0 2h1M15 2h1M0 3h1M15 3h1M0 4h1M15 4h1M0 5h1M15 5h1M0 6h1M15 6h1M0 7h1M15 7h1M0 8h1M15 8h1M0 9h1M15 9h1M0 10h1M15 10h1M0 11h1M15 11h1M0 12h1M15 12h1M0 13h1M15 13h1M1 14h1M14 14h1M2 15h12"
          />
          <path
            stroke="#686868"
            d="M2 1h12M1 2h6M9 2h6M1 3h6M10 3h5M1 4h6M11 4h4M1 5h6M9 5h1M12 5h3M1 6h6M9 6h2M13 6h2M1 7h6M9 7h2M13 7h2M1 8h4M9 8h1M12 8h3M1 9h3M9 9h6M1 10h2M9 10h6M1 11h2M8 11h7M1 12h3M7 12h8M1 13h14M2 14h12"
          />
          <path stroke="#a7f6cb" d="M7 2h2M7 3h1M5 8h1" />
          <path
            stroke="#8cffc0"
            d="M8 3h2M7 4h4M7 5h2M10 5h2M7 6h2M11 6h1M7 7h2M6 8h3M4 9h4M3 10h4"
          />
          <path stroke="#7effb8" d="M12 6h1M11 7h1M8 9h1M7 10h1M3 11h4" />
          <path stroke="#6ae5a2" d="M12 7h1M11 8h1M7 11h1M4 12h3" />
          <path stroke="#59e197" d="M10 8h1M8 10h1" />
        </>
      ) : (
        <>
          <path
            stroke="#a9a9a9"
            d="M2 0h12M1 1h1M14 1h1M0 2h1M7 2h2M15 2h1M0 3h1M7 3h3M15 3h1M0 4h1M7 4h4M15 4h1M0 5h1M7 5h2M10 5h2M15 5h1M0 6h1M7 6h2M11 6h2M15 6h1M0 7h1M7 7h2M11 7h2M15 7h1M0 8h1M5 8h4M10 8h2M15 8h1M0 9h1M4 9h5M15 9h1M0 10h1M3 10h6M15 10h1M0 11h1M3 11h5M15 11h1M0 12h1M4 12h3M15 12h1M0 13h1M15 13h1M1 14h1M14 14h1M2 15h12"
          />
          <path
            stroke="#686868"
            d="M2 1h12M1 2h6M9 2h6M1 3h6M10 3h5M1 4h6M11 4h4M1 5h6M9 5h1M12 5h3M1 6h6M9 6h2M13 6h2M1 7h6M9 7h2M13 7h2M1 8h4M9 8h1M12 8h3M1 9h3M9 9h6M1 10h2M9 10h6M1 11h2M8 11h7M1 12h3M7 12h8M1 13h14M2 14h12"
          />
        </>
      )}
    </svg>
  );
};
