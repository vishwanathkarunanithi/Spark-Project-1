import { T } from "../../styles/theme";

export default function CareerRoadmapper() {
  return (
    <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>
      
      {/* Target Salary Predictor Header */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.green}44`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: T.green, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>Target Trajectory</div>
          <div style={{ color: T.white, fontSize: 24, fontWeight: 800, marginTop: 4 }}>1 Crore Per Annum (Meta / FAANG)</div>
          <div style={{ color: T.slate, fontSize: 13, marginTop: 4 }}>Current Domain: Full-Stack & Systems Architecture</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: T.slate, fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>Readiness Score</div>
          <div style={{ color: T.green, fontSize: 32, fontWeight: 800 }}>14%</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* Anna University Syllabus Tracker */}
        <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.indigo}22` }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ color: T.white, fontSize: 16, fontWeight: 700 }}>Anna University Syllabus Map</div>
            <div style={{ color: T.indigo2, fontSize: 12, fontWeight: 700 }}>Semester 5</div>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { code: "CS8591", name: "Computer Networks", status: "In Progress", color: T.amber },
              { code: "CS8501", name: "Theory of Computation", status: "Not Started", color: T.slate },
              { code: "CS8592", name: "Object Oriented Analysis", status: "Completed", color: T.green },
            ].map(sub => (
              <div key={sub.code} style={{ padding: "12px", background: T.navy3, borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ color: T.white, fontSize: 13, fontWeight: 600 }}>{sub.name}</div>
                  <div style={{ color: T.slate, fontSize: 11 }}>{sub.code}</div>
                </div>
                <div style={{ color: sub.color, fontSize: 11, fontWeight: 700 }}>{sub.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Company PYQs & Meta Resources */}
        <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.indigo}22` }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ color: T.white, fontSize: 16, fontWeight: 700 }}>Company Specific PYQs</div>
            <select style={{ background: T.navy3, color: T.white, border: `1px solid ${T.indigo}33`, borderRadius: 6, padding: "4px 8px", fontSize: 11, outline: "none" }}>
              <option>Meta</option>
              <option>Google</option>
              <option>Amazon</option>
              <option>TCS (Core)</option>
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { q: "Design a rate limiter", diff: "Hard", video: "▶️ Watch Meta Solution" },
              { q: "LRU Cache Implementation", diff: "Medium", video: "▶️ Watch Meta Solution" },
              { q: "Binary Tree Maximum Path Sum", diff: "Hard", video: "▶️ Watch Meta Solution" },
            ].map((pyq, i) => (
              <div key={i} style={{ padding: "12px", background: T.navy3, borderRadius: 8, borderLeft: `3px solid ${pyq.diff === "Hard" ? T.red : T.amber}` }}>
                <div style={{ color: T.white, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{pyq.q}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: pyq.diff === "Hard" ? T.red : T.amber, fontSize: 11, fontWeight: 700 }}>{pyq.diff}</div>
                  <div style={{ color: T.cyan, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>{pyq.video}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
