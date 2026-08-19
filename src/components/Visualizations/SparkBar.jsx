export default function SparkBar({ values, color, height = 28 }) {
  const max = Math.max(...values, 1);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height }}>
      {values.map((v, i) => (
        <div key={i} style={{
          flex: 1, background: color,
          height: `${(v / max) * 100}%`,
          borderRadius: 2, opacity: 0.3 + 0.7 * (i / values.length),
          transition: "height 0.5s ease",
        }}/>
      ))}
    </div>
  );
}
