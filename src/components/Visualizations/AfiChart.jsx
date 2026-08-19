import { T } from "../../styles/theme";
import { clamp, rand } from "../../utils/helpers";

export default function AfiChart({ session }) {
  const points = Array.from({length: 20}, (_, i) => ({
    t: i * 3,
    v: clamp(session.avgAfi + rand(-15, 15), 30, 100),
  }));
  const W = 420, H = 90, pad = { l: 30, r: 10, t: 8, b: 20 };
  const iW = W - pad.l - pad.r, iH = H - pad.t - pad.b;
  const xS = (i) => pad.l + (i / (points.length - 1)) * iW;
  const yS = (v) => pad.t + (1 - v / 100) * iH;
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"}${xS(i)},${yS(p.v)}`).join(" ");
  const areaD = pathD + ` L${xS(points.length-1)},${H - pad.b} L${xS(0)},${H - pad.b} Z`;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id="afiGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={T.indigo2} stopOpacity="0.4"/>
          <stop offset="100%" stopColor={T.indigo2} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={areaD} fill="url(#afiGrad)"/>
      <path d={pathD} fill="none" stroke={T.indigo2} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {[25,50,75,100].map(v => (
        <line key={v} x1={pad.l} x2={W-pad.r} y1={yS(v)} y2={yS(v)}
          stroke={T.navy3} strokeWidth="1" strokeDasharray="3,3"/>
      ))}
      {[0,5,10,15,19].map(i => (
        <text key={i} x={xS(i)} y={H - 4} textAnchor="middle" fill={T.slate} fontSize="8">{points[i].t}m</text>
      ))}
      <text x={pad.l - 6} y={yS(100)} textAnchor="end" fill={T.slate} fontSize="8" dominantBaseline="middle">100</text>
      <text x={pad.l - 6} y={yS(50)} textAnchor="end" fill={T.slate} fontSize="8" dominantBaseline="middle">50</text>
    </svg>
  );
}
