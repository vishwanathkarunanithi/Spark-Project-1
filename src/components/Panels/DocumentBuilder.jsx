import { T } from "../../styles/theme";
import SmartButton from "../UI/SmartButton";

export default function DocumentBuilder() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.indigo}22`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: T.white, fontSize: 24, fontWeight: 800 }}>📄 Document Builder Suite</div>
          <div style={{ color: T.slate, fontSize: 13, marginTop: 4 }}>Auto-generate Journals, Presentations, and PDFs directly from your cloud IDE and class data.</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
        
        {/* Lab Journal Automator */}
        <div style={{ background: T.navy3, borderRadius: 12, padding: 24, border: `1px solid ${T.indigo}33` }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📓</div>
          <div style={{ color: T.white, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>AI Journal & Record Preparer</div>
          <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 24 }}>
            Pulls your code, output screenshots, and logic diagrams from the Cloud Workbenches and auto-formats them into the standard Velammal Lab Record format.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <select style={{ width: "100%", background: T.navy2, border: `1px solid ${T.indigo}44`, color: T.white, padding: "10px", borderRadius: 8, outline: "none", fontSize: 12 }}>
              <option>Data Structures Lab (CS8381)</option>
              <option>Object Oriented Programming Lab (CS8383)</option>
              <option>Networks Lab (CS8581)</option>
            </select>
            <SmartButton successText="Journal Generated!" style={{ background: T.indigo2, color: T.white, border: "none", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 700, cursor: "pointer", width: "100%" }}>
              Generate Journal PDF
            </SmartButton>
          </div>
        </div>

        {/* PPT Maker */}
        <div style={{ background: T.navy3, borderRadius: 12, padding: 24, border: `1px solid ${T.cyan}33` }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📊</div>
          <div style={{ color: T.white, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Smart PPT Maker</div>
          <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 24 }}>
            Input your project title or abstract, and the AI will generate a structured 10-slide presentation (Introduction, Literature Review, Methodology, Results) ready for your symposium.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input type="text" placeholder="Enter Project Title / Topic..." style={{ width: "100%", background: T.navy2, border: `1px solid ${T.cyan}44`, color: T.white, padding: "10px", borderRadius: 8, outline: "none", fontSize: 12, boxSizing: "border-box" }} />
            <SmartButton successText="Slides Compiled!" style={{ background: T.cyan, color: T.navy, border: "none", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 800, cursor: "pointer", width: "100%" }}>
              Create Presentation
            </SmartButton>
          </div>
        </div>

        {/* PDF Converter */}
        <div style={{ background: T.navy3, borderRadius: 12, padding: 24, border: `1px solid ${T.green}33` }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📑</div>
          <div style={{ color: T.white, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Universal PDF Converter</div>
          <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 24 }}>
            Merge images of your handwritten assignments, crop out backgrounds, and compile them into a compressed PDF with standard college front-page headers.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ width: "100%", background: T.navy2, border: `1px dashed ${T.green}55`, color: T.slate, padding: "16px", borderRadius: 8, textAlign: "center", fontSize: 11, cursor: "pointer" }}>
              Drag & Drop Images Here
            </div>
            <SmartButton successText="PDF Ready for Download" style={{ background: T.green, color: T.navy, border: "none", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 800, cursor: "pointer", width: "100%" }}>
              Compile to PDF
            </SmartButton>
          </div>
        </div>

        {/* Live Digital Portfolio */}
        <div style={{ background: T.navy3, borderRadius: 12, padding: 24, border: `1px solid ${T.amber}33` }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌐</div>
          <div style={{ color: T.white, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Live Digital Portfolio</div>
          <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 24 }}>
            Stop sending static PDFs. Instantly deploy a live website that pulls your Leaderboard XP, AI Mentor projects, and coding stats for recruiters to see.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ background: T.navy2, border: `1px solid ${T.navy3}`, color: T.slate, padding: "12px", borderRadius: 8, fontSize: 11, textAlign: "center" }}>
              velammal.tech/portfolio/your-name
            </div>
            <SmartButton successText="Portfolio Deployed!" style={{ background: T.amber, color: T.navy, border: "none", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 800, cursor: "pointer", width: "100%" }}>
              Generate Public Link
            </SmartButton>
          </div>
        </div>

      </div>
    </div>
  );
}
