import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg
    viewBox="0 0 100 90"
    {...props}
  >
    <defs id="defs52">
      <rect
        x={83.429977}
        y={48.505798}
        width={140.99019}
        height={180.44157}
        id="rect4046"
      />
      <rect
        x={83.429977}
        y={48.505798}
        width={140.99019}
        height={180.44157}
        id="rect4046-7"
      />
    </defs>
    <g id="a" />
    <g id="b" />
    <g id="c" />
    <text
      xmlSpace="preserve"
      id="text4044"
      style={{
        fontSize: 96,
        lineHeight: 1.25,
        fontFamily: "sans-serif",
        whiteSpace: "pre",
        shapeInside: "url(#rect4046)",
        fill: "#ffcc00",
        strokeWidth: 1.01149,
      }}
      transform="matrix(0.94035568,0,0,1.0394086,-87.26942,-68.905199)"
    >
      <tspan x={83.429688} y={136.08957} id="tspan28734">
        {"B"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      id="text4044-4"
      style={{
        fontSize: 96,
        lineHeight: 1.25,
        fontFamily: "sans-serif",
        whiteSpace: "pre",
        shapeInside: "url(#rect4046-7)",
        fill: "#ffeeaa",
        strokeWidth: 1.01149,
      }}
      transform="matrix(0.94035568,0,0,1.0394086,-61.783412,-52.768175)"
    >
      <tspan x={83.429688} y={136.08957} id="tspan28736">
        {"s"}
      </tspan>
    </text>

  </svg>
  );
};

export default Icon;
