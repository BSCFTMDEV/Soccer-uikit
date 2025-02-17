import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 205 50" {...props}>
      <image
        width="300"
        height="50"
        href={isDark ? "/images/egg/LogoDark.png" : "/images/egg/LogoWhite.png"}
      />
    </Svg>
  );
};

export default Logo;
