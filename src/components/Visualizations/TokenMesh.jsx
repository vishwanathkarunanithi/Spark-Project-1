import { useState, useEffect } from "react";
import { T } from "../../styles/theme";

export default function TokenMesh({ active }) {
  const cells = 8 * 5;
  const [ticks, setTicks] = useState(() => Array.from({length: cells}, () => Math.random() > 0.3));
  
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setTicks(prev => prev.map(v => Math.random() > 0.12 ? v : !v));
    }, 900);
    return () => clearInterval(id);
  }, [active]);
  
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 4, padding: 12,
      background: T.navy3, borderRadius: 10, border: `1px solid ${T.indigo}22`,
    }}>
      {ticks.map((on, i) => (
        <div key={i} style={{
          width: 10, height: 10, borderRadius: 3,
          background: on ? T.cyan : T.navy2,
          boxShadow: on ? `0 0 6px ${T.cyan}88` : "none",
          transition: "background 0.4s, box-shadow 0.4s",
        }}/>
      ))}
    </div>
  );
}
