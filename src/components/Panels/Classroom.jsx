import { T } from "../../styles/theme";
import { CLASSROOM_FEED } from "../../utils/learningData";

export default function Classroom() {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      {/* ── Left: Stream ── */}
      <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Post Input */}
        <div style={{ background: T.navy2, borderRadius: 14, padding: 18, border: `1px solid ${T.indigo}22` }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: T.indigo2, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
              S
            </div>
            <input 
              type="text" 
              placeholder="Announce something to your class..." 
              style={{
                flex: 1, background: T.navy3, border: `1px solid ${T.navy3}`, borderRadius: 8,
                padding: "10px 14px", color: T.white, outline: "none", fontSize: 13
              }}
            />
          </div>
        </div>

        {/* Feed */}
        {CLASSROOM_FEED.map(item => {
          const isAssignment = item.type === "assignment";
          const icon = isAssignment ? "📝" : item.type === "material" ? "📚" : "📢";
          
          return (
            <div key={item.id} style={{ background: T.navy2, borderRadius: 14, padding: 18, border: `1px solid ${T.indigo}22` }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%", background: T.navy3,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18
                }}>
                  {icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ color: T.white, fontSize: 14, fontWeight: 600 }}>{item.author}</div>
                      <div style={{ color: T.slate, fontSize: 11, marginTop: 2 }}>{item.time}</div>
                    </div>
                    {isAssignment && (
                      <div style={{ textAlign: "right" }}>
                        <div style={{ color: T.amber, fontSize: 11, fontWeight: 700 }}>Due {item.due}</div>
                        <div style={{ color: T.slate, fontSize: 10 }}>{item.points} points</div>
                      </div>
                    )}
                  </div>
                  
                  <div style={{ marginTop: 12 }}>
                    {item.title && <div style={{ color: T.indigo3, fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{item.title}</div>}
                    {item.content && <div style={{ color: T.slate2, fontSize: 13, lineHeight: 1.5 }}>{item.content}</div>}
                  </div>

                  {item.attachments > 0 && (
                    <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                      {Array.from({length: item.attachments}).map((_, i) => (
                        <div key={i} style={{
                          border: `1px solid ${T.navy3}`, borderRadius: 8, padding: "8px 12px",
                          display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: T.white, cursor: "pointer",
                          background: T.navy
                        }}>
                          📄 Attachment_{i+1}.pdf
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Right: Upcoming ── */}
      <div style={{ flex: 1 }}>
        <div style={{ background: T.navy2, borderRadius: 14, padding: 18, border: `1px solid ${T.indigo}22`, position: "sticky", top: 80 }}>
          <div style={{ color: T.white, fontSize: 14, fontWeight: 700, marginBottom: 16 }}>Upcoming</div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ padding: "8px 0", borderBottom: `1px solid ${T.navy3}` }}>
              <div style={{ color: T.slate, fontSize: 11 }}>Due Tomorrow</div>
              <div style={{ color: T.white, fontSize: 13, fontWeight: 600, marginTop: 4, cursor: "pointer" }}>Project: Implement a Red-Black Tree</div>
            </div>
            <div style={{ padding: "8px 0", borderBottom: `1px solid ${T.navy3}` }}>
              <div style={{ color: T.slate, fontSize: 11 }}>Due Friday</div>
              <div style={{ color: T.white, fontSize: 13, fontWeight: 600, marginTop: 4, cursor: "pointer" }}>E-101. Node Voltage Analysis</div>
            </div>
          </div>
          
          <div style={{ color: T.indigo2, fontSize: 12, fontWeight: 600, marginTop: 16, cursor: "pointer", textAlign: "right" }}>
            View all
          </div>
        </div>
      </div>
    </div>
  );
}
