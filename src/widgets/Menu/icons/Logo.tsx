import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <svg
    viewBox="0 0 300 90"
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
    <text
      xmlSpace="preserve"
      style={{
        fontSize: "45.7884px",
        lineHeight: 1.25,
        fontFamily: "sans-serif",
        fill: "#ffcc00",
        strokeWidth: 1,
      }}
      x={78.76355}
      y={55.368256}
      id="text26958"
      transform="scale(0.85985535,1.1629863)"
    >
      <tspan
        id="tspan26956"
        x={78.76355}
        y={55.368256}
        style={{
          fill: "#ffcc00",
          strokeWidth: 1,
        }}
      >
        {"BaseSwap"}
      </tspan>
    </text>
  </svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
