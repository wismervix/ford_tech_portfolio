import type { SVGProps } from "react";

import "./SvgIcon.scss";

import * as icons from "./icons";

const iconMap = {
  star: icons.StarIcon,
  atom: icons.AtomIcon,
  figma: icons.FigmaIcon,
  xHome: icons.XHomeIcon,
  touch: icons.TouchIcon,
  award: icons.AwardIcon,
  awardWhite: icons.AwardWhiteIcon,
  blocks: icons.BlocksIcon,
  circle: icons.CircleIcon,
  toggle: icons.ToggleIcon,
  laptop: icons.LaptopIcon,
  bullsEye: icons.BullsEyeIcon,
  wordPress: icons.WordPressIcon,
  lightning: icons.LightningIcon,
  smartPhone: icons.SmartPhoneIcon,
  globeConnect: icons.GlobeConnectIcon,
  briefcaseClock: icons.BriefcaseClockIcon,
  adobeIllustrator: icons.AdobeIllustrationIcon,
} as const;

export type IconName = keyof typeof iconMap;

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}

export default function SvgIcon({ name, size = 24, ...props }: SvgIconProps) {
  const Icon = iconMap[name];

  if (!Icon) {
    return null;
  }

  return <Icon width={size} height={size} aria-hidden="true" {...props} />;
}
