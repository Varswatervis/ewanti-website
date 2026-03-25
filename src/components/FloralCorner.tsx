/**
 * FloralCorner — a small botanical line-drawing sprig placed in the
 * corner of a section. Matches the style of BotanicalDivider exactly:
 * warm taupe (#9C8E80), thin strokes, small leaves + 3-petal flower.
 *
 * The base SVG design has the sprig growing UP and to the RIGHT from the
 * bottom-left corner (0,90) of the viewBox. For other corners, the element
 * is rotated around its positioned corner so the sprig always grows inward.
 *
 * Hidden on xs screens (< sm) to avoid cluttering small layouts.
 */

type CornerPosition = "top-right" | "bottom-left" | "top-left" | "bottom-right";

interface FloralCornerProps {
  position: CornerPosition;
  /** Additional Tailwind classes (e.g. custom size or opacity) */
  className?: string;
  size?: "sm" | "md" | "lg";
}

const positionConfig: Record<
  CornerPosition,
  { pos: string; rotate: string; origin: string }
> = {
  "bottom-left": {
    pos: "bottom-0 left-0",
    rotate: "0deg",
    origin: "bottom left",
  },
  "top-right": {
    pos: "top-0 right-0",
    rotate: "180deg",
    origin: "top right",
  },
  "top-left": {
    pos: "top-0 left-0",
    rotate: "-90deg",
    origin: "top left",
  },
  "bottom-right": {
    pos: "bottom-0 right-0",
    rotate: "90deg",
    origin: "bottom right",
  },
};

const sizeClasses: Record<"sm" | "md" | "lg", string> = {
  sm: "w-14 h-14 md:w-16 md:h-16",
  md: "w-18 h-18 md:w-22 md:h-22",
  lg: "w-22 h-22 md:w-28 md:h-28",
};

export default function FloralCorner({
  position,
  className = "",
  size = "md",
}: FloralCornerProps) {
  const cfg = positionConfig[position];
  const c = "#9C8E80"; // same warm taupe as BotanicalDivider

  return (
    <div
      className={`absolute pointer-events-none select-none hidden sm:block ${cfg.pos} ${sizeClasses[size]} ${className}`}
      aria-hidden="true"
      style={{
        transform: `rotate(${cfg.rotate})`,
        transformOrigin: cfg.origin,
      }}
    >
      {/*
        Base design: sprig grows from bottom-left corner (origin 0,90)
        upward and to the right, mirroring the BotanicalDivider's leaf style.
        The SVG viewBox has a small margin so strokes at the edge aren't clipped.
      */}
      <svg
        viewBox="-2 -2 94 94"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-50"
        fill="none"
      >
        {/* Main stem: corner → upper right */}
        <path
          d="M 2,88 C 14,72 26,56 40,42 C 47,34 54,27 62,17"
          stroke={c}
          strokeWidth="0.95"
          strokeLinecap="round"
        />

        {/* Leaf 1 — sprouting left off the lower stem */}
        <path
          d="M 19,69 Q 11,61 16,59 Q 18,64 19,69 Z"
          fill={c}
          fillOpacity="0.55"
        />

        {/* Leaf 2 — sprouting right off the mid-stem */}
        <path
          d="M 35,46 Q 43,40 45,44 Q 41,47 35,46 Z"
          fill={c}
          fillOpacity="0.55"
        />

        {/* Side branch — splits from main stem toward upper right */}
        <path
          d="M 52,30 C 59,22 66,16 74,8"
          stroke={c}
          strokeWidth="0.85"
          strokeLinecap="round"
        />

        {/* Leaf 3 — on the side branch */}
        <path
          d="M 63,20 Q 70,14 72,18 Q 68,22 63,20 Z"
          fill={c}
          fillOpacity="0.55"
        />

        {/* Tiny 3-petal flower at the tip of the side branch */}
        {/* Centre */}
        <circle cx="74" cy="7" r="2.2" fill={c} fillOpacity="0.80" />
        {/* Top petal */}
        <circle cx="74" cy="2.8" r="1.9" fill={c} fillOpacity="0.44" />
        {/* Right petal */}
        <circle cx="78" cy="8.8" r="1.9" fill={c} fillOpacity="0.44" />
        {/* Left petal */}
        <circle cx="70" cy="8.8" r="1.9" fill={c} fillOpacity="0.44" />

        {/* Small berry/bud near the base of the stem */}
        <circle cx="10" cy="80" r="1.6" fill={c} fillOpacity="0.60" />
        <path
          d="M 9,77 Q 5,71 9,70 Q 10,73 9,77 Z"
          fill={c}
          fillOpacity="0.45"
        />
      </svg>
    </div>
  );
}
