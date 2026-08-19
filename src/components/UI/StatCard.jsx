import { T } from "../../styles/theme";

export default function StatCard({ label, value, sub, color, icon }) {
  return (
    <div style={{
      background: T.navy2, borderRadius: 12, padding: "16px 20px",
      border: `1px solid ${color}22`, flex: 1,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ color: T.slate, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</div>
          <div style={{ color, fontSize: 28, fontWeight: 800, lineHeight: 1.2, marginTop: 4 }}>{value}</div>
          {sub && <div style={{ color: T.slate, fontSize: 11, marginTop: 3 }}>{sub}</div>}
        </div>
        <div style={{ fontSize: 22, opacity: 0.7 }}>{icon}</div>
      </div>
    </div>
  );
}
