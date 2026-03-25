/**
 * WatercolourWash — a painterly soft background for hero sections.
 *
 * Multiple overlapping blurred SVG ellipses in the logo's palette colours
 * (peach, lavender, sage, dusty blue, rose, lime) create an organic,
 * watercolour-painted feel. Each instance needs a unique `id` prop so
 * SVG filter IDs don't collide when the component is used on multiple pages.
 */

interface WatercolourWashProps {
  /** Unique string to namespace SVG filter IDs — e.g. "hero", "about" */
  id?: string;
  className?: string;
}

export default function WatercolourWash({
  id = "wc",
  className = "",
}: WatercolourWashProps) {
  const b1 = `${id}-b1`; // blur-heavy  ~55px
  const b2 = `${id}-b2`; // blur-medium ~35px
  const b3 = `${id}-b3`; // blur-soft   ~20px

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Heavy blur — large washes */}
          <filter id={b1} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="55" />
          </filter>
          {/* Medium blur — secondary splashes */}
          <filter id={b2} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="36" />
          </filter>
          {/* Soft blur — small accent drops */}
          <filter id={b3} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
        </defs>

        {/* ── Base wash: warm cream glow filling the centre ── */}
        <ellipse
          cx="600" cy="300" rx="720" ry="460"
          fill="#F8EAD6" opacity="0.55"
          filter={`url(#${b1})`}
        />

        {/* ── Primary colour washes ── */}

        {/* Peach — upper right (prominent, from logo's top cluster) */}
        <ellipse
          cx="960" cy="85" rx="430" ry="265"
          fill="#F2B490" opacity="0.23"
          filter={`url(#${b1})`}
        />

        {/* Lavender/purple — upper left */}
        <ellipse
          cx="155" cy="148" rx="370" ry="228"
          fill="#C5B5D8" opacity="0.20"
          filter={`url(#${b1})`}
        />

        {/* Sage green — lower left */}
        <ellipse
          cx="100" cy="530" rx="340" ry="205"
          fill="#B5D0B0" opacity="0.22"
          filter={`url(#${b1})`}
        />

        {/* Dusty blue — lower right */}
        <ellipse
          cx="1085" cy="480" rx="310" ry="200"
          fill="#A8C4D8" opacity="0.20"
          filter={`url(#${b1})`}
        />

        {/* ── Secondary accent splashes ── */}

        {/* Rose — upper centre, small */}
        <ellipse
          cx="490" cy="55" rx="210" ry="125"
          fill="#E8A090" opacity="0.14"
          filter={`url(#${b2})`}
        />

        {/* Lime — lower centre-right */}
        <ellipse
          cx="820" cy="570" rx="270" ry="158"
          fill="#C2D885" opacity="0.17"
          filter={`url(#${b2})`}
        />

        {/* Lavender echo — centre left */}
        <ellipse
          cx="310" cy="365" rx="192" ry="140"
          fill="#D4C8E8" opacity="0.15"
          filter={`url(#${b2})`}
        />

        {/* Peach warmth — lower centre */}
        <ellipse
          cx="680" cy="525" rx="240" ry="148"
          fill="#F5C0A0" opacity="0.14"
          filter={`url(#${b2})`}
        />

        {/* ── Tiny accent drops — give painterly variation ── */}

        {/* Sage touch — upper right of centre */}
        <ellipse
          cx="790" cy="175" rx="148" ry="98"
          fill="#A8C4A0" opacity="0.18"
          filter={`url(#${b3})`}
        />

        {/* Blue drop — far left, mid-height */}
        <ellipse
          cx="38" cy="295" rx="142" ry="95"
          fill="#90B8D0" opacity="0.16"
          filter={`url(#${b3})`}
        />

        {/* Peach drop — upper centre-left */}
        <ellipse
          cx="380" cy="110" rx="130" ry="82"
          fill="#F4B898" opacity="0.16"
          filter={`url(#${b3})`}
        />
      </svg>
    </div>
  );
}
