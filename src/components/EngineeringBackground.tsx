import { cn } from "@/lib/utils";

const traces = [
  "M -50 120 H 220 L 260 160 H 520",
  "M -50 260 H 140 L 180 300 H 900",
  "M -50 40 H 380 L 420 80 H 760 L 800 40 H 1300",
  "M 1300 200 H 980 L 940 240 H 600",
  "M 1300 340 H 1040 L 1000 380 H 300 L 260 420 H -50",
];

const nodes = [
  { cx: 220, cy: 120 },
  { cx: 520, cy: 160 },
  { cx: 140, cy: 260 },
  { cx: 900, cy: 300 },
  { cx: 380, cy: 40 },
  { cx: 760, cy: 80 },
  { cx: 980, cy: 200 },
  { cx: 600, cy: 240 },
  { cx: 1040, cy: 340 },
  { cx: 300, cy: 420 },
];

/**
 * Decorative, low-opacity circuit/PCB background. Pure CSS/SVG — no animation
 * loop — so it stays cheap, and every motion rule collapses to a single frame
 * under prefers-reduced-motion (see globals.css).
 */
export function EngineeringBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <svg
        viewBox="0 0 1300 460"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-[0.35]"
      >
        <defs>
          <linearGradient id="trace-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {traces.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="var(--border-strong)"
            strokeWidth={1.5}
            strokeLinecap="round"
          />
        ))}

        {traces.map((d, i) => (
          <path
            key={`pulse-${i}`}
            d={d}
            fill="none"
            stroke="url(#trace-fade)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="140 900"
            className="engineering-pulse"
            style={{ animationDelay: `${i * 1.1}s` }}
          />
        ))}

        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r={3.5}
            fill="var(--accent)"
            className="engineering-node"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        ))}
      </svg>

      <style>{`
        @keyframes trace-flow {
          from { stroke-dashoffset: 1040; }
          to { stroke-dashoffset: -1040; }
        }
        @keyframes node-pulse {
          0%, 100% { opacity: 0.35; r: 3.5; }
          50% { opacity: 1; r: 4.5; }
        }
        .engineering-pulse {
          animation: trace-flow 7s linear infinite;
        }
        .engineering-node {
          animation: node-pulse 3.2s ease-in-out infinite;
          transform-origin: center;
        }
        @media (prefers-reduced-motion: reduce) {
          .engineering-pulse, .engineering-node {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
