import { T } from "../../styles/theme";

export default function PrivacyPanel() {
  const items = [
    { label: "DPDP 2023 Consent", status: "Active", color: T.green, detail: "All students provided written consent at enrolment" },
    { label: "Data Retention Policy", status: "90-day rule", color: T.green, detail: "Session logs purged after 90 days; AFI anonymised after semester" },
    { label: "UUID Data Scope", status: "On-device only", color: T.green, detail: "UUID never transmitted; only hashed binding stored server-side" },
    { label: "Right to Erasure", status: "API live", color: T.green, detail: "Student or parent request → full data purge within 48 hrs" },
    { label: "Minor Data Guard", status: "Enabled", color: T.green, detail: "Under-18 records require parental consent flag" },
    { label: "Last Security Audit", status: "June 2025", color: T.amber, detail: "Next audit scheduled September 2025" },
  ];
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "10px 14px", background: i % 2 === 0 ? T.navy2 : T.navy3,
          borderRadius: i === 0 ? "10px 10px 0 0" : i === items.length-1 ? "0 0 10px 10px" : 0,
        }}>
          <div>
            <div style={{ color: T.white, fontSize: 12, fontWeight: 600 }}>{item.label}</div>
            <div style={{ color: T.slate, fontSize: 10, marginTop: 2 }}>{item.detail}</div>
          </div>
          <span style={{
            background: item.color + "22", color: item.color,
            borderRadius: 6, padding: "2px 10px", fontSize: 10, fontWeight: 700, whiteSpace: "nowrap",
          }}>{item.status}</span>
        </div>
      ))}
    </div>
  );
}
