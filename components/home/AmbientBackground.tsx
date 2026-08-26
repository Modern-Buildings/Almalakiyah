"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AmbientBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;
    
    // Very slow subtle movement of the grid background
    gsap.to(bgRef.current, {
      backgroundPosition: "100px 100px",
      duration: 20,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-site">
      <div 
        ref={bgRef}
        className="absolute inset-[-100%] opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(110, 31, 23, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(110, 31, 23, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}
