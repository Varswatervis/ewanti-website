/**
 * BotanicalDivider — a delicate botanical SVG line divider inspired by
 * the floral line-drawing elements in the Ewanti Heart logo.
 *
 * Features: a small 5-petal poppy at centre, two leaf sprigs on each
 * side, connecting to thin horizontal rules. Neutral warm taupe colour.
 */

interface BotanicalDividerProps {
  className?: string;
}

export default function BotanicalDivider({
  className = "",
}: BotanicalDividerProps) {
  const c = "#9C8E80"; // warm taupe — neutral, matches brand palette

  return (
    <div
      className={`flex items-center justify-center py-2 w-full overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 480 50"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-xs sm:max-w-md md:max-w-2xl opacity-55"
        fill="none"
      >
        {/* ── Left horizontal rule ── */}
        <line
          x1="0" y1="38" x2="204" y2="38"
          stroke={c} strokeWidth="0.75" strokeLinecap="round"
        />

        {/* Berry cluster — left rule, just before botanical section */}
        <circle cx="172" cy="36" r="1.4" fill={c} fillOpacity="0.52" />
        <circle cx="177" cy="34" r="1.2" fill={c} fillOpacity="0.46" />
        <circle cx="182" cy="37" r="1.1" fill={c} fillOpacity="0.40" />

        {/* Left bridging dot */}
        <circle cx="209" cy="38" r="1.4" fill={c} />

        {/* Left sprig — two small leaves rising from the line */}
        <path
          d="M215,38 Q210,27 217,25 Q219,31 215,38Z"
          fill={c} fillOpacity="0.55"
        />
        {/* Tiny flower bud at the tip of leaf 1 */}
        <circle cx="212" cy="24" r="1.3" fill={c} fillOpacity="0.62" />
        <path
          d="M222,38 Q224,26 229,28 Q227,33 222,38Z"
          fill={c} fillOpacity="0.55"
        />

        {/* Left curved stem climbing toward centre flower */}
        <path
          d="M218,38 C224,35 231,29 237,24"
          stroke={c} strokeWidth="0.9" strokeLinecap="round"
        />

        {/* ── Centre flower (poppy-style, 5 petals) at (240, 14) ── */}
        {/* Petal circles radiating at 72° intervals from centre */}
        {/* Top  */}
        <circle cx="240" cy="8"  r="4" fill={c} fillOpacity="0.42" />
        {/* Upper-right  (72°) */}
        <circle cx="246" cy="12" r="4" fill={c} fillOpacity="0.42" />
        {/* Lower-right (144°) */}
        <circle cx="244" cy="19" r="4" fill={c} fillOpacity="0.38" />
        {/* Lower-left  (216°) */}
        <circle cx="236" cy="19" r="4" fill={c} fillOpacity="0.38" />
        {/* Upper-left  (288°) */}
        <circle cx="234" cy="12" r="4" fill={c} fillOpacity="0.42" />
        {/* Flower centre */}
        <circle cx="240" cy="14" r="2.6" fill={c} fillOpacity="0.82" />

        {/* Stem — flower down to the horizontal rule */}
        <line
          x1="240" y1="22" x2="240" y2="38"
          stroke={c} strokeWidth="0.9" strokeLinecap="round"
        />

        {/* Right curved stem flowing away from flower */}
        <path
          d="M243,24 C249,29 256,35 262,38"
          stroke={c} strokeWidth="0.9" strokeLinecap="round"
        />

        {/* Tiny seed/bud on right curved stem (midpoint ~252,31) */}
        <circle cx="252" cy="30" r="1.3" fill={c} fillOpacity="0.55" />

        {/* Right sprig — two small leaves */}
        <path
          d="M258,38 Q256,26 262,25 Q263,31 258,38Z"
          fill={c} fillOpacity="0.55"
        />
        <path
          d="M265,38 Q270,27 264,27 Q263,33 265,38Z"
          fill={c} fillOpacity="0.55"
        />

        {/* Right bridging dot */}
        <circle cx="271" cy="38" r="1.4" fill={c} />

        {/* Berry cluster — right rule, just after botanical section */}
        <circle cx="299" cy="37" r="1.1" fill={c} fillOpacity="0.40" />
        <circle cx="304" cy="34" r="1.2" fill={c} fillOpacity="0.46" />
        <circle cx="309" cy="36" r="1.4" fill={c} fillOpacity="0.52" />

        {/* ── Right horizontal rule ── */}
        <line
          x1="276" y1="38" x2="480" y2="38"
          stroke={c} strokeWidth="0.75" strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
