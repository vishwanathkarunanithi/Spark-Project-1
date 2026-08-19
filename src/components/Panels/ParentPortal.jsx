import { T } from "../../styles/theme";
import SmartButton from "../UI/SmartButton";

export default function ParentPortal() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.indigo}22`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: T.white, fontSize: 24, fontWeight: 800 }}>👨‍👩‍👧 Parent & Guardian Portal</div>
          <div style={{ color: T.slate, fontSize: 13, marginTop: 4 }}>Monitor your ward's attendance, financials, and communicate with college administration.</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        
        {/* Financials & Fees Tracker */}
        <div style={{ background: T.navy3, borderRadius: 12, padding: 24, border: `1px solid ${T.amber}33` }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>💳</div>
          <div style={{ color: T.white, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Financials & Fees Tracker</div>
          <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
            Securely track tuition fee payments, bus pass renewals, and scholarship disbursements in real-time.
          </div>
          
          <div style={{ background: T.navy2, padding: 16, borderRadius: 8, marginBottom: 16, border: `1px solid ${T.navy3}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ color: T.slate, fontSize: 12, fontWeight: 700 }}>Semester 5 Tuition</span>
              <span style={{ color: T.green, fontSize: 12, fontWeight: 800 }}>PAID (₹ 85,000)</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: T.slate, fontSize: 12, fontWeight: 700 }}>Bus Pass (Route 42)</span>
              <span style={{ color: T.amber, fontSize: 12, fontWeight: 800 }}>DUE (₹ 15,000)</span>
            </div>
          </div>

          <SmartButton successText="Redirecting to Gateway..." style={{ background: T.amber, color: T.navy, border: "none", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 800, cursor: "pointer", width: "100%" }}>
            Pay Pending Dues
          </SmartButton>
        </div>

        {/* Academic & Principal Connect */}
        <div style={{ background: T.navy3, borderRadius: 12, padding: 24, border: `1px solid ${T.indigo}33` }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🏛️</div>
          <div style={{ color: T.white, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Administration Connect</div>
          <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
            Request leave for your ward or schedule an official appointment with the Principal or Head of Department.
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <select style={{ width: "100%", background: T.navy2, border: `1px solid ${T.indigo}44`, color: T.white, padding: "10px", borderRadius: 8, outline: "none", fontSize: 12 }}>
              <option>Meeting with Principal</option>
              <option>Meeting with CSE HOD</option>
              <option>Apply for Medical Leave (Student)</option>
            </select>
            <SmartButton successText="Request Sent to Office!" style={{ background: T.indigo2, color: T.white, border: "none", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 700, cursor: "pointer", width: "100%" }}>
              Submit Request
            </SmartButton>
          </div>
        </div>

      </div>
    </div>
  );
}
