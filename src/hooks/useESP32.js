import { useState, useCallback, useEffect } from 'react';
import { genSession } from '../utils/mockData';

export function useESP32(role, department) {
  const [sessions, setSessions] = useState([]);
  const [isLinked, setIsLinked] = useState(false);
  
  // Simulated Hardware State
  const [apConfig, setApConfig] = useState(null);
  const [staConfig, setStaConfig] = useState(null);

  // Auto-reconnect logic
  useEffect(() => {
    const cachedDevice = localStorage.getItem("pairedESP32");
    if (cachedDevice && role === "teacher") {
      console.log("[Hardware] Auto-reconnecting via Web Bluetooth to:", cachedDevice);
      setIsLinked(true);
      
      const newSession = genSession(cachedDevice, "Live Class", 0);
      newSession.espStatus = "ONLINE";
      setSessions([newSession]);
    }
  }, [role]);

  // Manual BT Pair (Simulated)
  const pairBluetooth = useCallback(async () => {
    // In reality: navigator.bluetooth.requestDevice(...)
    console.log("[Hardware] Requesting Web Bluetooth device...");
    
    // Simulate delay for user selecting device in browser popup
    await new Promise(r => setTimeout(r, 1500));
    
    const mockDeviceName = `ESP32-Node-${Math.floor(Math.random() * 1000)}`;
    localStorage.setItem("pairedESP32", mockDeviceName);
    console.log("[Hardware] Paired successfully with:", mockDeviceName);
    
    setIsLinked(true);
    const newSession = genSession(mockDeviceName, "Live Class", 0);
    newSession.espStatus = "ONLINE";
    setSessions([newSession]);
    return mockDeviceName;
  }, []);

  // Send AP + STA Config
  const sendNetworkConfig = useCallback(async (staSSID, staPass, apSSID, apPass) => {
    console.log("[Hardware] Pushing AP+STA payload via GATT characteristics...");
    await new Promise(r => setTimeout(r, 1200)); // Simulate hardware write
    setStaConfig({ ssid: staSSID, password: staPass });
    setApConfig({ ssid: apSSID, password: apPass });
    console.log("[Hardware] Network configuration applied. ESP32 rebooting into WIFI_AP_STA mode.");
  }, []);

  const unlinkNode = useCallback(() => {
    localStorage.removeItem("pairedESP32");
    setIsLinked(false);
    setSessions([]);
    setApConfig(null);
    setStaConfig(null);
  }, []);

  return {
    sessions,
    isLinked,
    pairBluetooth,
    sendNetworkConfig,
    unlinkNode,
    apConfig,
    staConfig
  };
}
