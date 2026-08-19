import { T } from "../../styles/theme";
import SmartButton from "../UI/SmartButton";

export default function CareerHub() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      
      {/* Aptitude & Reasoning */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.indigo}22` }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>🧠</div>
        <div style={{ color: T.white, fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Aptitude & Logical Reasoning</div>
        <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
          Master quantitative aptitude, logical reasoning, and verbal ability. Crucial for clearing the first round of placements in top companies.
        </div>
        <SmartButton successText="Test Launched" style={{ background: T.indigo2, color: T.white, border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
          Start Aptitude Test
        </SmartButton>
      </div>

      {/* AI 1:1 Interview */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.indigo}22` }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>🤖</div>
        <div style={{ color: T.white, fontSize: 16, fontWeight: 700, marginBottom: 8 }}>AI 1:1 Interview Simulator</div>
        <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
          Practice domain-specific technical interviews with our advanced AI. Receive instant feedback on your answers, body language (via webcam), and technical accuracy.
        </div>
        <SmartButton successText="Interview Scheduled" style={{ background: T.indigo2, color: T.white, border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
          Schedule Mock Interview
        </SmartButton>
      </div>

      {/* AI Resume Maker */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.cyan}22` }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>📄</div>
        <div style={{ color: T.white, fontSize: 16, fontWeight: 700, marginBottom: 8 }}>AI Resume Architect</div>
        <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
          Automatically generate ATS-friendly resumes based on your Learning Path progress. The AI highlights your strongest GeeksforGeeks and LeetCode achievements.
        </div>
        <SmartButton successText="Resume Generated" style={{ background: T.cyan, color: T.white, border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
          Generate Resume
        </SmartButton>
      </div>

      {/* English Communication */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.green}22` }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>🗣️</div>
        <div style={{ color: T.white, fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Fluency & Grammar Coach</div>
        <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
          Improve your professional English communication. Real-time voice analysis tracks filler words, vocabulary diversity, and grammatical correctness.
        </div>
        <SmartButton successText="Mic Connected" style={{ background: T.green, color: T.white, border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
          Practice Speaking
        </SmartButton>
      </div>

      {/* Cross Community GD */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.amber}22` }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>📅</div>
        <div style={{ color: T.white, fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Open Cross-Community GD</div>
        <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
          Schedule and participate in live Group Discussions with students from other colleges and departments. Moderated by AI for equal participation scoring.
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <SmartButton successText="Searching..." style={{ background: T.amber, color: T.white, border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
            Find GD Rooms
          </SmartButton>
          <SmartButton successText="Room Scheduled" style={{ background: "transparent", color: T.amber, border: `1px solid ${T.amber}`, borderRadius: 8, padding: "10px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
            Schedule New
          </SmartButton>
        </div>
      </div>

      {/* AI Project Idea Mentor */}
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.indigo}22`, gridColumn: "1 / -1" }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>💡</div>
        <div style={{ color: T.white, fontSize: 16, fontWeight: 700, marginBottom: 8 }}>AI Project Idea Mentor</div>
        <div style={{ color: T.slate, fontSize: 12, lineHeight: 1.5, marginBottom: 20 }}>
          Stuck on what to build for your final year project or symposium? Chat with our AI Project Mentor to find references, explore unique ideas based on your domain, and get a structured execution roadmap.
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <input type="text" placeholder="I am interested in IoT and Healthcare..." style={{ flex: 1, background: T.navy, border: `1px solid ${T.navy3}`, color: T.white, padding: "10px", borderRadius: 8, outline: "none", fontSize: 12 }} />
          <SmartButton successText="Generating Ideas..." style={{ background: T.indigo2, color: T.white, border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
            Brainstorm Ideas
          </SmartButton>
        </div>
      </div>

    </div>
  );
}
