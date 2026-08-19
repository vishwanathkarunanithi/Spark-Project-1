export const rand = (a, b) => Math.random() * (b - a) + a;
export const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
export const fmt = (n, d = 1) => n.toFixed(d);
