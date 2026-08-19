import { T } from "../../styles/theme";
import SmartButton from "../UI/SmartButton";

export default function Marketplace() {
  const items = [
    { name: "Samosa & Chai Combo", type: "Canteen", cost: "50 XP", icon: "☕" },
    { name: "Library Fine Waiver", type: "Academic", cost: "100 XP", icon: "📚" },
    { name: "Velammal IT Hoodie", type: "Merchandise", cost: "500 XP", icon: "🧥" },
    { name: "1-Day Outpass Fast-Track", type: "Hostel", cost: "250 XP", icon: "🎫" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.indigo}22`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ color: T.white, fontSize: 24, fontWeight: 800 }}>🍔 Student Marketplace</div>
          <div style={{ color: T.slate, fontSize: 13, marginTop: 4 }}>Spend your Leaderboard XP on real-world rewards.</div>
        </div>
        <div style={{ background: T.navy3, border: `1px solid ${T.amber}55`, padding: "12px 24px", borderRadius: 12, display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ fontSize: 24 }}>🪙</div>
          <div>
            <div style={{ color: T.slate, fontSize: 10, fontWeight: 700, textTransform: "uppercase" }}>Your Balance</div>
            <div style={{ color: T.amber, fontSize: 20, fontWeight: 800 }}>1,240 XP</div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {items.map((item, i) => (
          <div key={i} style={{ background: T.navy3, borderRadius: 12, padding: 20, border: `1px solid ${T.indigo}33`, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 48, marginBottom: 16 }}>{item.icon}</div>
              <div style={{ color: T.cyan, fontSize: 10, fontWeight: 800, textTransform: "uppercase", marginBottom: 4 }}>{item.type}</div>
              <div style={{ color: T.white, fontSize: 16, fontWeight: 700, marginBottom: 16 }}>{item.name}</div>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ color: T.amber, fontSize: 14, fontWeight: 800 }}>{item.cost}</div>
              <SmartButton successText="Redeemed!" style={{ background: T.indigo2, color: T.white, border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                Redeem
              </SmartButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
