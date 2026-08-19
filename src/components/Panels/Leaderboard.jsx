import { useState } from "react";
import { T } from "../../styles/theme";

export default function Leaderboard() {
  const [tier, setTier] = useState("class"); // class, dept, college

  const students = [
    { id: 1, name: "Rahul S.", points: 9840, dept: "CSE", tier: "class", rank: 1, avatar: "👨‍💻" },
    { id: 2, name: "Priya M.", points: 9650, dept: "CSE", tier: "class", rank: 2, avatar: "👩‍💻" },
    { id: 3, name: "Karthik R.", points: 9420, dept: "CSE", tier: "class", rank: 3, avatar: "👨‍🎓" },
    
    { id: 4, name: "Ananya V.", points: 12500, dept: "ECE", tier: "dept", rank: 1, avatar: "👩‍🔬" },
    { id: 5, name: "Suresh K.", points: 11900, dept: "CSE", tier: "dept", rank: 2, avatar: "👨‍💻" },
    { id: 6, name: "Deepak M.", points: 10800, dept: "IT", tier: "dept", rank: 3, avatar: "👨‍🎓" },

    { id: 7, name: "Mohammed A.", points: 28400, dept: "AI&DS", tier: "college", rank: 1, avatar: "🤖" },
    { id: 8, name: "Sneha R.", points: 27100, dept: "CSE", tier: "college", rank: 2, avatar: "👩‍💻" },
    { id: 9, name: "Vikram P.", points: 26500, dept: "MECH", tier: "college", rank: 3, avatar: "👨‍🔧" },
  ];

  const filtered = students.filter(s => s.tier === tier);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header & Tabs */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.indigo}22` }}>
        <div style={{ color: T.white, fontSize: 24, fontWeight: 800, marginBottom: 16 }}>🏆 Global Leaderboards</div>
        
        <div style={{ display: "flex", gap: 12 }}>
          {["class", "dept", "college"].map(t => (
            <button
              key={t}
              onClick={() => setTier(t)}
              style={{
                background: tier === t ? T.indigo2 : T.navy3,
                color: tier === t ? T.white : T.slate,
                border: "none", borderRadius: 8, padding: "10px 16px",
                fontSize: 13, fontWeight: 700, cursor: "pointer", textTransform: "capitalize",
                transition: "all 0.2s"
              }}
            >
              {t} Rank
            </button>
          ))}
        </div>
      </div>

      {/* Leaderboard List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {filtered.map(s => (
          <div key={s.id} style={{
            background: T.navy2, borderRadius: 12, padding: "16px 24px",
            border: `1px solid ${s.rank === 1 ? T.green : s.rank === 2 ? T.cyan : s.rank === 3 ? T.indigo : T.navy3}`,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            boxShadow: s.rank === 1 ? `0 4px 20px ${T.green}22` : "none"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%", background: T.navy3,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: s.rank === 1 ? T.green : s.rank === 2 ? T.cyan : s.rank === 3 ? T.indigo : T.slate,
                fontWeight: 800, fontSize: 14
              }}>
                #{s.rank}
              </div>
              <div style={{ fontSize: 24 }}>{s.avatar}</div>
              <div>
                <div style={{ color: T.white, fontSize: 15, fontWeight: 700 }}>{s.name}</div>
                <div style={{ color: T.slate, fontSize: 11 }}>{s.dept}</div>
              </div>
            </div>
            
            <div style={{ textAlign: "right" }}>
              <div style={{ color: T.green, fontSize: 18, fontWeight: 800 }}>{s.points.toLocaleString()}</div>
              <div style={{ color: T.slate, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>XP Points</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
