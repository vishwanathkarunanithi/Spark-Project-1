import { T } from "../../styles/theme";
import SmartButton from "../UI/SmartButton";

export default function HostelPortal() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.indigo}22` }}>
        <div style={{ color: T.white, fontSize: 24, fontWeight: 800 }}>🏢 Hostel & Mess Management</div>
        <div style={{ color: T.slate, fontSize: 13, marginTop: 4 }}>Manage outpasses, view the daily menu, and log maintenance complaints.</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        
        {/* Mess Menu */}
        <div style={{ background: T.navy3, borderRadius: 12, padding: 24, border: `1px solid ${T.green}33` }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🍲</div>
          <div style={{ color: T.white, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Today's Mess Menu</div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
            <div style={{ background: T.navy2, padding: 12, borderRadius: 8, display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: T.slate, fontSize: 12, fontWeight: 700 }}>Breakfast (7:30 AM)</span>
              <span style={{ color: T.white, fontSize: 12, fontWeight: 600 }}>Idly, Vada, Sambar</span>
            </div>
            <div style={{ background: T.navy2, padding: 12, borderRadius: 8, display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: T.slate, fontSize: 12, fontWeight: 700 }}>Lunch (12:30 PM)</span>
              <span style={{ color: T.white, fontSize: 12, fontWeight: 600 }}>Meals, Chicken Curry / Paneer</span>
            </div>
            <div style={{ background: T.navy2, padding: 12, borderRadius: 8, display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: T.slate, fontSize: 12, fontWeight: 700 }}>Dinner (7:30 PM)</span>
              <span style={{ color: T.white, fontSize: 12, fontWeight: 600 }}>Chapathi, Dal, Fried Rice</span>
            </div>
          </div>
        </div>

        {/* Requests & Maintenance */}
        <div style={{ background: T.navy3, borderRadius: 12, padding: 24, border: `1px solid ${T.amber}33` }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📋</div>
          <div style={{ color: T.white, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Requests & Maintenance</div>
          <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
            Apply for weekend outpasses or report issues in your room (plumbing, electrical, cleaning).
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SmartButton successText="Outpass Requested!" style={{ background: T.amber, color: T.navy, border: "none", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 800, cursor: "pointer", width: "100%" }}>
              Apply for Weekend Outpass
            </SmartButton>
            <SmartButton successText="Complaint Logged" style={{ background: "transparent", color: T.amber, border: `1px solid ${T.amber}55`, borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 800, cursor: "pointer", width: "100%" }}>
              Log Maintenance Issue
            </SmartButton>
          </div>
        </div>

      </div>
    </div>
  );
}
