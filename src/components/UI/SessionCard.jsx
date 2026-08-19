import { T } from "../../styles/theme";

export default function SessionCard({ s, active, onClick }) {
  const elapsed = Math.floor((Date.now() - s.started) / 1000);
  const mm = String(Math.floor(elapsed / 60) % 60).padStart(2,'0');
  const hh = String(Math.floor(elapsed / 3600)).padStart(2,'0');
  const pct = Math.round((s.present / s.students.length) * 100);
  
  return (
    <div onClick={onClick} style={{
      background: active ? T.navy3 : T.navy2,
      border: `1.5px solid ${active ? T.indigo : T.navy3}`,
      borderRadius: 12, padding: "14px 16px", cursor: "pointer",
      transition: "all 0.2s", marginBottom: 8,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: T.white, fontWeight: 700, fontSize: 14 }}>{s.room}</div>
          <div style={{ color: T.slate, fontSize: 11, marginTop: 2 }}>{s.subject}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: T.cyan, fontWeight: 700, fontSize: 13 }}>{hh}:{mm}</div>
          <div style={{ color: s.espStatus === "ONLINE" ? T.green : T.amber, fontSize: 10, marginTop: 2 }}>
            ● ESP32 {s.espStatus}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 10, alignItems: "center" }}>
        <div style={{
          flex: 1, height: 4, background: T.navy, borderRadius: 2, overflow: "hidden",
        }}>
          <div style={{ width: `${pct}%`, height: "100%", background: T.indigo2, borderRadius: 2 }}/>
        </div>
        <div style={{ color: T.slate2, fontSize: 11, whiteSpace: "nowrap" }}>{s.present}/{s.students.length} present</div>
        <div style={{
          background: `${s.avgAfi >= 80 ? T.green : s.avgAfi >= 60 ? T.amber : T.red}22`,
          color: s.avgAfi >= 80 ? T.green : s.avgAfi >= 60 ? T.amber : T.red,
          borderRadius: 6, padding: "1px 7px", fontSize: 11, fontWeight: 700,
        }}>AFI {s.avgAfi}</div>
      </div>
    </div>
  );
}
