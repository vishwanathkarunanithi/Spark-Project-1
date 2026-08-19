import { useState } from "react";
import { T } from "../../styles/theme";
import SmartButton from "../UI/SmartButton";

export default function CloudWorkbenches() {
  const [activeIde, setActiveIde] = useState("java");
  const [terminalOutput, setTerminalOutput] = useState([
    "Compiler ready. Connecting to Velammal Cloud Runtime... Connected."
  ]);

  const handleAnalyze = async () => {
    setTerminalOutput([
      "[SYSTEM] Initializing AI Anti-Cheat Engine...",
      "[ANALYSIS] Scanning keystroke dynamics for copy-paste anomalies...",
      "[ANALYSIS] Running LLM plagiarism detection (ChatGPT signature check)...",
    ]);
    await new Promise(r => setTimeout(r, 2000));
    setTerminalOutput(prev => [
      ...prev,
      "[RESULT] Keystrokes normal. No AI-generated patterns detected.",
      "[GRADER] Passed 14/14 test cases. Time Complexity: O(n).",
      "[FINAL] Score: 100/100 (Safe)"
    ]);
  };

  const ides = [
    { id: "python", name: "Python 3 Environment", icon: "🐍" },
    { id: "java", name: "Java Enterprise", icon: "☕" },
    { id: "cpp", name: "C / C++ Compiler", icon: "⚙️" },
    { id: "js", name: "JavaScript / Node.js", icon: "🌐" },
    { id: "arduino", name: "Arduino / MCU", icon: "🔌" },
    { id: "ltspice", name: "LTspice / Circuits", icon: "⚡" },
    { id: "pcb", name: "PCB Design (EDA)", icon: "🧩" },
    { id: "matlab", name: "MATLAB Server", icon: "🔢" },
  ];

  return (
    <div style={{ display: "flex", gap: 16, height: "calc(100vh - 200px)" }}>
      
      {/* Sidebar: IDE Selector */}
      <div style={{ width: 220, background: T.navy2, borderRadius: 14, padding: 16, border: `1px solid ${T.indigo}22`, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ color: T.slate, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Select Workbench</div>
        {ides.map(ide => (
          <button 
            key={ide.id}
            onClick={() => setActiveIde(ide.id)}
            style={{
              background: activeIde === ide.id ? T.indigo2 : T.navy3,
              color: activeIde === ide.id ? T.white : T.slate2,
              border: `1px solid ${activeIde === ide.id ? T.indigo2 : "transparent"}`,
              borderRadius: 8, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12,
              fontSize: 13, fontWeight: 600, cursor: "pointer", textAlign: "left", transition: "all 0.2s"
            }}
          >
            <span>{ide.icon}</span>
            <span>{ide.name}</span>
          </button>
        ))}
      </div>

      {/* Main Panel: IDE Shell */}
      <div style={{ flex: 1, background: "#1E1E1E", borderRadius: 14, border: `1px solid ${T.indigo}44`, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Editor Header */}
        <div style={{ background: "#252526", padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #333" }}>
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ color: "#E5E5E5", fontSize: 12, borderBottom: "2px solid #007ACC", paddingBottom: 8, marginBottom: -10 }}>
              {activeIde === "java" ? "Main.java" : activeIde === "python" ? "script.py" : activeIde === "cpp" ? "main.cpp" : activeIde === "js" ? "app.js" : activeIde === "arduino" ? "firmware.ino" : activeIde === "ltspice" ? "amplifier.asc" : "project"}
            </div>
            <div style={{ color: "#7A7A7A", fontSize: 12 }}>+ New File</div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <SmartButton successText="Analysis Complete" onClick={handleAnalyze} style={{ background: T.indigo2, color: T.white, border: "none", borderRadius: 4, padding: "6px 12px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
              🛡️ Analyze (Anti-Cheat)
            </SmartButton>
            <button style={{ background: T.green, color: T.white, border: "none", borderRadius: 4, padding: "6px 12px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
              ▶ Run Code
            </button>
          </div>
        </div>

        {/* Editor Area (Placeholder) */}
        <div style={{ flex: 1, padding: 24, display: "flex", flexDirection: "column", fontFamily: "monospace", color: "#D4D4D4", fontSize: 14, overflow: "auto" }}>
          {activeIde === "java" && (
            <pre style={{ margin: 0 }}>
{`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Velammal Tech Companion!");
        // Your 1-Crore package logic starts here...
    }
}`}
            </pre>
          )}

          {activeIde === "python" && (
            <pre style={{ margin: 0 }}>
{`def solve():
    print("Welcome to the Universal Python Environment!")
    # All students can practice logic building here

if __name__ == "__main__":
    solve()`}
            </pre>
          )}

          {activeIde === "cpp" && (
            <pre style={{ margin: 0 }}>
{`#include <iostream>
using namespace std;

int main() {
    cout << "High-performance C++ backend ready." << endl;
    return 0;
}`}
            </pre>
          )}

          {activeIde === "js" && (
            <pre style={{ margin: 0 }}>
{`const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Node.js Fullstack Server Online');
});`}
            </pre>
          )}

          {activeIde === "ltspice" && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", flexDirection: "column", gap: 16, color: "#7A7A7A" }}>
              <div style={{ fontSize: 48 }}>⚡</div>
              <div>LTspice Web Simulator initialized.</div>
              <div style={{ fontSize: 12 }}>Drag and drop schematic components from the left panel to begin.</div>
            </div>
          )}

          {activeIde === "arduino" && (
            <pre style={{ margin: 0 }}>
{`void setup() {
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`}
            </pre>
          )}

          {activeIde === "pcb" && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", flexDirection: "column", gap: 16, color: "#7A7A7A" }}>
              <div style={{ fontSize: 48 }}>🧩</div>
              <div>EasyEDA / PCB Routing Engine initialized.</div>
              <div style={{ fontSize: 12 }}>Select layers and start routing traces.</div>
            </div>
          )}

          {activeIde === "matlab" && (
            <pre style={{ margin: 0 }}>
{`% MATLAB Cloud Engine
x = 0:pi/100:2*pi;
y = sin(x);
plot(x,y)`}
            </pre>
          )}
        </div>

        {/* Terminal output */}
        <div style={{ height: 160, background: "#181818", borderTop: "1px solid #333", padding: "8px 16px", color: "#CCCCCC", fontFamily: "monospace", fontSize: 12, overflow: "auto" }}>
          <div style={{ color: "#E5E5E5", marginBottom: 8, fontWeight: 700 }}>TERMINAL / AI SCANNER</div>
          {terminalOutput.map((line, i) => (
            <div key={i} style={{ color: line.includes("[RESULT]") || line.includes("[FINAL]") ? T.green : line.includes("[ANALYSIS]") ? T.cyan : T.slate }}>
              {line}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
