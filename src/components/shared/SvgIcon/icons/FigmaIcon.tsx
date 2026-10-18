import type { SVGProps } from "react";

export default function FigmaIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        width="20"
        height="30"
        viewBox="0 0 20 30"
        fill="none"
        {...props}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 30C7.76744 30 10 27.7674 10 25V20H5C2.23256 20 0 22.2326 0 25C0 27.7674 2.23256 30 5 30Z"
          fill="#0ACF83"
        />
        <path
          d="M0 15C0 12.2326 2.23256 10 5 10H10V20H5C2.23256 20 0 17.7674 0 15Z"
          fill="#A259FF"
        />
        <path
          d="M0 5C0 2.23256 2.23256 0 5 0H10V10H5C2.23256 10 0 7.76744 0 5Z"
          fill="#F24E1E"
        />
        <path
          d="M10 0H15C17.7674 0 20 2.23256 20 5C20 7.76744 17.7674 10 15 10H10V0Z"
          fill="#FF7262"
        />
        <path
          d="M20 15C20 17.7674 17.7674 20 15 20C12.2326 20 10 17.7674 10 15C10 12.2326 12.2326 10 15 10C17.7674 10 20 12.2326 20 15Z"
          fill="#1ABCFE"
        />
      </svg>
    );
}