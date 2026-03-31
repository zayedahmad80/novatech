"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <>
      <div
        className="fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none z-50 transition-transform duration-100"
        style={{
          left: position.x - 16,
          top: position.y - 16,
        }}
      />
      <div
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 transition-transform duration-50"
        style={{
          left: position.x - 4,
          top: position.y - 4,
        }}
      />
    </>
  );
}