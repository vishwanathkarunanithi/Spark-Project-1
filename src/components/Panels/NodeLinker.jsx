import { useState } from "react";
import { T } from "../../styles/theme";
import SmartButton from "../UI/SmartButton";

export default function NodeLinker({ onLink }) {
  const [step, setStep] = useState(1); // 1: BT Pair, 2: Config AP+STA, 3: Face-ID
  const [device, setDevice] = useState("");
  const [scanActive, setScanActive] = useState(false);
  
  const [staSSID, setStaSSID] = useState("");
  const [staPass, setStaPass] = useState("");
  const [apSSID, setApSSID] = useState("Velammal_Class_Node");
  const [apPass, setApPass] = useState("12345678");

  const handlePair = async () => {
    // Simulating the Bluetooth pair return
    const dev = await onLink.pairBluetooth();
    setDevice(dev);
    setStep(2);
  };

  const handleConfig = async () => {
    await onLink.sendNetworkConfig(staSSID, staPass, apSSID, apPass);
  };

  const handleFaceScan = async () => {
    setScanActive(true);
    await new Promise(r => setTimeout(r, 2500));
    setScanActive(false);
    // Simulate successful link after biometric bypass
    await onLink.pairBluetooth(); // using BT pair to mock setting isLinked
  };

  return (
    <div style={{
      background: T.navy2, borderRadius: 14, padding: 32, border: `1px dashed ${T.cyan}`,
      textAlign: "center", maxWidth: 450, margin: "40px auto"
    }}>
      {step === 1 && (
        <>
          <div style={{ fontSize: 48, marginBottom: 16 }}>📶</div>
          <div style={{ color: T.white, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Connect Classroom Node</div>
          <div style={{ color: T.slate, fontSize: 12, marginBottom: 24, lineHeight: 1.5 }}>
            To view live attendance, you must pair with the physical ESP32 node via Bluetooth. Subsequent logins will auto-reconnect.
          </div>
          
          <SmartButton successText="Paired Successfully!" onClick={handlePair} style={{
            background: T.indigo2, color: T.white, border: "none", borderRadius: 8,
            padding: "12px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer",
            width: "100%", boxShadow: `0 4px 12px ${T.indigo2}44`, marginBottom: 12
          }}>
            Pair via Web Bluetooth
          </SmartButton>
          
          <button onClick={() => setStep(3)} style={{
            background: "transparent", color: T.slate, border: `1px solid ${T.navy3}`, borderRadius: 8,
            padding: "8px 16px", fontSize: 11, fontWeight: 700, cursor: "pointer", width: "100%"
          }}>
            Fallback: Manual Biometric Scan
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div style={{ fontSize: 48, marginBottom: 16 }}>⚙️</div>
          <div style={{ color: T.white, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Network Configuration (AP + STA)</div>
          <div style={{ color: T.green, fontSize: 11, marginBottom: 24, fontWeight: 700 }}>
            Successfully connected to {device}. Now configuring dual-network mode.
          </div>

          <div style={{ textAlign: "left", marginBottom: 20 }}>
            <div style={{ color: T.slate, fontSize: 11, fontWeight: 800, textTransform: "uppercase", marginBottom: 8 }}>Station Mode (College WiFi)</div>
            <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
              <input value={staSSID} onChange={e => setStaSSID(e.target.value)} placeholder="SSID (e.g. Velammal_Staff)" style={{ flex: 1, background: T.navy, border: `1px solid ${T.navy3}`, color: T.white, padding: "10px", borderRadius: 8, outline: "none", fontSize: 12 }} />
              <input type="password" value={staPass} onChange={e => setStaPass(e.target.value)} placeholder="Password" style={{ flex: 1, background: T.navy, border: `1px solid ${T.navy3}`, color: T.white, padding: "10px", borderRadius: 8, outline: "none", fontSize: 12 }} />
            </div>

            <div style={{ color: T.slate, fontSize: 11, fontWeight: 800, textTransform: "uppercase", marginBottom: 8 }}>Access Point Mode (Local Fallback)</div>
            <div style={{ display: "flex", gap: 10 }}>
              <input value={apSSID} onChange={e => setApSSID(e.target.value)} placeholder="Node SSID" style={{ flex: 1, background: T.navy, border: `1px solid ${T.navy3}`, color: T.white, padding: "10px", borderRadius: 8, outline: "none", fontSize: 12 }} />
              <input type="password" value={apPass} onChange={e => setApPass(e.target.value)} placeholder="Password" style={{ flex: 1, background: T.navy, border: `1px solid ${T.navy3}`, color: T.white, padding: "10px", borderRadius: 8, outline: "none", fontSize: 12 }} />
            </div>
          </div>

          <SmartButton onClick={handleConfig} successText="Config Pushed! Rebooting Node..." style={{
            background: T.cyan, color: T.navy, border: "none", borderRadius: 8,
            padding: "12px 24px", fontSize: 14, fontWeight: 800, cursor: "pointer",
            width: "100%", boxShadow: `0 4px 12px ${T.cyan}44`
          }}>
            Apply AP+STA Configuration
          </SmartButton>
        </>
      )}

      {step === 3 && (
        <>
          <div style={{ fontSize: 48, marginBottom: 16 }}>👤</div>
          <div style={{ color: T.white, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Face-ID Biometric Bypass</div>
          <div style={{ color: T.slate, fontSize: 12, marginBottom: 24, lineHeight: 1.5 }}>
            Use the teacher tablet's camera to verify student identity if the node connection fails.
          </div>

          <div style={{ height: 200, background: "#000", borderRadius: 12, border: `2px dashed ${scanActive ? T.green : T.slate}`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", marginBottom: 20, overflow: "hidden" }}>
            {scanActive && (
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", background: `linear-gradient(transparent, ${T.green}55, transparent)`, animation: "scan 2s infinite" }} />
            )}
            <div style={{ color: scanActive ? T.green : T.slate2, fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>
              {scanActive ? "Scanning Matrix..." : "Camera Offline"}
            </div>
          </div>

          <style>
            {`@keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }`}
          </style>

          <SmartButton successText="Identity Verified" onClick={handleFaceScan} style={{
            background: T.green, color: T.navy, border: "none", borderRadius: 8,
            padding: "12px 24px", fontSize: 14, fontWeight: 800, cursor: "pointer",
            width: "100%", boxShadow: `0 4px 12px ${T.green}44`, marginBottom: 12
          }}>
            Initiate Facial Scan
          </SmartButton>

          <button onClick={() => setStep(1)} style={{
            background: "transparent", color: T.slate, border: "none", borderRadius: 8,
            padding: "8px 16px", fontSize: 11, fontWeight: 700, cursor: "pointer", width: "100%"
          }}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
}
