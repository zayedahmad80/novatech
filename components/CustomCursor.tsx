"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 200);
    };

    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], .cursor-pointer')) {
        setLinkHovered(true);
      } else {
        setLinkHovered(false);
      }
    };

    const handleButtonHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, .btn, [type="submit"], [type="button"]')) {
        setButtonHovered(true);
      } else {
        setButtonHovered(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("click", handleClick);
    window.addEventListener("mouseover", handleLinkHover);
    window.addEventListener("mouseover", handleButtonHover);
    
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("mouseover", handleLinkHover);
      window.removeEventListener("mouseover", handleButtonHover);
    };
  }, []);

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        ref={cursorRef}
        className="fixed w-10 h-10 rounded-full pointer-events-none z-50"
        style={{
          border: "2px solid rgba(147, 51, 234, 0.8)",
          boxShadow: "0 0 10px rgba(147, 51, 234, 0.5)",
          left: 0,
          top: 0,
        }}
        animate={{
          scale: linkHovered ? 1.5 : clicked ? 0.8 : buttonHovered ? 1.3 : 1,
          borderColor: linkHovered ? "rgba(168, 85, 247, 1)" : "rgba(147, 51, 234, 0.8)",
          boxShadow: linkHovered 
            ? "0 0 20px rgba(168, 85, 247, 0.8)" 
            : "0 0 10px rgba(147, 51, 234, 0.5)",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
          mass: 0.5,
        }}
      />
      
      {/* Inner dot */}
      <motion.div
        ref={cursorDotRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none z-50"
        style={{
          backgroundColor: "#a855f7",
          boxShadow: "0 0 8px #a855f7",
          left: 0,
          top: 0,
        }}
        animate={{
          scale: linkHovered ? 1.8 : clicked ? 2.5 : buttonHovered ? 1.5 : 1,
          backgroundColor: linkHovered ? "#c084fc" : "#a855f7",
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 15,
          mass: 0.3,
        }}
      />
      
      {/* Trailing particles effect */}
      <ParticleTrail position={position} active={linkHovered || buttonHovered} />
      
      {/* Cursor glow */}
      <motion.div
        className="fixed w-20 h-20 rounded-full pointer-events-none z-40"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)",
          left: position.x - 40,
          top: position.y - 40,
        }}
        animate={{
          scale: linkHovered ? 1.2 : 1,
          opacity: linkHovered ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}

// Particle trail effect component
function ParticleTrail({ position, active }: { position: { x: number; y: number }; active: boolean }) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; age: number }>>([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticle = {
          id: particleIdRef.current++,
          x: position.x,
          y: position.y,
          age: 0,
        };
        const updated = [...prev, newParticle];
        // Keep only recent 8 particles
        return updated.slice(-8);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [active, position]);

  useEffect(() => {
    const animation = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({ ...p, age: p.age + 1 }))
          .filter(p => p.age < 15)
      );
    }, 50);

    return () => clearInterval(animation);
  }, []);

  return (
    <>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="fixed w-1 h-1 rounded-full pointer-events-none z-45"
          style={{
            backgroundColor: `rgba(168, 85, 247, ${1 - particle.age / 15})`,
            left: particle.x - 2,
            top: particle.y - 2,
          }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </>
  );
}