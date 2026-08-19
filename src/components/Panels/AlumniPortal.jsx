import { T } from "../../styles/theme";
import SmartButton from "../UI/SmartButton";

export default function AlumniPortal() {
  const alumni = [
    { name: "Vikram S.", batch: "2021", company: "Amazon", role: "SDE II", avatar: "👨‍💻", badge: "AWS Certified" },
    { name: "Sneha P.", batch: "2020", company: "Zoho", role: "Product Engineer", avatar: "👩‍💼", badge: "Open Source" },
    { name: "Rahul K.", batch: "2022", company: "TCS Digital", role: "Systems Analyst", avatar: "👨‍🔬", badge: "Cloud Native" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ background: T.navy2, borderRadius: 14, padding: 24, border: `1px solid ${T.indigo}22` }}>
        <div style={{ color: T.white, fontSize: 24, fontWeight: 800 }}>🎓 Alumni Network & Referrals</div>
        <div style={{ color: T.slate, fontSize: 13, marginTop: 4 }}>Connect with verified Velammal Institute of Technology alumni working at top companies.</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
        {alumni.map((alum, i) => (
          <div key={i} style={{ background: T.navy3, borderRadius: 12, padding: 20, border: `1px solid ${T.indigo}33` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ fontSize: 40 }}>{alum.avatar}</div>
                <div>
                  <div style={{ color: T.white, fontSize: 18, fontWeight: 800 }}>{alum.name}</div>
                  <div style={{ color: T.cyan, fontSize: 12, fontWeight: 700 }}>{alum.role} @ {alum.company}</div>
                  <div style={{ color: T.slate, fontSize: 11, marginTop: 2 }}>Batch of {alum.batch}</div>
                </div>
              </div>
              <div style={{ background: `${T.green}22`, color: T.green, padding: "4px 8px", borderRadius: 4, fontSize: 10, fontWeight: 800 }}>{alum.badge}</div>
            </div>
            
            <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
              <SmartButton successText="Request Sent!" style={{ background: T.indigo2, color: T.white, border: "none", borderRadius: 8, padding: "10px", fontSize: 12, fontWeight: 700, cursor: "pointer", width: "100%" }}>
                Request Job Referral
              </SmartButton>
              <SmartButton successText="Message Sent" style={{ background: "transparent", color: T.white, border: `1px solid ${T.indigo}44`, borderRadius: 8, padding: "10px", fontSize: 12, fontWeight: 700, cursor: "pointer", width: "100%" }}>
                Message for Guidance
              </SmartButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
