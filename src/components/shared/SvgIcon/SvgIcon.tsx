import type { SVGProps } from "react";

import "./SvgIcon.scss";

import * as icons from "./icons";

const iconMap = {
  figma: icons.FigmaIcon,
  adobeIllustrator: icons.AdobeIllustrationIcon,
  wordPress: icons.WordPressIcon,
  //   homeIcon: icons.HomeIcon,
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
