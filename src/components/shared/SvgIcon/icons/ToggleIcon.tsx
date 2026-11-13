import type { SVGProps } from "react";

export default function ToggleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="19"
      viewBox="0 0 40 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 0.563965H18.6667C22.8088 0.563965 26.1667 4.35134 26.1667 9.02331C26.1667 13.6953 22.8088 17.4826 18.6667 17.4826H8C3.85786 17.4826 0.5 13.6953 0.5 9.02331C0.5 4.35134 3.85786 0.563965 8 0.563965Z"
        stroke="#00BFA6"
      />
      <path
        d="M31.9987 0H21.332C16.9138 0 13.332 4.03987 13.332 9.0233C13.332 14.0067 16.9138 18.0466 21.332 18.0466H31.9987C36.417 18.0466 39.9987 14.0067 39.9987 9.0233C39.9987 4.03987 36.417 0 31.9987 0Z"
        fill="#00BFA6"
      />
    </svg>
  );
}
