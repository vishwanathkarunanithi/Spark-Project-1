import { useState } from "react";
import { T } from "../../styles/theme";

export default function SmartButton({ children, onClick, style, successText = "Success", ...props }) {
  const [state, setState] = useState("idle"); // idle, loading, success

  const handleClick = async (e) => {
    if (state !== "idle") return;
    
    setState("loading");
    
    // Simulate backend latency (0.8s to 2s)
    const latency = Math.floor(Math.random() * 1200) + 800;
    
    setTimeout(async () => {
      if (onClick) {
        await onClick(e);
      }
      setState("success");
      
      // Revert to idle after 3 seconds
      setTimeout(() => {
        setState("idle");
      }, 3000);
    }, latency);
  };

  const getStyle = () => {
    let base = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      transition: "all 0.3s ease",
      ...style
    };

    if (state === "loading") {
      base.opacity = 0.8;
      base.cursor = "wait";
    } else if (state === "success") {
      base.background = T.green;
      base.color = T.navy;
      base.borderColor = T.green;
    }

    return base;
  };

  return (
    <button onClick={handleClick} style={getStyle()} disabled={state !== "idle"} {...props}>
      {state === "idle" && children}
      {state === "loading" && (
        <>
          <span style={{ display: "inline-block", animation: "spin 1s linear infinite" }}>⏳</span>
          Processing...
        </>
      )}
      {state === "success" && (
        <>
          <span>✓</span>
          {successText}
        </>
      )}
      <style>{`
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
}
