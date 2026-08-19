import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { T } from "../../styles/theme";

export default function RoleSwitcher() {
  const { role, setRole } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <button 
        onClick={toggleTheme}
        style={{
          background: T.navy3, color: T.white, border: `1px solid ${T.indigo}33`,
          borderRadius: 8, padding: "6px 12px", fontSize: 16, cursor: "pointer"
        }}
        title="Toggle Theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      <select 
        value={role} 
        onChange={e => setRole(e.target.value)}
        style={{
          background: T.navy3, color: T.white, border: `1px solid ${T.indigo}33`,
          borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 600,
          outline: "none", cursor: "pointer"
        }}
      >
        <option value="principal">Principal View</option>
        <option value="hod">HOD View</option>
        <option value="teacher">Teacher (Class) View</option>
      </select>
    </div>
  );
}
