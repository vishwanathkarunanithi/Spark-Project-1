import { T } from "../../styles/theme";
import SmartButton from "../UI/SmartButton";

export default function AcademicVault() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.cyan}22` }}>
        <div style={{ color: T.white, fontSize: 24, fontWeight: 800 }}>📚 Anna University Vault & Library</div>
        <div style={{ color: T.slate, fontSize: 13, marginTop: 4 }}>Access the last 10 years of PYQs and sync with the physical Velammal campus library.</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* PYQ Database */}
        <div style={{ background: T.navy3, borderRadius: 12, padding: 24, border: `1px solid ${T.indigo}33` }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📝</div>
          <div style={{ color: T.white, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Past Year Question Bank (PYQ)</div>
          <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
            Automatically categorized by Regulation (R2017, R2021) and Department. All PDFs are heavily compressed for fast mobile access.
          </div>
          <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
            <select style={{ flex: 1, background: T.navy2, border: `1px solid ${T.indigo}44`, color: T.white, padding: "10px", borderRadius: 8, outline: "none", fontSize: 12 }}>
              <option>Computer Networks</option>
              <option>Data Structures</option>
              <option>Engineering Mathematics II</option>
            </select>
          </div>
          <SmartButton successText="Downloading PDF..." style={{ background: T.indigo2, color: T.white, border: "none", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 700, cursor: "pointer", width: "100%" }}>
            Fetch PYQ Archive
          </SmartButton>
        </div>

        {/* Physical Library Sync */}
        <div style={{ background: T.navy3, borderRadius: 12, padding: 24, border: `1px solid ${T.green}33` }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🏫</div>
          <div style={{ color: T.white, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Campus Library Availability Tracker</div>
          <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
            Don't walk all the way to the library just to find the book is taken! Search the database to see live rack availability and borrow status.
          </div>
          <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
            <input type="text" placeholder="Search by Book Title or Author..." style={{ flex: 1, background: T.navy2, border: `1px solid ${T.green}44`, color: T.white, padding: "10px", borderRadius: 8, outline: "none", fontSize: 12, boxSizing: "border-box" }} />
          </div>
          <SmartButton successText="Book Available (Rack 4A)" style={{ background: T.green, color: T.navy, border: "none", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 800, cursor: "pointer", width: "100%" }}>
            Check Shelf Status
          </SmartButton>
        </div>
      </div>
    </div>
  );
}
