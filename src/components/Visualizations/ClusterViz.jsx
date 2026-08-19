import { T } from "../../styles/theme";

export default function ClusterViz({ session }) {
  const ch = session.students.find(s => s.clusterHead);
  const sh = session.students.find(s => s.shadowHead);
  // eslint-disable-next-line no-unused-vars
  const others = session.students.filter(s => !s.clusterHead && !s.shadowHead).slice(0, 6);
  
  const NodeEl = ({ label, color, sub, x, y }) => (
    <div style={{ position: "absolute", left: x, top: y, transform: "translate(-50%,-50%)", textAlign: "center" }}>
      <div style={{
        width: 44, height: 44, borderRadius: "50%", background: color + "22",
        border: `2px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto", fontSize: 18, boxShadow: `0 0 12px ${color}44`,
      }}>📱</div>
      <div style={{ color, fontSize: 9, fontWeight: 700, marginTop: 3 }}>{label}</div>
      {sub && <div style={{ color: T.slate, fontSize: 9 }}>{sub}</div>}
    </div>
  );
  
  return (
    <div style={{ position: "relative", height: 180, background: T.navy3, borderRadius: 12,
      border: `1px solid ${T.indigo}22`, overflow: "hidden" }}>
      {/* ESP32 centre */}
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", textAlign: "center", zIndex: 2 }}>
        <div style={{
          width: 52, height: 52, borderRadius: 12, background: T.cyan + "22",
          border: `2px solid ${T.cyan}`, display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto", fontSize: 22, boxShadow: `0 0 20px ${T.cyan}44`,
          animation: "pulse-ring 2s ease-out infinite",
        }}>📡</div>
        <div style={{ color: T.cyan, fontSize: 9, fontWeight: 700, marginTop: 3 }}>ESP32</div>
        <div style={{ color: T.slate, fontSize: 8 }}>Token: {session.tokenRotation}s</div>
      </div>
      {/* Nodes */}
      {ch && <NodeEl label="PRIMARY CH" color={T.indigo} sub={ch.name.split(' ')[0]} x="22%" y="30%"/>}
      {sh && <NodeEl label="SHADOW CH" color={T.amber} sub={sh.name.split(' ')[0]} x="78%" y="30%"/>}
      <NodeEl label="Node" color={T.slate} x="15%" y="72%"/>
      <NodeEl label="Node" color={T.slate} x="38%" y="80%"/>
      <NodeEl label="Node" color={T.slate} x="62%" y="80%"/>
      <NodeEl label="Node" color={T.slate} x="85%" y="72%"/>
      {/* Failover badge */}
      {session.shadowActive && (
        <div style={{
          position: "absolute", top: 8, right: 8, background: T.amber + "22",
          border: `1px solid ${T.amber}`, borderRadius: 6, padding: "2px 8px",
          color: T.amber, fontSize: 9, fontWeight: 700,
        }}>⚡ SHADOW ACTIVE</div>
      )}
    </div>
  );
}
