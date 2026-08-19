import { T } from "../../styles/theme";

export default function SystemHealth({ sessions }) {
  const espOnline = sessions.filter(s => s.espStatus === "ONLINE").length;
  const metrics = [
    { label: "ESP32 Nodes Online", value: `${espOnline}/${sessions.length}`, color: espOnline === sessions.length ? T.green : T.amber },
    { label: "Active BLE Sessions", value: sessions.length, color: T.cyan },
    { label: "Avg Token Rotation", value: "42s", color: T.indigo2 },
    { label: "Cluster Heads Active", value: sessions.length, color: T.green },
    { label: "Shadow CHs Ready", value: sessions.length, color: T.amber },
    { label: "Backend Queue Lag", value: "< 200ms", color: T.green },
    { label: "DB Write Throughput", value: "1.2k/s", color: T.green },
    { label: "Offline Buffer Usage", value: "3%", color: T.green },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
      {metrics.map((m, i) => (
        <div key={i} style={{
          background: T.navy3, borderRadius: 10, padding: "10px 14px",
          border: `1px solid ${m.color}22`,
        }}>
          <div style={{ color: T.slate, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>{m.label}</div>
          <div style={{ color: m.color, fontSize: 18, fontWeight: 800, marginTop: 4 }}>{m.value}</div>
        </div>
      ))}
    </div>
  );
}
