import { motion } from "motion/react";

const STARS: [number, number][] = [
  [8, 6], [14, 18], [22, 9], [31, 4], [38, 14], [45, 7],
  [52, 19], [60, 5], [67, 12], [73, 3], [81, 16], [88, 8],
  [93, 21], [19, 30], [35, 27], [57, 24], [77, 29], [90, 33],
  [10, 38], [48, 35], [70, 40], [85, 22], [26, 42], [64, 44],
  [6, 50], [42, 48], [79, 46],
  [3, 12], [17, 5], [29, 22], [43, 11], [71, 8], [96, 16], [55, 32], [83, 41],
];

import { Link } from "react-router";

export function HomePage() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", background: "#070C12", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Sky gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, #03080F 0%, #071018 45%, #0C1B28 68%, #0A1820 72%, #05111C 100%)",
      }} />

      {/* Stars */}
      {STARS.map(([x, y], i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${x}%`, top: `${y}%`,
          width: i % 9 === 0 ? 2 : 1,
          height: i % 9 === 0 ? 2 : 1,
          borderRadius: "50%",
          background: "white",
          opacity: 0.14 + (i % 5) * 0.07,
        }} />
      ))}

      {/* Shooting star — single long streak from upper-left across the sky */}
      <motion.div
        style={{
          position: "absolute",
          top: "6%",
          left: "5%",
          width: 220,
          height: 2,
          borderRadius: 2,
          background: "linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.5), transparent)",
          transformOrigin: "left center",
          rotate: 18,
          zIndex: 5,
          pointerEvents: "none",
        }}
        initial={{ opacity: 0, x: 0, y: 0, scaleX: 0 }}
        animate={{
          opacity: [0, 1, 0.9, 0],
          x: [0, 480],
          y: [0, 155],
          scaleX: [0.1, 1, 1, 0.6],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 9,
          times: [0, 0.15, 0.75, 1],
          ease: "easeOut",
        }}
      />
      {/* Shooting star bright head */}
      <motion.div
        style={{
          position: "absolute",
          top: "6%",
          left: "5%",
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 0 8px 3px rgba(200,220,255,0.7)",
          zIndex: 6,
          pointerEvents: "none",
        }}
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{
          opacity: [0, 1, 0.9, 0],
          x: [0, 480],
          y: [0, 155],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 9,
          times: [0, 0.15, 0.75, 1],
          ease: "easeOut",
        }}
      />

      {/* Crescent moon (SVG mask technique) */}
      <div style={{ position: "absolute", top: "8%", right: "13%", zIndex: 4 }}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <defs>
            <mask id="crescent-mask">
              <circle cx="22" cy="22" r="20" fill="white" />
              <circle cx="30" cy="18" r="17" fill="black" />
            </mask>
          </defs>
          <circle
            cx="22" cy="22" r="20"
            fill="url(#moon-gradient)"
            mask="url(#crescent-mask)"
          />
          <circle cx="22" cy="22" r="20" fill="none" stroke="rgba(220,235,255,0.12)" strokeWidth="1" mask="url(#crescent-mask)" />
          <defs>
            <radialGradient id="moon-gradient" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="rgba(255,255,245,0.95)" />
              <stop offset="55%" stopColor="rgba(220,232,248,0.85)" />
              <stop offset="100%" stopColor="rgba(180,205,235,0.7)" />
            </radialGradient>
          </defs>
        </svg>
        <div style={{
          position: "absolute",
          top: -12, left: -12,
          width: 68, height: 68,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(180,210,255,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: -1,
        }} />
      </div>

      {/* Fog wisps */}
      <div style={{
        position: "absolute", top: "52%", left: "5%", width: "30%", height: 24,
        background: "linear-gradient(to right, transparent, rgba(80,120,160,0.08), transparent)",
        filter: "blur(10px)", borderRadius: "50%",
      }} />
      <div style={{
        position: "absolute", top: "56%", right: "10%", width: "25%", height: 18,
        background: "linear-gradient(to right, transparent, rgba(80,120,160,0.07), transparent)",
        filter: "blur(12px)", borderRadius: "50%",
      }} />

      {/* Horizon haze */}
      <div style={{
        position: "absolute", top: "64%", left: 0, right: 0, height: "8%",
        background: "linear-gradient(to bottom, transparent, rgba(30,70,110,0.18), transparent)",
        filter: "blur(6px)",
      }} />

      {/* Horizon line */}
      <div style={{
        position: "absolute", top: "68%", left: 0, right: 0, height: 1,
        background: "linear-gradient(to right, transparent 0%, rgba(60,110,160,0.35) 20%, rgba(80,130,180,0.45) 50%, rgba(60,110,160,0.35) 80%, transparent 100%)",
      }} />

      {/* Water */}
      <div style={{
        position: "absolute", top: "68%", left: 0, right: 0, bottom: 0,
        background: "linear-gradient(to bottom, #0C2035 0%, #081828 40%, #050F1A 100%)",
      }} />

      {/* Waves */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.svg
          key={i}
          style={{
            position: "absolute",
            top: `${69.5 + i * 4.5}%`,
            left: 0, width: "200%",
            opacity: 0.18 - i * 0.025,
          }}
          height="18" viewBox="0 0 1440 18" preserveAspectRatio="none"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
        >
          <path
            d={`M0 9 C60 ${4 + i} 120 ${14 - i} 180 9 C240 ${4 + i} 300 ${14 - i} 360 9 C420 ${4 + i} 480 ${14 - i} 540 9 C600 ${4 + i} 660 ${14 - i} 720 9 C780 ${4 + i} 840 ${14 - i} 900 9 C960 ${4 + i} 1020 ${14 - i} 1080 9 C1140 ${4 + i} 1200 ${14 - i} 1260 9 C1320 ${4 + i} 1380 ${14 - i} 1440 9`}
            stroke="rgba(80,140,200,0.9)" strokeWidth={i === 0 ? 1.2 : 0.8} fill="none"
          />
        </motion.svg>
      ))}

      {/* Moon reflection on water */}
      <div style={{
        position: "absolute", top: "69%", right: "14%",
        width: 10, bottom: 0,
        background: "linear-gradient(to bottom, rgba(200,220,255,0.14), rgba(180,210,255,0.03) 55%, transparent)",
        filter: "blur(3px)", borderRadius: 4,
      }} />

      {/* Yacht */}
      <motion.div
        style={{ position: "absolute", top: "59%", x: "45vw" }}
        animate={{ x: "110vw" }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          animate={{ y: [0, -4, 0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ scale: 1.4 }}
        >
          <svg width="120" height="130" viewBox="0 0 72 60" fill="none">
            <line x1="34" y1="38" x2="34" y2="4" stroke="rgba(200,215,230,0.55)" strokeWidth="1" strokeLinecap="round" />
            <path d="M34 6 L34 36 L14 34 Z" fill="rgba(220,230,245,0.13)" stroke="rgba(200,215,235,0.3)" strokeWidth="0.6" />
            <path d="M34 10 L34 32 L50 28 Z" fill="rgba(220,230,245,0.08)" stroke="rgba(200,215,235,0.2)" strokeWidth="0.6" />
            <line x1="20" y1="36" x2="52" y2="36" stroke="rgba(180,200,220,0.4)" strokeWidth="0.8" strokeLinecap="round" />
            <path d="M10 38 Q36 44 62 38 L58 46 Q36 52 14 46 Z" fill="rgba(15,35,55,0.95)" stroke="rgba(80,130,170,0.35)" strokeWidth="0.8" />
            <path d="M14 38.5 Q36 43 58 38.5" stroke="rgba(80,140,190,0.2)" strokeWidth="0.5" fill="none" />
            <circle cx="36" cy="37" r="1.5" fill="rgba(255,235,150,0.3)" stroke="rgba(180,200,220,0.2)" strokeWidth="0.4" />
            <path d="M10 42 Q6 43 2 42.5" stroke="rgba(80,130,180,0.2)" strokeWidth="0.6" fill="none" strokeLinecap="round" />
            <path d="M10 44 Q4 45.5 0 44.5" stroke="rgba(80,130,180,0.12)" strokeWidth="0.5" fill="none" strokeLinecap="round" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Nav */}
      <motion.nav
        className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 pt-8 md:px-14 md:pt-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <Link
          to="/"
          style={{
            color: "rgba(220,235,250,0.82)",
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: "none",
          }}
        >
          HOME
        </Link>
        <div className="flex gap-8">
          {[
            { label: "Projects", path: "/projects" },
            { label: "About", path: "/about" },
            { label: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <motion.div key={label} whileHover={{ scale: 1.05 }}>
              <Link
                to={path}
                style={{
                  color: "rgba(220,235,250,0.78)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>

      {/* Name */}
      <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-8 md:px-14 pointer-events-none">
        <div style={{ lineHeight: 0.88 }} className="pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 style={{
              fontFamily: "PaintBrushScript, serif",
              fontSize: "clamp(4rem, 10vw, 9rem)",
              fontWeight: "normal",
              color: "#E8EFF5",
              letterSpacing: "-0.02em",
              margin: 0, lineHeight: 0.93,
              whiteSpace: "nowrap",
            }}>
              Shatadrumi Dey
            </h1>
          </motion.div>
        </div>
      </div>

      
    </div>
  );
}
