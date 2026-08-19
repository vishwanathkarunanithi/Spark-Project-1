import { T } from "../../styles/theme";

export default function CommunicationHub() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      
      {/* Allocated Mentor (Mentor Connect) */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.green}33`, gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <div style={{ fontSize: 48 }}>👩‍🏫</div>
          <div>
            <div style={{ color: T.green, fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Your Allocated College Mentor</div>
            <div style={{ color: T.white, fontSize: 20, fontWeight: 800 }}>Dr. R. Shalini</div>
            <div style={{ color: T.slate, fontSize: 13, marginTop: 2 }}>Associate Professor - AI & DS Department</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button style={{ background: T.navy3, color: T.white, border: `1px solid ${T.green}44`, borderRadius: 8, padding: "10px 16px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
            View Progress Report
          </button>
          <button style={{ background: T.green, color: T.navy, border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 13, fontWeight: 800, cursor: "pointer" }}>
            Schedule 1:1 Meeting
          </button>
        </div>
      </div>

      {/* 1:1 Staff Doubts */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.indigo}22` }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>💬</div>
        <div style={{ color: T.white, fontSize: 16, fontWeight: 700, marginBottom: 8 }}>1:1 Staff Connect (Velammal)</div>
        <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 16 }}>
          Directly message your professors. Real-time availability shown.
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: T.navy3, padding: "8px 12px", borderRadius: 8 }}>
            <div>
              <div style={{ color: T.white, fontSize: 13, fontWeight: 700 }}>Dr. B. Murugeshwari</div>
              <div style={{ color: T.slate, fontSize: 11 }}>Professor & HOD - CSE</div>
            </div>
            <div style={{ color: T.green, fontSize: 10, fontWeight: 800 }}>ONLINE</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: T.navy3, padding: "8px 12px", borderRadius: 8 }}>
            <div>
              <div style={{ color: T.white, fontSize: 13, fontWeight: 700 }}>Dr. S. Soundar Rajan</div>
              <div style={{ color: T.slate, fontSize: 11 }}>Associate Professor - ECE</div>
            </div>
            <div style={{ color: T.slate, fontSize: 10, fontWeight: 800 }}>BUSY</div>
          </div>
        </div>

        <button style={{ background: T.indigo2, color: T.white, border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer", width: "100%" }}>
          Start New Message
        </button>
      </div>

      {/* Open Community Forum */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.cyan}22` }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>🌐</div>
        <div style={{ color: T.white, fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Open Community Forum</div>
        <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
          Post open questions to the entire Velammal community. Learn from peers, answer questions to earn reputation points, and share resources.
        </div>
        <button style={{ background: T.cyan, color: T.white, border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
          Browse Forum
        </button>
      </div>

      {/* Zoom Scheduler */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.amber}22` }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>📹</div>
        <div style={{ color: T.white, fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Meeting Scheduler</div>
        <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
          Request a live video meeting (Zoom equivalent) with staff or project guides. View their available calendar slots and book instantly.
        </div>
        <button style={{ background: T.amber, color: T.white, border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
          Schedule Video Call
        </button>
      </div>

      {/* IT Helpdesk */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.red}22` }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>🛠️</div>
        <div style={{ color: T.white, fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Campus Helpdesk</div>
        <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
          Raise tickets for administrative issues, hostel maintenance, Wi-Fi connectivity problems, or library book requests.
        </div>
        <button style={{ background: T.red, color: T.white, border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
          Raise Ticket
        </button>
      </div>

    </div>
  );
}
