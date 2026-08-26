"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const BRAND = {
    bg: "#301111", // Rich Mahogany
    accent: "#F8E0CC", // Warm Ivory
    cardBg: "#FFFFFF",
    textDark: "#301111",
    textMuted: "#886E65",
    border: "rgba(48, 17, 17, 0.15)"
  };

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: BRAND.bg,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '1rem',
      boxSizing: 'border-box'
    }}>
      <style dangerouslySetInnerHTML={{__html: `
        body, html { 
          margin: 0; 
          padding: 0; 
          overflow: hidden; 
          background-color: #301111; 
        }
        @font-face {
          font-family: 'Milan';
          src: url('/assets/fonts/Milan-Display-Black.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'AbeatByKai';
          src: url('/assets/fonts/abeatbyKai-Regular.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
      `}} />
      {/* Background Elements - Subtle elegant pattern adapted for dark rich background */}
      <svg 
        viewBox="0 0 1000 1000" 
        style={{ 
          position: 'absolute', 
          left: '-20vw', 
          top: '50%', 
          transform: 'translateY(-50%)', 
          width: '80vw', 
          height: '80vw', 
          minWidth: '600px',
          minHeight: '600px',
          zIndex: 0, 
          pointerEvents: 'none',
          opacity: 0.15
        }}
      >
        <g transform="translate(100, 500) rotate(45)">
          {Array.from({ length: 12 }).map((_, i) => {
            const size = 300 + (i * 120);
            const radius = 100 + (i * 30);
            return (
              <rect 
                key={i} 
                x={-size/2} 
                y={-size/2} 
                width={size} 
                height={size} 
                rx={radius} 
                fill="none" 
                stroke={BRAND.accent} 
                strokeWidth="2" 
                opacity={Math.max(0.1, 0.8 - (i * 0.05))}
              />
            );
          })}
        </g>
      </svg>

      {/* Main Container */}
      <div 
        style={{ 
          width: '100%',
          maxWidth: '480px', 
          zIndex: 2, 
          position: 'relative', 
          backgroundColor: BRAND.cardBg,
          borderRadius: '1.5rem',
          padding: '3.5rem 2.5rem',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.3)',
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          boxSizing: 'border-box'
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem' }}>
          <img 
            src="/assets/img/horizontal.png" 
            alt="الملكية للإستثمار | Al Malakiyah Investment" 
            style={{ width: 'auto', height: '60px', objectFit: 'contain' }} 
          />
        </Link>

        {/* 404 Typography */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ 
            fontFamily: 'AbeatByKai, sans-serif', 
            fontSize: '5rem', 
            lineHeight: '1', 
            color: BRAND.textDark, 
            margin: '0 0 1rem 0',
            fontWeight: 700 
          }}>
            404
          </h1>
          <h2 style={{ 
            fontFamily: 'Milan, sans-serif', 
            fontSize: '1.5rem', 
            fontWeight: 700, 
            color: BRAND.textDark, 
            margin: '0 0 0.5rem 0' 
          }}>
            الصفحة غير موجودة
          </h2>
          <h3 style={{ 
            fontFamily: 'AbeatByKai, sans-serif', 
            fontSize: '0.9rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em', 
            color: BRAND.textMuted, 
            margin: 0,
            fontWeight: 600
          }}>
            Page Not Found
          </h3>
        </div>

        {/* Description */}
        <p style={{ 
          fontFamily: 'Milan, sans-serif', 
          fontSize: '1rem', 
          color: BRAND.textMuted, 
          textAlign: 'center', 
          marginBottom: '3rem', 
          lineHeight: '1.6',
          maxWidth: '90%'
        }}>
          يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها
        </p>

        {/* Return Button */}
        <Link 
          href="/"
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '1rem 3rem', 
            borderRadius: '0.75rem',
            backgroundColor: BRAND.textDark,
            color: BRAND.accent,
            textDecoration: 'none',
            fontFamily: 'Milan, sans-serif',
            fontWeight: 700,
            fontSize: '1.05rem',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(48, 17, 17, 0.3)';
            e.currentTarget.style.backgroundColor = '#4A1D1D';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            e.currentTarget.style.backgroundColor = BRAND.textDark;
          }}
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
