import { T } from "../../styles/theme";

export default function Alerts({ sessions }) {
  const alerts = [];
  sessions.forEach(s => {
    if (s.espStatus === "WARN") alerts.push({ type: "warn", msg: `ESP32 signal weak in ${s.room}`, time: "2m ago" });
    s.students.forEach(st => {
      if (!st.present && st.token === "MISSING") alerts.push({ type: "error", msg: `Tamper event: ${st.id} in ${s.room}`, time: "5m ago" });
    });
    if (s.avgAfi < 65) alerts.push({ type: "info", msg: `Low engagement in ${s.room} (AFI ${s.avgAfi})`, time: "now" });
  });
  
  return (
    <div style={{ maxHeight: 220, overflowY: "auto" }}>
      {alerts.slice(0, 8).map((a, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "flex-start", gap: 10, padding: "9px 12px",
          borderBottom: `1px solid ${T.navy3}`, background: i % 2 === 0 ? T.navy2 : "transparent",
        }}>
          <span style={{ fontSize: 14, marginTop: 1 }}>{a.type === "warn" ? "⚠️" : a.type === "error" ? "🚨" : "ℹ️"}</span>
          <div style={{ flex: 1 }}>
            <div style={{ color: T.white, fontSize: 12 }}>{a.msg}</div>
          </div>
          <div style={{ color: T.slate, fontSize: 10, whiteSpace: "nowrap" }}>{a.time}</div>
        </div>
      ))}
      {alerts.length === 0 && <div style={{ color: T.slate, fontSize: 12, padding: 16 }}>All systems nominal.</div>}
    </div>
  );
}
