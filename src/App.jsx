import { useState, useEffect } from "react";
import { T } from "./styles/theme";
import { useAuth } from "./context/AuthContext";
import { useESP32 } from "./hooks/useESP32";
import { useWindowSize } from "./hooks/useWindowSize";
import Login from "./components/Auth/Login";
import NodeLinker from "./components/Panels/NodeLinker";
import ParentPortal from "./components/Panels/ParentPortal";

import AfiRing from "./components/Visualizations/AfiRing";
import AfiChart from "./components/Visualizations/AfiChart";
import ClusterViz from "./components/Visualizations/ClusterViz";
import TokenMesh from "./components/Visualizations/TokenMesh";
import SparkBar from "./components/Visualizations/SparkBar";
import PulseDot from "./components/UI/PulseDot";
import StatCard from "./components/UI/StatCard";
import SessionCard from "./components/UI/SessionCard";
import StudentTable from "./components/UI/StudentTable";
import Alerts from "./components/Panels/Alerts";
import PrivacyPanel from "./components/Panels/PrivacyPanel";
import SystemHealth from "./components/Panels/SystemHealth";
import LearningPath from "./components/Panels/LearningPath";
import Classroom from "./components/Panels/Classroom";
import CareerHub from "./components/Panels/CareerHub";
import CommunicationHub from "./components/Panels/CommunicationHub";
import CareerRoadmapper from "./components/Panels/CareerRoadmapper";
import CloudWorkbenches from "./components/Panels/CloudWorkbenches";
import UniversityPortal from "./components/Panels/UniversityPortal";
import EventsBoard from "./components/Panels/EventsBoard";
import CampusTracker from "./components/Panels/CampusTracker";
import Leaderboard from "./components/Panels/Leaderboard";
import DocumentBuilder from "./components/Panels/DocumentBuilder";
import AlumniPortal from "./components/Panels/AlumniPortal";
import AcademicVault from "./components/Panels/AcademicVault";
import IncubationCell from "./components/Panels/IncubationCell";
import Marketplace from "./components/Panels/Marketplace";
import HostelPortal from "./components/Panels/HostelPortal";
import { rand } from "./utils/helpers";


