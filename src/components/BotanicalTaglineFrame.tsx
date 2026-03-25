/**
 * BotanicalTaglineFrame — a compact botanical crown ornament placed directly
 * above the hero tagline. Matches the BotanicalDivider style exactly.
 *
 * Design: a small 3-petal flower at the top-centre, with two curved stems
 * spreading downward to leaf sprigs, flanked by short horizontal rules.
 * Reads top-to-bottom, anchoring the tagline text below it like a crown.
 *
 * Left-aligned on md+ screens (matches left-aligned hero text), centred on
 * mobile to suit the centred mobile layout.
 */

interface BotanicalTaglineFrameProps {
  className?: string;
}

export default function BotanicalTaglineFrame({
  className = "",
}: BotanicalTaglineFrameProps) {
  const c = "#9C8E80";

  return (
    <div
      className={`flex justify-center md:justify-start mb-4 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 180 36"
        xmlns="http://www.w3.org/2000/svg"
        className="w-36 md:w-44 opacity-55"
        fill="none"
      >
        {/* ── Centre flower at (90, 9) — same 3-petal style as FloralCorner ── */}
        <circle cx="90"   cy="9"    r="2.2" fill={c} fillOpacity="0.80" />
        <circle cx="90"   cy="4.2"  r="1.9" fill={c} fillOpacity="0.44" />
        <circle cx="85.5" cy="10.8" r="1.9" fill={c} fillOpacity="0.44" />
        <circle cx="94.5" cy="10.8" r="1.9" fill={c} fillOpacity="0.44" />

        {/* Vertical stem — flower down to baseline */}
        <line
          x1="90" y1="13" x2="90" y2="32"
          stroke={c} strokeWidth="0.85" strokeLinecap="round"
        />

        {/* Left branch — (90, 20) spreading down-left to (68, 32) */}
        <path
          d="M90,20 C84,24 76,28 68,32"
          stroke={c} strokeWidth="0.85" strokeLinecap="round"
        />

        {/* Right branch — (90, 20) spreading down-right to (112, 32) */}
        <path
          d="M90,20 C96,24 104,28 112,32"
          stroke={c} strokeWidth="0.85" strokeLinecap="round"
        />

        {/* Left leaf at branch end */}
        <path
          d="M68,32 Q62,24 67,22 Q69,27 68,32Z"
          fill={c} fillOpacity="0.52"
        />

        {/* Right leaf at branch end */}
        <path
          d="M112,32 Q118,24 113,22 Q111,27 112,32Z"
          fill={c} fillOpacity="0.52"
        />

        {/* Small berry on left branch (adds detail, matches enhanced divider) */}
        <circle cx="79" cy="27" r="1.2" fill={c} fillOpacity="0.55" />

        {/* Bridging dots connecting leaves to rules */}
        <circle cx="61"  cy="32" r="1.2" fill={c} />
        <circle cx="119" cy="32" r="1.2" fill={c} />

        {/* ── Short horizontal rules ── */}
        <line
          x1="0" y1="32" x2="56" y2="32"
          stroke={c} strokeWidth="0.7" strokeLinecap="round"
        />
        <line
          x1="124" y1="32" x2="180" y2="32"
          stroke={c} strokeWidth="0.7" strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
