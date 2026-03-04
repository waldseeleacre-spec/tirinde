// TribalPattern — horizontal SVG divider inspired by Noke Koĩ geometric motifs
// Uses palette colors: teal (#5B9C9B) and ochre (#C8955F)

interface TribalPatternProps {
  className?: string
  opacity?: number
}

export function TribalPattern({ className = '', opacity = 1 }: TribalPatternProps) {
  // One repeating "unit" of the pattern, tiled horizontally via SVG pattern
  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="28"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="tribal-unit" x="0" y="0" width="80" height="28" patternUnits="userSpaceOnUse">
            {/* Outer chevrons left */}
            <polyline points="2,14 8,8 14,14 8,20 2,14" fill="none" stroke="#5B9C9B" strokeWidth="1.2" strokeLinejoin="round" />
            {/* Inner chevrons left */}
            <polyline points="6,14 8,12 10,14 8,16 6,14" fill="#5B9C9B" stroke="none" />

            {/* Center diamond */}
            <polygon points="38,6 44,14 38,22 32,14" fill="none" stroke="#C8955F" strokeWidth="1.2" />
            <polygon points="38,10 41,14 38,18 35,14" fill="#C8955F" stroke="none" />

            {/* Outer chevrons right */}
            <polyline points="66,14 72,8 78,14 72,20 66,14" fill="none" stroke="#5B9C9B" strokeWidth="1.2" strokeLinejoin="round" />
            <polyline points="70,14 72,12 74,14 72,16 70,14" fill="#5B9C9B" stroke="none" />

            {/* Dots */}
            <circle cx="20" cy="10" r="1.5" fill="#C8955F" />
            <circle cx="20" cy="18" r="1.5" fill="#C8955F" />
            <circle cx="56" cy="10" r="1.5" fill="#C8955F" />
            <circle cx="56" cy="18" r="1.5" fill="#C8955F" />

            {/* X cross marks */}
            <line x1="23" y1="11" x2="27" y2="17" stroke="#5B9C9B" strokeWidth="1" />
            <line x1="27" y1="11" x2="23" y2="17" stroke="#5B9C9B" strokeWidth="1" />
            <line x1="53" y1="11" x2="57" y2="17" stroke="#5B9C9B" strokeWidth="1" />
            <line x1="57" y1="11" x2="53" y2="17" stroke="#5B9C9B" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="28" fill="url(#tribal-unit)" />
      </svg>
    </div>
  )
}

// A thicker, more prominent variant for major section breaks
export function TribalPatternMajor({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      {/* thin ochre line above */}
      <div className="w-full h-px" style={{ background: '#C8955F', opacity: 0.4 }} />
      <TribalPattern className="py-1" />
      {/* thin ochre line below */}
      <div className="w-full h-px" style={{ background: '#C8955F', opacity: 0.4 }} />
    </div>
  )
}
