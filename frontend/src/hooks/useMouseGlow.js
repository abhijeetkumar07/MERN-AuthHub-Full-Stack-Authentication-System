import { useEffect, useState } from "react";

export default function useMouseGlow() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return position;
}