export default function App() {
  const { role, department, user, logout } = useAuth();
  const { sessions, isLinked, linkNode, unlinkNode } = useESP32(role, department);
  const { width } = useWindowSize();
  const isMobile = width < 768;
  
  const [tab, setTab] = useState("live");
  const [selectedSession, setSelectedSession] = useState(null);

  // Auto-select first session when linked
  if (isLinked && !selectedSession && sessions.length > 0) {
    setSelectedSession(sessions[0]);
  }

  const totalStudents = sessions.reduce((a, s) => a + s.students.length, 0);
  const totalPresent  = sessions.reduce((a, s) => a + s.present, 0);
  const avgAfi        = sessions.length ? Math.round(sessions.reduce((a, s) => a + s.avgAfi, 0) / sessions.length) : 0;
  const tamperEvents  = sessions.flatMap(s => s.students).filter(s => s.token === "MISSING").length;

  let ALL_TABS = [
    { id: "live",     label: "📡 Live Node Data", icon: "📡" },
    { id: "parent",   label: "👨‍👩‍👧 Parent Portal", icon: "👨‍👩‍👧" },
    { id: "students", label: "👥 Student Analysis", icon: "👥" },
    { id: "health",   label: "⚙️ System Health", icon: "⚙️" },
    { id: "alerts",   label: "🚨 Alerts", icon: "🚨" },
    { id: "notes",    label: "📝 Class Notes", icon: "📝" },
    { id: "privacy",  label: "🔐 Privacy & Compliance", icon: "🔐" },
    { id: "tracker",  label: "📍 Campus Tracker", icon: "📍" },
    { id: "events",   label: "🎉 Inter-College Events", icon: "🎉" },
    { id: "leaderboard", label: "🏆 Leaderboard", icon: "🏆" },
    { id: "marketplace", label: "🍔 Student Store", icon: "🍔" },
    { id: "documents", label: "📄 Document Builder", icon: "📄" },
    { id: "vault", label: "📚 Academic Vault", icon: "📚" },
    { id: "communication", label: "💬 Communication Hub", icon: "💬" },
    { id: "alumni", label: "🎓 Alumni Network", icon: "🎓" },
    { id: "roadmapper", label: "🗺️ 4-Year Roadmapper", icon: "🗺️" },
    { id: "incubation", label: "🚀 Incubation Cell", icon: "🚀" },
    { id: "workbenches",label: "💻 Cloud IDEs", icon: "💻" },
    { id: "university", label: "🎓 University Portal", icon: "🎓" },
    { id: "learning", label: "📚 Learning Path", icon: "📚" },
    { id: "classroom",label: "🏫 Classroom", icon: "🏫" },
    { id: "hostel",   label: "🏢 Hostel Portal", icon: "🏢" },
    { id: "career",   label: "🚀 AI Career Hub", icon: "🚀" },
  ];

  // If mobile, restrict features to just attendance and notes
  if (isMobile) {
    ALL_TABS = ALL_TABS.filter(t => ["live", "students", "alerts", "notes", "health"].includes(t.id));
  } else if (role === "parent") {
    // Parent restriction
    ALL_TABS = ALL_TABS.filter(t => ["parent", "tracker", "communication"].includes(t.id));
  } else {
    // Non-parent filter out parent portal
    ALL_TABS = ALL_TABS.filter(t => t.id !== "parent");
  }

  // Ensure current tab is valid
  useEffect(() => {
    if (!ALL_TABS.find(t => t.id === tab)) {
      setTab(role === "parent" ? "parent" : "live");
    }
  }, [isMobile, role, tab, ALL_TABS]);

  if (!user) {
    return <Login />;
  }

  return (
    <div style={{
      minHeight: "100vh", background: T.navy, color: T.white,
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif", fontSize: 13,
      transition: "background 0.3s, color 0.3s"
    }}>
      {/* ── Header ── */}
      <div style={{
        background: T.navy2, borderBottom: `1px solid ${T.indigo}33`,
        padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64, position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 9, background: T.navy2,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 4px 12px rgba(0,0,0,0.2), inset 0 1px 1px ${T.navy3}`,
            border: `1px solid ${T.navy3}`, overflow: "hidden"
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21L2 3H8L12 13.5L16 3H22L12 21Z" fill={T.indigo} />
              <path d="M12 21L7.5 10H16.5L12 21Z" fill={T.cyan} />
            </svg>
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em", color: T.white }}>
              Velammal Tech Companion
            </h1>
            <div style={{ color: T.slate, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {role === "principal" ? "Campus Overview" : role === "hod" ? "Department Overview" : role === "parent" ? "Parent Access" : role === "student" ? "Student Portal" : "Classroom Node Dashboard"}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {isLinked && (
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <PulseDot color={T.green} size={7}/>
              <span style={{ color: T.green, fontSize: 11, fontWeight: 600 }}>ESP32 LIVE</span>
            </div>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: T.white }}>{user.name}</div>
              <div style={{ fontSize: 10, color: T.slate, textTransform: "uppercase" }}>{role}</div>
            </div>
            <div style={{ width: 32, height: 32, borderRadius: 16, background: T.indigo2, color: T.white, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
              {user.name[0]}
            </div>
            <button onClick={logout} style={{ background: "transparent", border: `1px solid ${T.red}44`, color: T.red, padding: "4px 8px", borderRadius: 6, cursor: "pointer", fontSize: 10 }}>Logout</button>
          </div>
        </div>
      </div>

      {/* ── Role: Teacher (Empty State / Node Linker) ── */}
      {role === "teacher" && !isLinked && (
        <NodeLinker onLink={linkNode} />
      )}

      {/* ── Main Dashboard (Visible if Principal/HOD/Parent or Linked Teacher) ── */}
      {((role !== "teacher") || isLinked) && (
        <>
          {/* ── Top stats (Hidden for Parents) ── */}
          {role !== "parent" && (
            <div style={{ padding: "16px 24px 0", display: "flex", gap: 12 }}>
              <StatCard label="Total Students" value={totalStudents} sub={`${totalPresent} present`} color={T.indigo2} icon="👥"/>
              <StatCard label="Attendance Rate" value={totalStudents ? `${Math.round(totalPresent/totalStudents*100)}%` : "0%"} sub="Active sessions" color={T.green} icon="✅"/>
              <StatCard label="Avg Focus (AFI)" value={`${avgAfi}%`} sub="Real-time" color={avgAfi >= 80 ? T.green : avgAfi > 0 ? T.amber : T.slate} icon="🎯"/>
              <StatCard label="Tamper Events" value={tamperEvents} sub="UUID mismatches" color={tamperEvents > 0 ? T.red : T.green} icon="🚨"/>
              <StatCard label="Active ESP32 Nodes" value={sessions.filter(s=>s.espStatus==="ONLINE").length} sub={`of ${sessions.length} nodes`} color={T.cyan} icon="📡"/>
            </div>
          )}

          {/* Main Layout Area */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 24, marginTop: 24, flex: 1, overflow: "hidden", padding: "0 24px" }}>
            
            {/* Sidebar (Desktop) or Horizontal Nav (Mobile) */}
            <div style={{
              width: isMobile ? "100%" : 260,
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              gap: 8,
              overflowX: isMobile ? "auto" : "visible",
              paddingBottom: isMobile ? 8 : 0,
              flexShrink: 0
            }}>
              <div style={{ color: T.slate, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", paddingLeft: 12, marginBottom: isMobile ? 0 : 8, display: isMobile ? "none" : "block" }}>Modules</div>
              {ALL_TABS.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  style={{
                    background: tab === t.id ? T.indigo2 : "transparent",
                    color: tab === t.id ? T.white : T.slate,
                    border: "none", borderRadius: 8, padding: "12px 16px",
                    textAlign: "left", fontSize: 13, fontWeight: 600, cursor: "pointer",
                    transition: "all 0.2s",
                    display: "flex", alignItems: "center", gap: 8,
                    whiteSpace: isMobile ? "nowrap" : "normal",
                    flexShrink: 0
                  }}
                >
                  {isMobile ? <span>{t.icon} {t.label.replace(/[^a-zA-Z\s]/g, '')}</span> : t.label}
                </button>
              ))}
            </div>

            {/* Dashboard Content */}
            <div style={{ flex: 1, background: T.navy2, borderRadius: 16, border: `1px solid ${T.navy3}`, padding: isMobile ? 16 : 32, overflowY: "auto" }}>
              {isLinked && (
                <button 
                  onClick={unlinkNode}
                  style={{
                    background: T.red + "22", color: T.red, border: `1px solid ${T.red}`, borderRadius: 8,
                    padding: "8px 12px", fontSize: 11, fontWeight: 700, cursor: "pointer", width: "100%", marginBottom: 16
                  }}
                >
                  Unlink ESP32 Node
                </button>
              )}

              {/* ── TAB CONTENT ── */}
              {tab === "live" && selectedSession && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                      <div>
                        <div style={{ color: T.slate, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Selected Room</div>
                        <div style={{ color: T.white, fontSize: 22, fontWeight: 800, marginTop: 2 }}>{selectedSession.room}</div>
                        <div style={{ color: T.slate, fontSize: 12, marginTop: 2 }}>{selectedSession.subject} · {selectedSession.prof}</div>
                      </div>
                      <AfiRing value={selectedSession.avgAfi} size={64}/>
                  </div>
                  <AfiChart session={selectedSession}/>
                </div>
              )}
              {tab === "live" && !selectedSession && <div style={{ color: T.slate, padding: 20 }}>Select a session from the sidebar.</div>}

              {tab === "students" && selectedSession && <StudentTable students={selectedSession.students}/>}
              {tab === "health" && <SystemHealth sessions={sessions}/>}
              {tab === "alerts" && <Alerts sessions={sessions}/>}
              {tab === "notes" && (
                <div style={{ color: T.slate, textAlign: "center", padding: 40 }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>📝</div>
                  <h3>Class Notes</h3>
                  <p>View PDFs and lecture slides for this session.</p>
                </div>
              )}
              {tab === "parent" && !isMobile && <ParentPortal />}
              {tab === "tracker" && !isMobile && <CampusTracker />}
              {tab === "events" && !isMobile && <EventsBoard />}
              {tab === "leaderboard" && !isMobile && <Leaderboard />}
              {tab === "marketplace" && !isMobile && <Marketplace />}
              {tab === "documents" && !isMobile && <DocumentBuilder />}
              {tab === "vault" && !isMobile && <AcademicVault />}
              {tab === "communication" && !isMobile && <CommunicationHub />}
              {tab === "alumni" && !isMobile && <AlumniPortal />}
              {tab === "roadmapper" && !isMobile && <CareerRoadmapper />}
              {tab === "incubation" && !isMobile && <IncubationCell />}
              {tab === "workbenches" && !isMobile && <CloudWorkbenches />}
              {tab === "university" && !isMobile && <UniversityPortal />}
              {tab === "learning" && !isMobile && <LearningPath />}
              {tab === "classroom" && !isMobile && <Classroom />}
              {tab === "hostel" && !isMobile && <HostelPortal />}
              {tab === "career" && !isMobile && <CareerHub />}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
