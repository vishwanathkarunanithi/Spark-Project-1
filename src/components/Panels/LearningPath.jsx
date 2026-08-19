import { useState } from "react";
import { T } from "../../styles/theme";
import { LEARNING_PATHS } from "../../utils/learningData";

export default function LearningPath() {
  const [domain, setDomain] = useState("Computer Science");
  const path = LEARNING_PATHS[domain];
  const [githubLinked, setGithubLinked] = useState(false);
  const [linkedinLinked, setLinkedinLinked] = useState(false);
  const [autoSync, setAutoSync] = useState(true);

  return (
    <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>
      {/* ── Integrations Header ── */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: "14px 18px", border: `1px solid ${T.indigo}22`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: T.slate, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>External Integrations</div>
          <div style={{ color: T.white, fontSize: 13, marginTop: 4 }}>Link your profiles to showcase your GeeksforGeeks / LeetCode style progress automatically.</div>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <label style={{ display: "flex", alignItems: "center", gap: 6, color: T.slate, fontSize: 12, cursor: "pointer", marginRight: 16 }}>
            <input type="checkbox" checked={autoSync} onChange={e => setAutoSync(e.target.checked)} />
            Auto-Sync Daily Progress
          </label>
          <button 
            onClick={() => setGithubLinked(!githubLinked)}
            style={{
              background: githubLinked ? T.green + "22" : T.navy3, color: githubLinked ? T.green : T.white,
              border: `1px solid ${githubLinked ? T.green : T.slate}`, borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer"
            }}
          >
            {githubLinked ? "✓ GitHub Linked" : "Connect GitHub"}
          </button>
          <button 
            onClick={() => setLinkedinLinked(!linkedinLinked)}
            style={{
              background: linkedinLinked ? T.cyan + "22" : T.navy3, color: linkedinLinked ? T.cyan : T.white,
              border: `1px solid ${linkedinLinked ? T.cyan : T.slate}`, borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer"
            }}
          >
            {linkedinLinked ? "✓ LinkedIn Linked" : "Connect LinkedIn"}
          </button>
        </div>
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        {/* ── Left: Skill Roadmap ── */}
        <div style={{ flex: 1, background: T.navy2, borderRadius: 14, padding: 18, border: `1px solid ${T.indigo}22` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div>
              <div style={{ color: T.slate, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Mastery Roadmap</div>
              <select 
                value={domain} 
                onChange={e => setDomain(e.target.value)}
                style={{
                  background: T.navy3, color: T.white, border: `1px solid ${T.indigo}33`,
                  borderRadius: 6, padding: "4px 8px", fontSize: 13, fontWeight: 600, marginTop: 6,
                  outline: "none", cursor: "pointer"
                }}
              >
                {Object.keys(LEARNING_PATHS).map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ color: T.indigo2, fontSize: 24, fontWeight: 800 }}>{path.progress}%</div>
              <div style={{ color: T.slate, fontSize: 10 }}>Overall Progress</div>
            </div>
          </div>

          <div style={{ position: "relative", paddingLeft: 20 }}>
            {/* Vertical line connecting nodes */}
            <div style={{ position: "absolute", left: 34, top: 20, bottom: 20, width: 2, background: T.navy3, zIndex: 0 }} />
            
            {path.nodes.map((node, idx) => {
              const isCompleted = node.status === "completed";
              const isActive = node.status === "active";
              const color = isCompleted ? T.green : isActive ? T.indigo2 : T.slate;
              
              return (
                <div key={node.id} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, position: "relative", zIndex: 1 }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: "50%", background: isCompleted ? color + "22" : T.navy,
                    border: `2px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, boxShadow: isActive ? `0 0 12px ${color}66` : "none"
                  }}>
                    {isCompleted ? "✓" : isActive ? "⭐" : "🔒"}
                  </div>
                  <div>
                    <div style={{ color: isActive ? T.white : T.slate, fontSize: 14, fontWeight: isActive ? 700 : 600 }}>{node.title}</div>
                    <div style={{ color: T.slate, fontSize: 10, textTransform: "capitalize" }}>{node.type}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Right: Challenges ── */}
        <div style={{ flex: 1, background: T.navy2, borderRadius: 14, padding: 18, border: `1px solid ${T.indigo}22` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div style={{ color: T.slate, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Coding Challenges</div>
            <div style={{ background: T.navy3, padding: "4px 10px", borderRadius: 6, fontSize: 10, color: T.slate, border: `1px solid ${T.indigo}22` }}>
              Based on current node
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {path.challenges.map(chal => {
              const diffColor = chal.difficulty === "Easy" ? T.green : chal.difficulty === "Medium" ? T.amber : T.red;
              const isSolved = chal.status === "Solved";
              return (
                <div key={chal.id} style={{
                  background: T.navy3, borderRadius: 10, padding: "14px 16px",
                  borderLeft: `3px solid ${diffColor}`, display: "flex", justifyContent: "space-between", alignItems: "center",
                  cursor: "pointer", transition: "background 0.2s"
                }}>
                  <div>
                    <div style={{ color: isSolved ? T.slate : T.white, fontSize: 13, fontWeight: 600, textDecoration: isSolved ? "line-through" : "none" }}>{chal.title}</div>
                    <div style={{ display: "flex", gap: 12, marginTop: 6, fontSize: 10 }}>
                      <span style={{ color: diffColor, fontWeight: 700 }}>{chal.difficulty}</span>
                      <span style={{ color: T.slate }}>Acceptance: {chal.acceptance}</span>
                    </div>
                  </div>
                  <div style={{
                    background: isSolved ? T.green + "22" : chal.status === "Attempted" ? T.amber + "22" : T.navy2,
                    color: isSolved ? T.green : chal.status === "Attempted" ? T.amber : T.slate,
                    padding: "4px 10px", borderRadius: 6, fontSize: 10, fontWeight: 700
                  }}>
                    {chal.status}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
