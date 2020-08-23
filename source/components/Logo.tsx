import * as React from "react";
import Svg, { Circle, Path, Rect, SvgProps } from "react-native-svg";

const Logo: React.FC<SvgProps> = (props) => (
  <Svg width={85} height={85} viewBox="0 0 85 85" fill="none" {...props}>
    <Rect width={85} height={85} rx={16} fill="#fff" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.294 17.33l-6.909 6.91 17.767 17.766v9.87h9.87v-9.87L64.79 24.24l-6.91-6.909-15.793 15.793L26.294 17.33z"
      fill="#EDA231"
    />
    <Circle cx={42.087} cy={61.893} r={5.777} fill="#0C1936" />
  </Svg>
);

export default React.memo(Logo);
