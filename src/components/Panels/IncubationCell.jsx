import { T } from "../../styles/theme";
import SmartButton from "../UI/SmartButton";

export default function IncubationCell() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.amber}22` }}>
        <div style={{ color: T.white, fontSize: 24, fontWeight: 800 }}>🚀 Hackathon & Incubation Cell</div>
        <div style={{ color: T.slate, fontSize: 13, marginTop: 4 }}>Pitch your startup ideas, request college funding, and form inter-department hackathon teams.</div>
      </div>

      {/* Idea Pitching Form */}
      <div style={{ background: T.navy3, borderRadius: 12, padding: 24, border: `1px solid ${T.amber}33` }}>
        <div style={{ fontSize: 32, marginBottom: 16 }}>💡</div>
        <div style={{ color: T.white, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Submit Incubation Pitch</div>
        <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
          If your project was generated and validated by the AI Idea Mentor, submit it directly to the Principal and HODs for hardware funding and incubation support.
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input type="text" placeholder="Project Title (e.g. Smart Med-Dispenser)" style={{ background: T.navy2, border: `1px solid ${T.navy3}`, color: T.white, padding: "12px", borderRadius: 8, outline: "none", fontSize: 13 }} />
          <textarea rows={3} placeholder="Brief Description..." style={{ background: T.navy2, border: `1px solid ${T.navy3}`, color: T.white, padding: "12px", borderRadius: 8, outline: "none", fontSize: 13, fontFamily: "inherit", resize: "vertical" }} />
          <input type="number" placeholder="Requested Funding Amount (₹)" style={{ background: T.navy2, border: `1px solid ${T.navy3}`, color: T.white, padding: "12px", borderRadius: 8, outline: "none", fontSize: 13 }} />
          
          <SmartButton successText="Pitch Submitted to Principal!" style={{ background: T.amber, color: T.navy, border: "none", borderRadius: 8, padding: "12px", fontSize: 14, fontWeight: 800, cursor: "pointer", width: "100%", marginTop: 8 }}>
            Submit for Review
          </SmartButton>
        </div>
      </div>
    </div>
  );
}
