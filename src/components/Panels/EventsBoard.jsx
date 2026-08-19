import { T } from "../../styles/theme";

export default function EventsBoard() {
  const events = [
    {
      id: 1,
      title: "Kurukshetra 2026 - International Tech Fest",
      college: "CEG, Anna University",
      date: "Feb 15 - Feb 18, 2026",
      type: "Symposium",
      status: "Registration Open",
      color: T.green
    },
    {
      id: 2,
      title: "Shaastra Techathon",
      college: "IIT Madras",
      date: "March 10, 2026",
      type: "Hackathon",
      status: "Closing Soon",
      color: T.amber
    },
    {
      id: 3,
      title: "Invente National Symposium",
      college: "SSN College of Engineering",
      date: "April 02, 2026",
      type: "Paper Presentation",
      status: "Upcoming",
      color: T.cyan
    },
    {
      id: 4,
      title: "Velammal Tech Expo (Internal)",
      college: "Velammal Institute of Technology",
      date: "May 12, 2026",
      type: "Project Expo",
      status: "Mandatory for 3rd Year",
      color: T.indigo2
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      
      {/* Header */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.indigo}22`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: T.white, fontSize: 24, fontWeight: 800 }}>Inter-College Events & Symposiums</div>
          <div style={{ color: T.slate, fontSize: 13, marginTop: 4 }}>Discover and register for hackathons, paper presentations, and tech fests across India to build your resume.</div>
        </div>
        <button style={{ background: T.indigo2, color: T.white, border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
          + Add New Event
        </button>
      </div>

      {/* Events Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
        {events.map(event => (
          <div key={event.id} style={{ background: T.navy3, borderRadius: 12, padding: 20, border: `1px solid ${event.color}33`, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: event.color }}></div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div style={{ color: event.color, fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", background: event.color + "22", padding: "4px 8px", borderRadius: 4 }}>
                {event.type}
              </div>
              <div style={{ color: T.slate, fontSize: 11, fontWeight: 700 }}>{event.date}</div>
            </div>
            
            <div style={{ color: T.white, fontSize: 16, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>
              {event.title}
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: T.slate2, fontSize: 12, marginBottom: 20 }}>
              <span>📍</span> <span>{event.college}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ color: T.slate, fontSize: 11, fontStyle: "italic" }}>{event.status}</div>
              <button style={{ background: "transparent", border: `1px solid ${event.color}`, color: event.color, borderRadius: 6, padding: "6px 12px", fontSize: 11, fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
