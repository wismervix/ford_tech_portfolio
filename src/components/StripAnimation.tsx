import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";

// import "./StripAnimation.scss";

interface StripAnimationProps {
  items?: string[];
  speed?: number;
  reverse?: boolean;
  className?: string;
}

const defaultItems = [
  "Prototyping",
  "Website Design",
  "App Design",
  "Dashboard",
  "Wireframe",
];

export default function StripAnimation({
  items = defaultItems,
  speed = 14,
  reverse = false,
  className = "",
}: StripAnimationProps) {
  const groupRef = useRef<HTMLDivElement>(null);

  const [groupWidth, setGroupWidth] = useState(0);

  useLayoutEffect(() => {
    const element = groupRef.current;

    if (!element) return;

    const measure = () => {
      setGroupWidth(element.getBoundingClientRect().width);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(element);

    return () => observer.disconnect();
  }, [items]);

  const style = {
    "--strip-speed": `${speed}s`,
    "--strip-distance": `${groupWidth}px`,
  } as CSSProperties;

  return (
    <section
      className={`strip-animation ${className}`}
      style={style}
      aria-label="Services"
    >
      {/* =====================================================
          Stationary navy backing

          This NEVER moves.
          ===================================================== */}

      <svg
        className="strip-animation__backdrop"
        width="2050"
        height="140"
        viewBox="0 0 2050 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="2090.58"
          height="92.7345"
          transform="translate(-12.4395 46.941) rotate(-1.84172)"
          fill="#0E1629"
        />
      </svg>

      {/* =====================================================
          Teal strip
          ===================================================== */}

      <div className="strip-animation__strip">
        <div
          className={`strip-animation__track ${reverse ? "is-reverse" : ""}`}
        >
          {/* -------------------------------------------------
              First copy

              IMPORTANT:
              We measure this exact group and translate by
              exactly its width.
              ------------------------------------------------- */}

          <div ref={groupRef} className="strip-animation__group">
            {items.map((item, index) => (
              <div className="strip-animation__item" key={`first-${index}`}>
                <span className="strip-animation__text">{item}</span>

                <span className="strip-animation__separator" aria-hidden="true">
                  ✦
                </span>
              </div>
            ))}
          </div>

          {/* -------------------------------------------------
              Exact duplicate
              ------------------------------------------------- */}

          <div className="strip-animation__group" aria-hidden="true">
            {items.map((item, index) => (
              <div className="strip-animation__item" key={`second-${index}`}>
                <span className="strip-animation__text">{item}</span>

                <span className="strip-animation__separator">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
