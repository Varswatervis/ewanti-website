/**
 * BotanicalTreeSide — a tall hand-drawn botanical tree growing upward from
 * the bottom corners of the page. Placed once in the root layout so it
 * appears consistently on every page.
 *
 * Style: matches the existing FloralCorner / BotanicalDivider aesthetic —
 * warm-taupe structural stems, colour-accented sage leaves, peach & lavender
 * flowers, dusty-blue buds.
 *
 * Left tree is the master design; right tree is an exact scaleX(-1) mirror.
 * Hidden on xs/sm screens; scales up from a small corner accent to a
 * generous framing tree at 2xl+.
 */

interface Props {
  side: "left" | "right";
}

export default function BotanicalTreeSide({ side }: Props) {
  /* ── Brand colour palette ──────────────────────────────────────── */
  const t  = "#9C8E80"; // warm taupe — structural stems, matches FloralCorner
  const sg = "#8FAF8C"; // sage green — primary leaf fill
  const sg2= "#B5CDB3"; // light sage  — secondary leaf fill
  const pk = "#F0C5A8"; // soft peach  — flower fill
  const pkS= "#D4936E"; // peach stroke
  const lv = "#C4B8D8"; // lavender    — flower fill
  const lvS= "#9B8AB8"; // lavender stroke
  const bl = "#A8C4D8"; // dusty blue  — bud fill
  const blS= "#6F9CB8"; // blue stroke

  return (
    <div
      aria-hidden="true"
      className={`fixed bottom-0 ${side === "left" ? "left-0" : "right-0"} pointer-events-none select-none hidden md:block`}
      style={{ zIndex: 5 }}
    >
      <svg
        viewBox="0 0 160 620"
        xmlns="http://www.w3.org/2000/svg"
        /* Narrow on small viewports so the tree stays in the margin/padding
           zone; wide enough at 2xl to properly frame the content. */
        className="w-16 lg:w-24 xl:w-32 2xl:w-48 h-auto block"
        style={side === "right" ? { transform: "scaleX(-1)" } : undefined}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >

        {/* ══════════════════ ROOTS ══════════════════ */}
        <path d="M 28,613 C 16,618  5,617 -1,620"  stroke={t} strokeWidth="1.1" strokeOpacity="0.60"/>
        <path d="M 28,613 C 14,622  1,626 -5,630"  stroke={t} strokeWidth="0.9" strokeOpacity="0.45"/>
        <path d="M 28,613 C 37,619 50,623 58,626"  stroke={t} strokeWidth="0.9" strokeOpacity="0.45"/>
        <path d="M 28,613 C 20,609 14,606  8,610"  stroke={t} strokeWidth="0.8" strokeOpacity="0.35"/>

        {/* ══════════════════ MAIN TRUNK ══════════════════ */}
        {/* Graceful S-curve from base (28,613) to tip (68,14) */}
        <path
          d="M 28,613 C 22,558 23,500 27,445
             C 31,390 43,362 38,308
             C 33,254 38,208 45,158
             C 52,108 59,62  68,14"
          stroke={t} strokeWidth="2.0" strokeOpacity="0.78"
        />

        {/* ══════════════════ BRANCH 1  (y ≈ 465) ══════════════════ */}
        <path d="M 27,466 C 52,452 78,440 104,428 C 120,420 137,413 153,404"
          stroke={t} strokeWidth="1.35" strokeOpacity="0.70"/>
        {/* Sub-branch */}
        <path d="M 104,428 C 115,413 123,403 129,390"
          stroke={t} strokeWidth="0.95" strokeOpacity="0.62"/>

        {/* Leaves — pairs above and below branch */}
        <path d="M 54,454 Q 46,443 50,440 Q 57,447 54,454 Z" fill={sg}  fillOpacity="0.74" stroke={sg}  strokeWidth="0.45" strokeOpacity="0.55"/>
        <path d="M 54,454 Q 62,463 58,467 Q 52,460 54,454 Z" fill={sg2} fillOpacity="0.68" stroke={sg}  strokeWidth="0.45" strokeOpacity="0.50"/>
        <path d="M 75,444 Q 67,433 71,430 Q 78,437 75,444 Z" fill={sg}  fillOpacity="0.74" stroke={sg}  strokeWidth="0.45" strokeOpacity="0.55"/>
        <path d="M 75,444 Q 83,453 79,457 Q 73,451 75,444 Z" fill={sg2} fillOpacity="0.68" stroke={sg}  strokeWidth="0.45" strokeOpacity="0.50"/>
        <path d="M 96,435 Q 88,424 92,421 Q 99,428 96,435 Z" fill={sg}  fillOpacity="0.72" stroke={sg}  strokeWidth="0.45" strokeOpacity="0.55"/>
        <path d="M 96,435 Q 104,445 100,449 Q 94,442 96,435 Z" fill={sg2} fillOpacity="0.65" stroke={sg} strokeWidth="0.40" strokeOpacity="0.48"/>
        <path d="M 116,425 Q 108,414 112,411 Q 119,418 116,425 Z" fill={sg} fillOpacity="0.70" stroke={sg} strokeWidth="0.40" strokeOpacity="0.52"/>
        {/* Sub-branch leaves */}
        <path d="M 116,411 Q 108,401 112,397 Q 119,404 116,411 Z" fill={sg2} fillOpacity="0.64" stroke={sg} strokeWidth="0.38" strokeOpacity="0.48"/>
        <path d="M 122,399 Q 130,391 132,395 Q 127,402 122,399 Z" fill={sg}  fillOpacity="0.62" stroke={sg} strokeWidth="0.38" strokeOpacity="0.45"/>

        {/* 5-petal peach flower at branch 1 tip — centre (153, 404) R=4.8 */}
        <circle cx="153"   cy="399.2" r="3.2" fill={pk}  fillOpacity="0.85" stroke={pkS} strokeWidth="0.72"/>
        <circle cx="157.6" cy="402.5" r="3.2" fill={pk}  fillOpacity="0.85" stroke={pkS} strokeWidth="0.72"/>
        <circle cx="155.8" cy="408.2" r="3.2" fill={pk}  fillOpacity="0.85" stroke={pkS} strokeWidth="0.72"/>
        <circle cx="150.2" cy="408.2" r="3.2" fill={pk}  fillOpacity="0.85" stroke={pkS} strokeWidth="0.72"/>
        <circle cx="148.4" cy="402.5" r="3.2" fill={pk}  fillOpacity="0.85" stroke={pkS} strokeWidth="0.72"/>
        <circle cx="153"   cy="404"   r="2.2" fill="#F9EBDB" fillOpacity="0.96" stroke={pkS} strokeWidth="0.55"/>

        {/* Small lavender bud at sub-branch tip */}
        <path d="M 129,390 C 127,386 126,382 129,380 C 132,382 131,386 129,390"
          stroke={lvS} strokeWidth="0.60" strokeOpacity="0.78"/>
        <ellipse cx="129" cy="388" rx="2.8" ry="4.5"
          fill={lv} fillOpacity="0.78" stroke={lvS} strokeWidth="0.65"/>


        {/* ══════════════════ BRANCH 2  (y ≈ 362) ══════════════════ */}
        <path d="M 37,362 C 62,348 86,335 110,321 C 127,311 141,304 156,293"
          stroke={t} strokeWidth="1.35" strokeOpacity="0.70"/>
        {/* Sub-branch */}
        <path d="M 110,321 C 118,307 127,296 133,283"
          stroke={t} strokeWidth="0.95" strokeOpacity="0.62"/>

        {/* Leaves */}
        <path d="M 57,353 Q 48,342 52,338 Q 59,345 57,353 Z" fill={sg}  fillOpacity="0.74" stroke={sg}  strokeWidth="0.45" strokeOpacity="0.55"/>
        <path d="M 57,353 Q 65,362 61,366 Q 55,359 57,353 Z" fill={sg2} fillOpacity="0.68" stroke={sg}  strokeWidth="0.45" strokeOpacity="0.50"/>
        <path d="M 77,342 Q 69,331 73,328 Q 80,335 77,342 Z" fill={sg}  fillOpacity="0.74" stroke={sg}  strokeWidth="0.45" strokeOpacity="0.55"/>
        <path d="M 77,342 Q 85,352 81,356 Q 75,349 77,342 Z" fill={sg2} fillOpacity="0.68" stroke={sg}  strokeWidth="0.45" strokeOpacity="0.50"/>
        <path d="M 97,331 Q 89,320 93,317 Q 100,324 97,331 Z" fill={sg}  fillOpacity="0.70" stroke={sg}  strokeWidth="0.40" strokeOpacity="0.52"/>
        <path d="M 97,331 Q 105,341 101,345 Q 95,338 97,331 Z" fill={sg2} fillOpacity="0.63" stroke={sg} strokeWidth="0.40" strokeOpacity="0.48"/>
        {/* Sub-branch leaves */}
        <path d="M 119,308 Q 111,297 115,294 Q 122,301 119,308 Z" fill={sg}  fillOpacity="0.68" stroke={sg} strokeWidth="0.38" strokeOpacity="0.50"/>
        <path d="M 125,295 Q 133,288 135,292 Q 130,299 125,295 Z" fill={sg2} fillOpacity="0.60" stroke={sg} strokeWidth="0.38" strokeOpacity="0.45"/>

        {/* 5-petal lavender flower at branch 2 tip — centre (156, 293) R=4.5 */}
        <circle cx="156"   cy="288.5" r="2.9" fill={lv}  fillOpacity="0.85" stroke={lvS} strokeWidth="0.68"/>
        <circle cx="160.3" cy="291.6" r="2.9" fill={lv}  fillOpacity="0.85" stroke={lvS} strokeWidth="0.68"/>
        <circle cx="158.6" cy="297.3" r="2.9" fill={lv}  fillOpacity="0.85" stroke={lvS} strokeWidth="0.68"/>
        <circle cx="153.4" cy="297.3" r="2.9" fill={lv}  fillOpacity="0.85" stroke={lvS} strokeWidth="0.68"/>
        <circle cx="151.7" cy="291.6" r="2.9" fill={lv}  fillOpacity="0.85" stroke={lvS} strokeWidth="0.68"/>
        <circle cx="156"   cy="293"   r="2.0" fill="#EDE8F5" fillOpacity="0.96" stroke={lvS} strokeWidth="0.55"/>


        {/* ══════════════════ BRANCH 3  (y ≈ 258) ══════════════════ */}
        <path d="M 40,258 C 62,244 82,232 102,219 C 117,210 129,203 141,194"
          stroke={t} strokeWidth="1.25" strokeOpacity="0.68"/>

        {/* Leaves */}
        <path d="M 59,249 Q 51,238 55,234 Q 62,241 59,249 Z" fill={sg}  fillOpacity="0.73" stroke={sg}  strokeWidth="0.43" strokeOpacity="0.53"/>
        <path d="M 59,249 Q 67,258 63,262 Q 57,256 59,249 Z" fill={sg2} fillOpacity="0.67" stroke={sg}  strokeWidth="0.43" strokeOpacity="0.48"/>
        <path d="M 77,238 Q 69,227 73,223 Q 80,230 77,238 Z" fill={sg}  fillOpacity="0.72" stroke={sg}  strokeWidth="0.43" strokeOpacity="0.53"/>
        <path d="M 77,238 Q 85,248 81,252 Q 75,245 77,238 Z" fill={sg2} fillOpacity="0.65" stroke={sg}  strokeWidth="0.40" strokeOpacity="0.48"/>
        <path d="M 95,227 Q 87,216 91,212 Q 98,219 95,227 Z" fill={sg}  fillOpacity="0.70" stroke={sg}  strokeWidth="0.40" strokeOpacity="0.50"/>
        <path d="M 95,227 Q 103,237 99,241 Q 93,234 95,227 Z" fill={sg2} fillOpacity="0.62" stroke={sg} strokeWidth="0.38" strokeOpacity="0.45"/>
        <path d="M 111,217 Q 103,206 107,202 Q 114,209 111,217 Z" fill={sg} fillOpacity="0.68" stroke={sg} strokeWidth="0.38" strokeOpacity="0.50"/>

        {/* Inline peach flower mid-branch — centre (122, 210) R=3.8 */}
        <circle cx="122"   cy="206.2" r="2.5" fill={pk}  fillOpacity="0.80" stroke={pkS} strokeWidth="0.60"/>
        <circle cx="125.6" cy="208.8" r="2.5" fill={pk}  fillOpacity="0.80" stroke={pkS} strokeWidth="0.60"/>
        <circle cx="124.2" cy="213.4" r="2.5" fill={pk}  fillOpacity="0.80" stroke={pkS} strokeWidth="0.60"/>
        <circle cx="119.8" cy="213.4" r="2.5" fill={pk}  fillOpacity="0.80" stroke={pkS} strokeWidth="0.60"/>
        <circle cx="118.4" cy="208.8" r="2.5" fill={pk}  fillOpacity="0.80" stroke={pkS} strokeWidth="0.60"/>
        <circle cx="122"   cy="210"   r="1.8" fill="#F9EBDB" fillOpacity="0.95" stroke={pkS} strokeWidth="0.48"/>

        {/* Blue bud at branch 3 tip */}
        <path d="M 141,194 C 139,190 138,186 141,184 C 144,186 143,190 141,194"
          stroke={blS} strokeWidth="0.62" strokeOpacity="0.80"/>
        <ellipse cx="141" cy="192" rx="2.9" ry="4.6"
          fill={bl} fillOpacity="0.78" stroke={blS} strokeWidth="0.65"/>


        {/* ══════════════════ BRANCH 4  (y ≈ 158) ══════════════════ */}
        <path d="M 45,158 C 63,144 81,134 97,122 C 110,113 121,105 131,97"
          stroke={t} strokeWidth="1.18" strokeOpacity="0.66"/>

        {/* Leaves */}
        <path d="M 61,149 Q 53,138 57,134 Q 64,141 61,149 Z" fill={sg}  fillOpacity="0.72" stroke={sg}  strokeWidth="0.40" strokeOpacity="0.52"/>
        <path d="M 61,149 Q 69,158 65,162 Q 59,156 61,149 Z" fill={sg2} fillOpacity="0.64" stroke={sg}  strokeWidth="0.40" strokeOpacity="0.47"/>
        <path d="M 77,139 Q 69,128 73,124 Q 80,131 77,139 Z" fill={sg}  fillOpacity="0.70" stroke={sg}  strokeWidth="0.40" strokeOpacity="0.52"/>
        <path d="M 77,139 Q 85,149 81,153 Q 75,146 77,139 Z" fill={sg2} fillOpacity="0.62" stroke={sg}  strokeWidth="0.38" strokeOpacity="0.46"/>
        <path d="M 93,127 Q 85,117 89,113 Q 96,120 93,127 Z" fill={sg}  fillOpacity="0.68" stroke={sg}  strokeWidth="0.38" strokeOpacity="0.50"/>

        {/* 5-petal lavender flower at branch 4 tip — centre (131, 97) R=4 */}
        <circle cx="131"   cy="93"    r="2.7" fill={lv}  fillOpacity="0.84" stroke={lvS} strokeWidth="0.65"/>
        <circle cx="134.8" cy="95.7"  r="2.7" fill={lv}  fillOpacity="0.84" stroke={lvS} strokeWidth="0.65"/>
        <circle cx="133.4" cy="101.2" r="2.7" fill={lv}  fillOpacity="0.84" stroke={lvS} strokeWidth="0.65"/>
        <circle cx="128.6" cy="101.2" r="2.7" fill={lv}  fillOpacity="0.84" stroke={lvS} strokeWidth="0.65"/>
        <circle cx="127.2" cy="95.7"  r="2.7" fill={lv}  fillOpacity="0.84" stroke={lvS} strokeWidth="0.65"/>
        <circle cx="131"   cy="97"    r="1.9" fill="#EDE8F5" fillOpacity="0.96" stroke={lvS} strokeWidth="0.52"/>


        {/* ══════════════════ BRANCH 5  (y ≈ 68 — near tip) ══════════════════ */}
        <path d="M 60,70 C 73,57 85,49 96,39 C 105,31 112,24 119,16"
          stroke={t} strokeWidth="1.10" strokeOpacity="0.63"/>

        {/* Leaves */}
        <path d="M 72,61 Q 64,50 68,47 Q 75,54 72,61 Z" fill={sg}  fillOpacity="0.70" stroke={sg}  strokeWidth="0.38" strokeOpacity="0.50"/>
        <path d="M 72,61 Q 80,71 76,75 Q 70,68 72,61 Z" fill={sg2} fillOpacity="0.62" stroke={sg}  strokeWidth="0.38" strokeOpacity="0.45"/>
        <path d="M 85,51 Q 77,40 81,37 Q 88,44 85,51 Z" fill={sg}  fillOpacity="0.68" stroke={sg}  strokeWidth="0.36" strokeOpacity="0.50"/>
        <path d="M 85,51 Q 93,60 89,64 Q 83,58 85,51 Z" fill={sg2} fillOpacity="0.60" stroke={sg}  strokeWidth="0.36" strokeOpacity="0.44"/>

        {/* Blue bud at branch 5 tip */}
        <path d="M 119,16 C 117,12 116,8 119,6 C 122,8 121,12 119,16"
          stroke={blS} strokeWidth="0.60" strokeOpacity="0.78"/>
        <ellipse cx="119" cy="14" rx="2.5" ry="4.0"
          fill={bl} fillOpacity="0.76" stroke={blS} strokeWidth="0.62"/>


        {/* ══════════════════ TRUNK ACCENTS ══════════════════ */}
        {/* Peach bud at the very top of the trunk */}
        <path d="M 68,14 C 66,10 65,6 68,4 C 71,6 70,10 68,14"
          stroke={pkS} strokeWidth="0.62" strokeOpacity="0.78"/>
        <ellipse cx="68" cy="12" rx="2.5" ry="4.0"
          fill={pk} fillOpacity="0.74" stroke={pkS} strokeWidth="0.62"/>

        {/* Small outward spur at mid-trunk (y ≈ 310) with tiny lavender flower */}
        <path d="M 38,312 C 31,306 26,300 22,295"
          stroke={t} strokeWidth="0.82" strokeOpacity="0.56"/>
        <path d="M 22,295 Q 15,287 19,283 Q 25,289 22,295 Z"
          fill={sg} fillOpacity="0.60" stroke={sg} strokeWidth="0.38" strokeOpacity="0.48"/>
        {/* Tiny 3-petal lavender flower at spur tip */}
        <circle cx="19" cy="281"  r="2.1" fill={lv}  fillOpacity="0.80" stroke={lvS} strokeWidth="0.55"/>
        <circle cx="19" cy="276.8" r="1.8" fill={lv}  fillOpacity="0.70" stroke={lvS} strokeWidth="0.50"/>
        <circle cx="22.8" cy="279.2" r="1.8" fill={lv} fillOpacity="0.70" stroke={lvS} strokeWidth="0.50"/>
        <circle cx="15.2" cy="279.2" r="1.8" fill={lv} fillOpacity="0.70" stroke={lvS} strokeWidth="0.50"/>

        {/* Berry cluster near base of trunk (y ≈ 540) */}
        <path d="M 26,540 C 17,535 13,529 11,523"
          stroke={t} strokeWidth="0.78" strokeOpacity="0.52"/>
        <circle cx="9"  cy="520" r="2.8" fill={pk}  fillOpacity="0.64" stroke={pkS} strokeWidth="0.58"/>
        <circle cx="14" cy="516" r="2.4" fill={lv}  fillOpacity="0.62" stroke={lvS} strokeWidth="0.56"/>
        <circle cx="17" cy="522" r="2.4" fill={bl}  fillOpacity="0.58" stroke={blS} strokeWidth="0.56"/>
        <circle cx="11" cy="526" r="2.1" fill={pk}  fillOpacity="0.58" stroke={pkS} strokeWidth="0.50"/>

      </svg>
    </div>
  );
}
