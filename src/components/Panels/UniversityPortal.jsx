import { T } from "../../styles/theme";
import { useState } from "react";

export default function UniversityPortal() {
  const [regNo, setRegNo] = useState("");
  const [dob, setDob] = useState("");

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      
      {/* Anna University Exam Helper */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.indigo}22` }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>🎓</div>
        <div style={{ color: T.white, fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Anna Univ Exam Prep</div>
        <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
          Access curated study materials, important 2-marks and 16-marks questions, and past year question papers for your current semester subjects.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <button style={{ background: T.navy3, color: T.white, border: `1px solid ${T.indigo}44`, borderRadius: 8, padding: "10px", fontSize: 12, textAlign: "left", cursor: "pointer" }}>
            📘 CS8591 - Computer Networks (Notes & PYQ)
          </button>
          <button style={{ background: T.navy3, color: T.white, border: `1px solid ${T.indigo}44`, borderRadius: 8, padding: "10px", fontSize: 12, textAlign: "left", cursor: "pointer" }}>
            📕 CS8501 - Theory of Computation (Notes & PYQ)
          </button>
        </div>
      </div>

      {/* Built-in Result Checker */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.cyan}22` }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>📊</div>
        <div style={{ color: T.white, fontSize: 16, fontWeight: 700, marginBottom: 8 }}>In-built Result Checker</div>
        <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
          Check your Anna University semester results instantly without leaving the app. Servers are optimized to handle heavy load during result days.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input 
            type="text" placeholder="Register Number (e.g. 113320104001)" value={regNo} onChange={e => setRegNo(e.target.value)}
            style={{ width: "100%", background: T.navy3, border: `1px solid ${T.cyan}33`, color: T.white, padding: "10px", borderRadius: 8, outline: "none", boxSizing: "border-box", fontSize: 12 }}
          />
          <input 
            type="date" placeholder="Date of Birth" value={dob} onChange={e => setDob(e.target.value)}
            style={{ width: "100%", background: T.navy3, border: `1px solid ${T.cyan}33`, color: T.white, padding: "10px", borderRadius: 8, outline: "none", boxSizing: "border-box", fontSize: 12 }}
          />
          <button style={{ background: T.cyan, color: T.white, border: "none", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 700, cursor: "pointer", marginTop: 4 }}>
            Fetch Results
          </button>
        </div>
      </div>

    </div>
  );
}
