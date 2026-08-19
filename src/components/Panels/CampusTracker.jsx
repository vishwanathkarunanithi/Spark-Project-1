import { useState, useEffect } from "react";
import { T } from "../../styles/theme";
import { useWindowSize } from "../../hooks/useWindowSize";

export default function CampusTracker() {
  const [buses, setBuses] = useState([
    { id: "B42", route: "Annanagar", status: "On Route", delay: "5 mins", top: 70, left: 30 },
    { id: "B12", route: "Tambaram", status: "Arriving", delay: "On Time", top: 40, left: 80 },
    { id: "B05", route: "Porur", status: "Parked", delay: "-", top: 50, left: 50 },
  ]);

  const { width } = useWindowSize();
  const isMobile = width < 768;

  // Simulate bus movement
  useEffect(() => {
    const timer = setInterval(() => {
      setBuses(prev => prev.map(b => {
        if (b.status === "Parked") return b;
        return {
          ...b,
          top: b.top + (Math.random() * 2 - 1),
          left: b.left + (Math.random() * 2 - 1)
        };
      }));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 20, height: isMobile ? "auto" : "calc(100vh - 180px)" }}>
      
      {/* 2D Interactive Map */}
      <div style={{ flex: 2, background: "#0F172A", borderRadius: 14, overflow: "hidden", border: `1px solid ${T.indigo}22`, position: "relative", minHeight: 400 }}>
        
        {/* Grid Background */}
        <div style={{ 
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0, 
          backgroundImage: `linear-gradient(${T.indigo}11 1px, transparent 1px), linear-gradient(90deg, ${T.indigo}11 1px, transparent 1px)`,
          backgroundSize: "20px 20px"
        }}></div>

        {/* Campus Zones */}
        <div style={{ position: "absolute", top: "45%", left: "45%", width: 120, height: 80, background: `${T.indigo}33`, border: `2px solid ${T.indigo}`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: T.white, fontSize: 10, fontWeight: 700 }}>Main Block</div>
        <div style={{ position: "absolute", top: "20%", left: "60%", width: 80, height: 60, background: `${T.cyan}33`, border: `2px solid ${T.cyan}`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: T.white, fontSize: 10, fontWeight: 700 }}>CSE Labs</div>
        <div style={{ position: "absolute", top: "70%", left: "20%", width: 100, height: 60, background: `${T.amber}33`, border: `2px solid ${T.amber}`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: T.white, fontSize: 10, fontWeight: 700 }}>Canteen</div>
        <div style={{ position: "absolute", top: "60%", left: "70%", width: 80, height: 80, background: `${T.green}33`, border: `2px solid ${T.green}`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: T.white, fontSize: 10, fontWeight: 700 }}>Library</div>

        {/* Live Buses */}
        {buses.map(bus => (
          <div key={bus.id} style={{ 
            position: "absolute", top: `${bus.top}%`, left: `${bus.left}%`, 
            transition: "all 2s linear", display: "flex", flexDirection: "column", alignItems: "center", gap: 4
          }}>
            <div style={{ background: T.white, borderRadius: "50%", padding: 4, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 10px ${T.white}` }}>🚌</div>
            <div style={{ background: "rgba(0,0,0,0.8)", color: T.white, fontSize: 9, padding: "2px 6px", borderRadius: 4, fontWeight: 700, border: `1px solid ${T.slate}` }}>{bus.id}</div>
          </div>
        ))}

        <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(15,23,42,0.9)", padding: "12px 16px", borderRadius: 8, border: `1px solid ${T.indigo}33`, backdropFilter: "blur(4px)" }}>
          <div style={{ color: T.white, fontSize: 14, fontWeight: 800 }}>Live Campus Map</div>
          <div style={{ color: T.cyan, fontSize: 11, fontWeight: 700, marginTop: 4 }}>● Tracking 12 Buses</div>
          <div style={{ color: T.slate, fontSize: 10, marginTop: 4 }}>Velammal IT Campus</div>
        </div>
      </div>

      {/* Bus Fleet Panel */}
      <div style={{ flex: 1, background: T.navy2, borderRadius: 14, padding: 20, border: `1px solid ${T.indigo}22`, display: "flex", flexDirection: "column" }}>
        <div style={{ color: T.slate, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Transport Fleet Status</div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 12, overflowY: "auto" }}>
          {buses.map(b => (
            <div key={b.id} style={{ background: T.navy3, border: `1px solid ${T.indigo}33`, borderRadius: 10, padding: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div>
                  <div style={{ color: T.white, fontSize: 14, fontWeight: 700 }}>Bus {b.id}</div>
                  <div style={{ color: T.slate, fontSize: 11 }}>Route: {b.route}</div>
                </div>
                <div style={{ 
                  background: b.status === "On Route" ? `${T.cyan}22` : b.status === "Parked" ? `${T.slate}22` : `${T.green}22`, 
                  color: b.status === "On Route" ? T.cyan : b.status === "Parked" ? T.slate : T.green, 
                  padding: "4px 8px", borderRadius: 4, fontSize: 10, fontWeight: 800 
                }}>
                  {b.status}
                </div>
              </div>
              {b.delay !== "-" && (
                <div style={{ color: b.delay === "On Time" ? T.green : T.amber, fontSize: 11, fontWeight: 600, marginTop: 8 }}>
                  Status: {b.delay}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
