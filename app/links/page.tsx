"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

// Minimal, thin stroke icons
const Globe = ({ style }: { style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>;
const Mail = ({ style }: { style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const MessageCircle = ({ style }: { style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>;
const MapPin = ({ style }: { style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const Phone = ({ style }: { style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;

// Social icons
const Instagram = ({ style }: { style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Facebook = ({ style }: { style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const XIcon = ({ style }: { style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" style={style}><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.6 318.1 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>;
const Snapchat = ({ style }: { style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" style={style}>
    <path d="M496.926,366.6c-3.373-9.176-9.8-14.086-17.112-18.153-1.376-.806-2.641-1.451-3.72-1.947-2.182-1.128-4.414-2.22-6.634-3.373-22.8-12.09-40.609-27.341-52.959-45.42a102.889,102.889,0,0,1-9.089-16.12c-1.054-3.013-1-4.724-.248-6.287a10.221,10.221,0,0,1,2.914-3.038c3.918-2.591,7.96-5.22,10.7-6.993,4.885-3.162,8.754-5.667,11.246-7.44,9.362-6.547,15.909-13.5,20-21.278a42.371,42.371,0,0,0,2.1-35.191c-6.2-16.318-21.613-26.449-40.287-26.449a55.543,55.543,0,0,0-11.718,1.24c-1.029.224-2.059.459-3.063.72.174-11.16-.074-22.94-1.066-34.534-3.522-40.758-17.794-62.123-32.674-79.16A130.167,130.167,0,0,0,332.1,36.443C309.515,23.547,283.91,17,256,17S202.6,23.547,180,36.443a129.735,129.735,0,0,0-33.281,26.783c-14.88,17.038-29.152,38.44-32.673,79.161-.992,11.594-1.24,23.435-1.079,34.533-1-.26-2.021-.5-3.051-.719a55.461,55.461,0,0,0-11.717-1.24c-18.687,0-34.125,10.131-40.3,26.449a42.423,42.423,0,0,0,2.046,35.228c4.105,7.774,10.652,14.731,20.014,21.278,2.48,1.736,6.361,4.24,11.246,7.44,2.641,1.711,6.5,4.216,10.28,6.72a11.054,11.054,0,0,1,3.3,3.311c.794,1.624.818,3.373-.36,6.6a102.02,102.02,0,0,1-8.94,15.785c-12.077,17.669-29.363,32.648-51.434,44.639C32.355,348.608,20.2,352.75,15.069,366.7c-3.868,10.528-1.339,22.506,8.494,32.6a49.137,49.137,0,0,0,12.4,9.387,134.337,134.337,0,0,0,30.342,12.139,20.024,20.024,0,0,1,6.126,2.741c3.583,3.137,3.075,7.861,7.849,14.78a34.468,34.468,0,0,0,8.977,9.127c10.019,6.919,21.278,7.353,33.207,7.811,10.776.41,22.989.881,36.939,5.481,5.778,1.91,11.78,5.605,18.736,9.92C194.842,480.951,217.707,495,255.973,495s61.292-14.123,78.118-24.428c6.907-4.24,12.872-7.9,18.489-9.758,13.949-4.613,26.163-5.072,36.939-5.481,11.928-.459,23.187-.893,33.206-7.812a34.584,34.584,0,0,0,10.218-11.16c3.434-5.84,3.348-9.919,6.572-12.771a18.971,18.971,0,0,1,5.753-2.629A134.893,134.893,0,0,0,476.02,408.71a48.344,48.344,0,0,0,13.019-10.193l.124-.149C498.389,388.5,500.708,376.867,496.926,366.6Zm-34.013,18.277c-20.745,11.458-34.533,10.23-45.259,17.137-9.114,5.865-3.72,18.513-10.342,23.076-8.134,5.617-32.177-.4-63.239,9.858-25.618,8.469-41.961,32.822-88.038,32.822s-62.036-24.3-88.076-32.884c-31-10.255-55.092-4.241-63.239-9.858-6.609-4.563-1.24-17.211-10.341-23.076-10.739-6.907-24.527-5.679-45.26-17.075-13.206-7.291-5.716-11.8-1.314-13.937,75.143-36.381,87.133-92.552,87.666-96.719.645-5.046,1.364-9.014-4.191-14.148-5.369-4.96-29.189-19.7-35.8-24.316-10.937-7.638-15.748-15.264-12.2-24.638,2.48-6.485,8.531-8.928,14.879-8.928a27.643,27.643,0,0,1,5.965.67c12,2.6,23.659,8.617,30.392,10.242a10.749,10.749,0,0,0,2.48.335c3.6,0,4.86-1.811,4.612-5.927-.768-13.132-2.628-38.725-.558-62.644,2.84-32.909,13.442-49.215,26.04-63.636,6.051-6.932,34.484-36.976,88.857-36.976s82.88,29.92,88.931,36.827c12.611,14.421,23.225,30.727,26.04,63.636,2.071,23.919.285,49.525-.558,62.644-.285,4.327,1.017,5.927,4.613,5.927a10.648,10.648,0,0,0,2.48-.335c6.745-1.624,18.4-7.638,30.4-10.242a27.641,27.641,0,0,1,5.964-.67c6.386,0,12.4,2.48,14.88,8.928,3.546,9.374-1.24,17-12.189,24.639-6.609,4.612-30.429,19.343-35.8,24.315-5.568,5.134-4.836,9.1-4.191,14.149.533,4.228,12.511,60.4,87.666,96.718C468.629,373.011,476.119,377.524,462.913,384.877Z"/>
  </svg>
);


export default function LinksPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const BRAND = {
    primary: "#770705",
    secondary: "#E5C7B7",
    bg: "#FFF5EF",
    textDark: "#3A1A12",
    border: "rgba(119, 7, 5, 0.15)"
  };

  const iconStyle: React.CSSProperties = { width: '20px', height: '20px', color: BRAND.primary };
  const socialIconStyle: React.CSSProperties = { width: '18px', height: '18px', color: BRAND.primary };

  const links = [
    {
      title: "الموقع الرسمي",
      titleEn: "OFFICIAL WEBSITE",
      icon: <Globe style={iconStyle} />,
      url: "https://almalakiyah.com",
    },
    {
      title: "البريد الإلكتروني",
      titleEn: "EMAIL",
      icon: <Mail style={iconStyle} />,
      url: "mailto:info@almalakiyah.com",
    },
    {
      title: "رقم الهاتف",
      titleEn: "PHONE",
      icon: <Phone style={iconStyle} />,
      url: "tel:+96899481717",
    },
        {
      title: "الواتساب",
      titleEn: "WHATSAPP",
      icon: <FaWhatsapp style={socialIconStyle} />,
      url: "https://wa.me/96899481717",
    },
  ];

  const socials = [
    { icon: <XIcon style={socialIconStyle} />, url: "https://x.com/almalakiyah_inv" },
    { icon: <Facebook style={socialIconStyle} />, url: "https://www.facebook.com/almalakiyah.inv/" },
    { icon: <Instagram style={socialIconStyle} />, url: "https://www.instagram.com/almalakiyah_inv" },
    { icon: <Snapchat style={socialIconStyle} />, url: "https://www.snapchat.com/@almalakiyah_inv" },
  ];

  return (
    <div style={{ 
      backgroundColor: BRAND.bg,
      minHeight: '100vh', 
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      overflow: 'hidden'
    }}>
      {/* Background Elements - strictly matching the reference */}
      
      {/* Left side delicate vector pattern */}
      <svg 
        viewBox="0 0 1000 1000" 
        style={{ 
          position: 'fixed', 
          left: '-25vw', 
          top: '50%', 
          transform: 'translateY(-50%)', 
          width: '80vw', 
          height: '80vw', 
          minWidth: '600px',
          minHeight: '600px',
          zIndex: 0, 
          pointerEvents: 'none',
          opacity: 0.9
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
                stroke="#EADCD2" 
                strokeWidth="2" 
                opacity={Math.max(0.1, 0.8 - (i * 0.05))}
              />
            );
          })}
        </g>
      </svg>
      
      {/* Right side background elements removed as requested */}

      {/* Main Container */}
      <div 
        style={{ 
          maxWidth: '520px', 
          width: '100%', 
          zIndex: 2, 
          position: 'relative', 
          backgroundColor: '#FFFFFF',
          borderRadius: '1.5rem',
          padding: '3rem 2rem',
          boxShadow: '0 25px 50px rgba(119, 7, 5, 0.08), 0 10px 20px rgba(119, 7, 5, 0.04)',
          display: 'flex', 
          flexDirection: 'column',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        {/* Logo */}
        <a href="https://almalakiyah.com" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem' }}>
          <img 
            src="/assets/img/horizontal.png" 
            alt="الملكية للإستثمار | Al Malakiyah Investment" 
            style={{ width: 'auto', height: '65px', objectFit: 'contain' }} 
          />
        </a>

        {/* Link Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                padding: '1rem 1.25rem', 
                borderRadius: '0.75rem',
                border: `1px solid ${BRAND.border}`,
                backgroundColor: '#FFFFFF',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(119, 7, 5, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(119, 7, 5, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = BRAND.border;
              }}
            >
              {/* Text aligned to the right, placed first in DOM to align right in RTL */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-sans-ar)', fontWeight: '700', fontSize: '1rem', color: BRAND.textDark, marginBottom: '0.1rem' }}>
                  {link.title}
                </span>
                <span style={{ fontFamily: 'var(--font-sans-en)', fontSize: '0.65rem', color: '#886E65', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {link.titleEn}
                </span>
              </div>
              
              {/* Icon circle aligned to the left */}
              <div style={{ 
                width: '40px',
                height: '40px',
                backgroundColor: '#FBF5F4', // very soft primary tint
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                flexShrink: 0
              }}>
                {link.icon}
              </div>
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          {socials.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                width: '42px', 
                height: '42px', 
                borderRadius: '50%', 
                border: `1px solid ${BRAND.border}`,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                backgroundColor: 'transparent',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(119, 7, 5, 0.05)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ fontSize: '0.75rem', color: '#886E65', fontFamily: 'var(--font-sans-ar)' }}>
            الملكية للاستثمار <span style={{ fontFamily: 'var(--font-sans-en)' }}>{new Date().getFullYear()}</span> ©
          </p>
        </div>
      </div>
    </div>
  );
}
