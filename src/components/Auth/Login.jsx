import { useState } from "react";
import { T } from "../../styles/theme";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [dept, setDept] = useState("Computer Science and Engineering (CSE)");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering && !name) return alert("Please enter your name to register.");
    if (!regNo) return alert("Please enter your Register Number.");
    // In a real app, this would check the database. 
    // Here we just pass the name (or regNo if name is missing during standard login)
    login(role, isRegistering ? name : regNo, dept);
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: T.navy, color: T.white, fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ background: T.navy2, padding: 40, borderRadius: 16, width: 400, border: `1px solid ${T.navy3}`, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 12, background: T.navy,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 4px 12px rgba(0,0,0,0.2), inset 0 1px 1px ${T.navy3}`,
            border: `1px solid ${T.navy3}`, margin: "0 auto 16px"
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21L2 3H8L12 13.5L16 3H22L12 21Z" fill={T.indigo} />
              <path d="M12 21L7.5 10H16.5L12 21Z" fill={T.cyan} />
            </svg>
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 800, margin: 0, color: T.white }}>Velammal Tech Companion</h1>
          <div style={{ color: T.slate, fontSize: 12, marginTop: 4 }}>Central Authentication System</div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: T.slate, marginBottom: 8, textTransform: "uppercase" }}>Login Role</label>
            <select 
              value={role} onChange={e => setRole(e.target.value)}
              style={{ width: "100%", background: T.navy3, border: `1px solid ${T.indigo}33`, color: T.white, padding: "12px 14px", borderRadius: 8, outline: "none" }}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher (Class Admin)</option>
              <option value="hod">Head of Department (HOD)</option>
              <option value="principal">Principal</option>
              <option value="parent">Parent / Guardian</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: T.slate, marginBottom: 8, textTransform: "uppercase" }}>Department</label>
            <select 
              value={dept} onChange={e => setDept(e.target.value)}
              style={{ width: "100%", background: T.navy3, border: `1px solid ${T.indigo}33`, color: T.white, padding: "12px 14px", borderRadius: 8, outline: "none" }}
            >
              <option value="Computer Science and Engineering (CSE)">Computer Science and Engineering (CSE)</option>
              <option value="Electronics and Communication Engineering (ECE)">Electronics and Communication Engineering (ECE)</option>
              <option value="Electrical and Electronics Engineering (EEE)">Electrical and Electronics Engineering (EEE)</option>
              <option value="Information Technology (IT)">Information Technology (IT)</option>
              <option value="Mechanical Engineering (MECH)">Mechanical Engineering (MECH)</option>
              <option value="Artificial Intelligence & Data Science (AI&DS)">Artificial Intelligence & Data Science (AI&DS)</option>
              <option value="Mechatronics Engineering (MTS)">Mechatronics Engineering (MTS)</option>
            </select>
          </div>

          {isRegistering && (
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: T.slate, marginBottom: 8, textTransform: "uppercase" }}>Full Name</label>
              <input 
                type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Rahul S."
                style={{ width: "100%", background: T.navy3, border: `1px solid ${T.indigo}33`, color: T.white, padding: "12px 14px", borderRadius: 8, outline: "none", boxSizing: "border-box" }}
              />
            </div>
          )}

          <div>
            <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: T.slate, marginBottom: 8, textTransform: "uppercase" }}>
              {role === "student" ? "Register Number" : role === "parent" ? "Registered Mobile No." : "Staff ID / Email"}
            </label>
            <input 
              type="text" value={regNo} onChange={e => setRegNo(e.target.value)} placeholder={role === "student" ? "e.g. 113320104001" : role === "parent" ? "e.g. 9876543210" : "e.g. faculty@velammal.edu"}
              style={{ width: "100%", background: T.navy3, border: `1px solid ${T.indigo}33`, color: T.white, padding: "12px 14px", borderRadius: 8, outline: "none", boxSizing: "border-box" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: T.slate, marginBottom: 8, textTransform: "uppercase" }}>Password</label>
            <input 
              type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••"
              style={{ width: "100%", background: T.navy3, border: `1px solid ${T.indigo}33`, color: T.white, padding: "12px 14px", borderRadius: 8, outline: "none", boxSizing: "border-box" }}
            />
          </div>

          <button 
            type="submit"
            style={{
              background: T.indigo2, color: T.white, border: "none", borderRadius: 8, padding: "14px",
              fontSize: 14, fontWeight: 700, cursor: "pointer", marginTop: 8, boxShadow: `0 4px 12px ${T.indigo2}44`
            }}
          >
            {isRegistering ? "Register Profile & Enter" : "Authenticate & Enter"}
          </button>
        </form>

        {role === "student" && (
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <button 
              type="button"
              onClick={() => setIsRegistering(!isRegistering)}
              style={{ background: "transparent", border: "none", color: T.cyan, fontSize: 12, cursor: "pointer", fontWeight: 700 }}
            >
              {isRegistering ? "Already have an account? Log In" : "First time student? Register here"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
