/**
 * BotanicalSideSprig — a tall vertical botanical element that appears along
 * the left or right edge of a content section, as if growing in from the side.
 *
 * Base design: stem running vertically, leaves branching to the RIGHT.
 * Right-side use: CSS scaleX(-1) mirrors it so leaves point LEFT (inward).
 *
 * Only renders on xl+ screens (≥1280px) where there is guaranteed margin
 * space outside the max-width container. Hidden on all smaller screens.
 * Parent section must have `relative overflow-hidden`.
 */

type Side = "left" | "right";

interface BotanicalSideSpriqProps {
  side: Side;
  className?: string;
}

export default function BotanicalSideSprig({
  side,
  className = "",
}: BotanicalSideSpriqProps) {
  const c = "#9C8E80"; // same warm taupe as all botanical elements

  const posClass =
    side === "left" ? "left-3 2xl:left-7" : "right-3 2xl:right-7";

  const transform =
    side === "right"
      ? "translateY(-50%) scaleX(-1)"
      : "translateY(-50%)";

  return (
    <div
      className={`absolute pointer-events-none select-none hidden xl:block w-10 h-44 ${posClass} ${className}`}
      aria-hidden="true"
      style={{ top: "50%", transform }}
    >
      <svg
        viewBox="0 0 40 175"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-45"
        fill="none"
      >
        {/* Main vertical stem */}
        <path
          d="M8,170 C8,145 8,115 8,88 C8,62 8,35 8,8"
          stroke={c} strokeWidth="0.9" strokeLinecap="round"
        />

        {/* Leaf 1 — bottom, pointing right */}
        <path d="M8,148 Q22,140 25,144 Q18,150 8,148Z" fill={c} fillOpacity="0.52" />

        {/* Berry cluster — low section */}
        <circle cx="9"  cy="133" r="1.4" fill={c} fillOpacity="0.55" />
        <circle cx="13" cy="130" r="1.2" fill={c} fillOpacity="0.46" />

        {/* Leaf 2 — mid-low */}
        <path d="M8,115 Q23,107 26,111 Q19,117 8,115Z" fill={c} fillOpacity="0.52" />

        {/* Leaf 3 — centre */}
        <path d="M8,85 Q22,77 25,81 Q18,87 8,85Z" fill={c} fillOpacity="0.52" />

        {/* Single berry — mid section */}
        <circle cx="9" cy="100" r="1.3" fill={c} fillOpacity="0.50" />

        {/* Leaf 4 — mid-high */}
        <path d="M8,58 Q21,50 24,54 Q18,60 8,58Z" fill={c} fillOpacity="0.52" />

        {/* Leaf 5 — high, slightly smaller */}
        <path d="M8,28 Q19,21 22,25 Q17,30 8,28Z" fill={c} fillOpacity="0.52" />

        {/* Small 3-petal flower at top */}
        <circle cx="8"  cy="8"   r="2.2" fill={c} fillOpacity="0.80" />
        <circle cx="8"  cy="3.2" r="1.9" fill={c} fillOpacity="0.44" />
        <circle cx="12" cy="9.8" r="1.9" fill={c} fillOpacity="0.44" />
        <circle cx="4"  cy="9.8" r="1.9" fill={c} fillOpacity="0.44" />
      </svg>
    </div>
  );
}
