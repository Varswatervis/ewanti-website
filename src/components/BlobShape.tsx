/**
 * BlobShape — organic SVG blob shapes extracted from the logo palette.
 * Used as soft decorative background elements at low opacity.
 */

type BlobVariant = "peach" | "purple" | "lime" | "rose" | "blue";

interface BlobShapeProps {
  variant: BlobVariant;
  /** Tailwind positioning + sizing classes, e.g. "-top-12 -right-16 w-64 h-56" */
  className?: string;
  opacity?: number;
}

const blobs: Record<BlobVariant, { fill: string; path: string }> = {
  // Warm peach — top of the logo, behind the poppy
  peach: {
    fill: "#F2B490",
    path: "M 95,15 C 130,5 168,20 175,55 C 182,92 170,132 145,152 C 120,172 80,175 55,158 C 28,140 18,100 25,65 C 32,30 60,25 95,15 Z",
  },
  // Soft purple/lavender — left side of logo
  purple: {
    fill: "#C5B5D8",
    path: "M 80,18 C 110,5 148,18 162,50 C 178,88 165,130 138,155 C 112,180 68,180 45,162 C 20,142 15,102 24,68 C 33,34 50,31 80,18 Z",
  },
  // Yellow-green/lime — lower left of logo
  lime: {
    fill: "#C2D885",
    path: "M 88,22 C 115,8 155,18 168,52 C 182,88 168,130 142,158 C 115,182 72,185 48,165 C 22,143 16,100 26,66 C 36,30 62,36 88,22 Z",
  },
  // Dusty rose — lower left of logo
  rose: {
    fill: "#E89C8C",
    path: "M 76,20 C 106,5 145,18 160,52 C 175,90 162,135 136,160 C 110,185 68,185 44,165 C 18,143 12,100 20,66 C 28,30 46,35 76,20 Z",
  },
  // Soft blue — right side of logo (matches site accent)
  blue: {
    fill: "#8FBED8",
    path: "M 100,16 C 134,4 170,16 180,50 C 192,88 180,132 154,155 C 128,178 86,180 60,160 C 32,140 22,100 30,65 C 38,28 66,28 100,16 Z",
  },
};

export default function BlobShape({
  variant,
  className = "",
  opacity = 0.18,
}: BlobShapeProps) {
  const blob = blobs[variant];
  return (
    <div
      className={`absolute pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ opacity }}
      >
        <path d={blob.path} fill={blob.fill} />
      </svg>
    </div>
  );
}
