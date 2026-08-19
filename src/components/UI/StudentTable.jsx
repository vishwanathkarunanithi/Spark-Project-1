import { useState } from "react";
import { T } from "../../styles/theme";

export default function StudentTable({ students }) {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? students
    : filter === "absent" ? students.filter(s => !s.present)
    : students.filter(s => s.afi < 70);
    
  return (
    <div>
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        {["all","absent","low-afi"].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            padding: "4px 12px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 11, fontWeight: 600,
            background: filter === f ? T.indigo : T.navy3,
            color: filter === f ? T.white : T.slate,
          }}>{f === "all" ? "All Students" : f === "absent" ? "Absent" : "Low AFI"}</button>
        ))}
      </div>
      <div style={{ maxHeight: 280, overflowY: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead style={{ position: "sticky", top: 0, background: T.navy3 }}>
            <tr>
              {["Reg No","Name","Status","AFI","Pocket","Role","Token"].map(h => (
                <th key={h} style={{ padding: "8px 10px", color: T.slate, fontWeight: 600, textAlign: "left", fontSize: 10, letterSpacing: "0.06em" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((s, i) => (
              <tr key={s.id} style={{ background: i % 2 === 0 ? T.navy2 : T.navy3 }}>
                <td style={{ padding: "7px 10px", color: T.slate, fontFamily: "monospace", fontSize: 10 }}>{s.id}</td>
                <td style={{ padding: "7px 10px", color: T.white, fontWeight: 600 }}>{s.name}</td>
                <td style={{ padding: "7px 10px" }}>
                  <span style={{
                    background: s.present ? T.green + "22" : T.red + "22",
                    color: s.present ? T.green : T.red,
                    borderRadius: 5, padding: "2px 8px", fontWeight: 700, fontSize: 10,
                  }}>{s.present ? "PRESENT" : "ABSENT"}</span>
                </td>
                <td style={{ padding: "7px 10px" }}>
                  <span style={{ color: s.afi >= 80 ? T.green : s.afi >= 60 ? T.amber : T.red, fontWeight: 700 }}>{s.afi}%</span>
                </td>
                <td style={{ padding: "7px 10px", color: T.slate }}>{s.pocketTime}m</td>
                <td style={{ padding: "7px 10px" }}>
                  {s.clusterHead ? <span style={{ color: T.indigo2, fontWeight: 700, fontSize: 10 }}>● PRIMARY CH</span>
                    : s.shadowHead ? <span style={{ color: T.amber, fontWeight: 700, fontSize: 10 }}>● SHADOW CH</span>
                    : <span style={{ color: T.slate, fontSize: 10 }}>Node</span>}
                </td>
                <td style={{ padding: "7px 10px" }}>
                  <span style={{ color: s.token === "VALID" ? T.green : T.red, fontWeight: 700, fontSize: 10 }}>{s.token}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
