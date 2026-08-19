export default function PulseDot({ color, size = 8 }) {
  return (
    <span style={{ position: "relative", display: "inline-block", width: size, height: size }}>
      <span style={{
        display: "block", width: size, height: size, borderRadius: "50%",
        background: color, position: "absolute",
        animation: "pulse-ring 1.8s ease-out infinite",
      }}/>
      <span style={{
        display: "block", width: size, height: size, borderRadius: "50%",
        background: color, position: "absolute",
      }}/>
    </span>
  );
}
