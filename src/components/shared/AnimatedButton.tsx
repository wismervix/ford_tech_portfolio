import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
// import "./AnimatedButton.scss";

type AnimatedButtonProps = {
  children?: React.ReactNode;
  href?: string;
  download?: boolean | string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
} & Omit<HTMLMotionProps<"a">, "children" | "onClick" | "className">;

export default function AnimatedButton({
  children = "Download CV",
  href = "#",
  download,
  onClick,
  className = "",
  disabled = false,
  ...props
}: AnimatedButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={disabled ? undefined : href}
      download={download}
      onClick={disabled ? undefined : onClick}
      className={`animated-button ${
        disabled ? "is-disabled" : ""
      } ${className}`}
      initial="rest"
      whileHover={disabled || prefersReducedMotion ? "rest" : "hover"}
      whileTap={disabled ? "rest" : "tap"}
      {...props}
    >
      {/* =================================================
          Base
          ================================================= */}

      <span className="animated-button__base" />

      {/* =================================================
          Coloured trailing edge

          This sits BEHIND the navy surface.

          It enters from the bottom-left and creates the
          small green/orange curved edge visible during
          the transition.
          ================================================= */}

      <motion.span
        className="animated-button__accent"
        variants={{
          rest: {
            x: "-105%",
            y: "45%",
            scale: 0.85,
            opacity: 1,
          },

          hover: {
            x: "70%",
            y: "-12%",
            scale: 1.05,
            opacity: 1,

            transition: {
              duration: 0.68,
              ease: [0.65, 0, 0.35, 1],
            },
          },
        }}
      />

      {/* =================================================
          Navy surface

          This is the actual shape that takes over the
          button.

          It starts below/left and sweeps diagonally
          across the pill.
          ================================================= */}

      <motion.span
        className="animated-button__navy"
        variants={{
          rest: {
            x: "-105%",
            y: "55%",
            scale: 0.85,
          },

          hover: {
            x: "12%",
            y: "-3%",
            scale: 1.12,

            transition: {
              duration: 0.72,
              ease: [0.65, 0, 0.35, 1],
            },
          },
        }}
      />

      {/* =================================================
          Content
          ================================================= */}

      <span className="animated-button__content">
        <span className="animated-button__label">{children}</span>

        {/* =================================================
            Arrow

            Deliberately starts slightly after the colour
            sweep so the background gets there first.
            ================================================= */}

        <motion.span
          className="animated-button__icon"
          variants={{
            rest: {
              rotate: 0,
              color: "#18B5A4",
            },

            hover: {
              rotate: 45,
              color: "#0D142D",

              transition: {
                delay: 0.52,
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
              },
            },

            tap: {
              scale: 0.92,
            },
          }}
        >
          <ArrowUpRight size={17} strokeWidth={2.4} />
        </motion.span>
      </span>
    </motion.a>
  );
}
