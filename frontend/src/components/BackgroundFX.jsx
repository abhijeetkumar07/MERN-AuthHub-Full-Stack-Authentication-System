import { motion } from "framer-motion";
import useMouseGlow from "../hooks/useMouseGlow.js";

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 19) % 100}%`,
  delay: index * 0.24,
}));

export default function BackgroundFX() {
  const { x, y } = useMouseGlow();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        className="absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl transition-transform duration-300"
        style={{ transform: `translate(${x - 160}px, ${y - 160}px)` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-200/70"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [-18, 18, -18], opacity: [0.25, 0.85, 0.25] }}
          transition={{ duration: 6, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
