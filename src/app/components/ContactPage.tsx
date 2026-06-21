import { Link } from "react-router";
import { motion } from "motion/react";

const bg = "#050B14";
const textMain = "#FAFAFA";
const textSec = "#A9B5C2";
const accent = "#4EA0E6";
const navBg = "rgba(5,11,20,0.95)";
const navBorder = "rgba(78,160,230,0.15)";

// Illustration palette — distinct from the dark background
const shipLight = "#E8F3FC";   // sails, hull, body, speech bubble
const shipDark = "#0B2540";    // hat, belt, flag, eyes — deeper than bg for contrast
const shipStroke = "#4EA0E6";  // all outlines — accent colour, visible on both light and dark

export function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", background: bg, fontFamily: "'DM Sans', sans-serif", overflowX: "hidden", position: "relative", display: "flex", flexDirection: "column" }}>
      {/* Navigation */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: navBg,
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${navBorder}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 56px",
      }}>
        <Link to="/" style={{ color: textMain, fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none", opacity: 0.55 }}>HOME</Link>
        <div style={{ display: "flex", gap: 36 }}>
          {[
            { label: "Projects", path: "/projects" },
            { label: "About", path: "/about" },
            { label: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              style={{
                color: path === "/contact" ? accent : textMain,
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                opacity: path === "/contact" ? 1 : 0.5,
                borderBottom: path === "/contact" ? `1.5px solid ${accent}` : "none",
                paddingBottom: 2,
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{
        flex: 1,
        maxWidth: 1200,
        width: "100%",
        margin: "0 auto",
        padding: "80px 48px 300px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 10
      }}>

        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: "500px" }}
        >
          <h1 style={{
            fontFamily: "PaintBrushScript, serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            color: textMain,
            marginBottom: "24px",
            fontWeight: "normal",
            lineHeight: 1.1
          }}>
            Let's connect!
          </h1>
          <p style={{
            color: textSec,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "40px",
            opacity: 0.85,
            maxWidth: "480px"
          }}>
            Whether it's a project, research opportunity, internship, or a conversation on AI, math, tech, or anything that sparks curiosity to you about my work, I'd love to hear from you :)
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a
              href="mailto:shatadrumidey@gmail.com"
              style={{
                color: accent,
                fontSize: "1rem",
                textDecoration: "none",
                fontWeight: 500,
                borderBottom: `1.5px solid rgba(78,160,230,0.3)`,
                paddingBottom: "4px",
                alignSelf: "start"
              }}
            >
              shatadrumidey@gmail.com
            </a>
          </div>
        </motion.div>
      </main>

      {/* Full-width water & ship illustration at bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "450px", pointerEvents: "none", zIndex: 5 }}>
        <style>
          {`
            @keyframes ship-bob {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-12px) rotate(-1deg); }
            }
            .ship-anim { animation: ship-bob 6s infinite ease-in-out; transform-origin: center bottom; }
          `}
        </style>
        <svg width="100%" height="100%" viewBox="0 0 2000 600" preserveAspectRatio="xMaxYMax slice">
          {/* Back wave */}
          <path d="M-100 380 Q60 350 220 380 T540 380 T860 380 T1180 380 T1500 380 T1820 380 T2140 380 L2140 650 L-100 650 Z" fill="rgba(78,160,230,0.05)" stroke="rgba(78,160,230,0.3)" strokeWidth="2" />

          {/* Ship group */}
          <g transform="translate(1250, 140)">
            <g className="ship-anim">
              {/* Rigging */}
              <line x1="150" y1="20" x2="300" y2="240" stroke={shipStroke} strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
              <line x1="150" y1="60" x2="20" y2="240" stroke={shipStroke} strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />

              {/* Mast */}
              <line x1="150" y1="10" x2="150" y2="240" stroke={shipStroke} strokeWidth="6" strokeLinecap="round" />
              <line x1="150" y1="50" x2="250" y2="50" stroke={shipStroke} strokeWidth="4" strokeLinecap="round" />
              <line x1="150" y1="130" x2="230" y2="130" stroke={shipStroke} strokeWidth="3" strokeLinecap="round" />

              {/* Sails */}
              <path d="M150 50 Q230 110 150 160" fill={shipLight} stroke={shipStroke} strokeWidth="3" />
              <path d="M150 50 Q70 110 150 160" fill={shipLight} stroke={shipStroke} strokeWidth="3" />
              <path d="M150 130 Q210 180 150 220" fill={shipLight} stroke={shipStroke} strokeWidth="2.5" />
              <path d="M150 130 Q90 180 150 220" fill={shipLight} stroke={shipStroke} strokeWidth="2.5" />

              {/* Flag */}
              <path d="M150 15 L210 30 L150 45 Z" fill={shipStroke} />

              {/* Pirate Character */}
              <g transform="translate(60, 120)">
                {/* Body */}
                <path d="M25 60 L55 60 L65 110 L15 110 Z" fill={shipLight} stroke={shipStroke} strokeWidth="3" strokeLinejoin="round" />
                {/* Belt */}
                <rect x="18" y="90" width="44" height="8" fill={shipDark} stroke={shipStroke} strokeWidth="1" />
                {/* Arms */}
                <path d="M25 65 Q5 80 -5 65" fill="none" stroke={shipStroke} strokeWidth="3" strokeLinecap="round" />
                <path d="M55 65 Q75 80 85 50" fill="none" stroke={shipStroke} strokeWidth="3" strokeLinecap="round" />
                {/* Hands */}
                <circle cx="85" cy="50" r="4" fill={shipLight} stroke={shipStroke} strokeWidth="2" />
                <circle cx="-5" cy="65" r="4" fill={shipLight} stroke={shipStroke} strokeWidth="2" />

                {/* Head */}
                <circle cx="40" cy="40" r="22" fill={shipLight} stroke={shipStroke} strokeWidth="3" />
                {/* Hair */}
                <path d="M18 40 Q5 60 12 85" fill="none" stroke={shipStroke} strokeWidth="3" strokeLinecap="round" />
                <path d="M62 40 Q75 60 68 85" fill="none" stroke={shipStroke} strokeWidth="3" strokeLinecap="round" />
                {/* Hat (Pirate Tricorne) */}
                <path d="M5 25 Q40 -15 75 25 L65 30 Q40 10 15 30 Z" fill={shipDark} stroke={shipStroke} strokeWidth="1.5" />
                {/* Face Details */}
                <circle cx="32" cy="38" r="3" fill={shipDark} />
                <circle cx="48" cy="38" r="3" fill={shipDark} />
                {/* Big Smile */}
                <path d="M30 48 Q40 58 50 48" fill="none" stroke={shipDark} strokeWidth="2.5" strokeLinecap="round" />
              </g>

              {/* Ahoy Speech Bubble */}
              <g transform="translate(150, 40)">
                <path d="M10 30 Q30 -10 80 0 Q130 10 110 50 Q80 90 30 70 L-20 80 L10 50 Z" stroke={shipStroke} strokeWidth="2.5" fill={shipLight} strokeLinejoin="round" />
                <text x="32" y="45" fontFamily="'Playfair Display', serif" fontSize="26" fill={shipDark} fontWeight="bold">ahoy!</text>
              </g>

              {/* Ship Hull */}
              <path d="M-60 220 L360 220 L310 320 L-10 320 Z" fill={shipLight} stroke={shipStroke} strokeWidth="4" strokeLinejoin="round" />
              {/* Hull Details */}
              <path d="M-60 220 L360 220" stroke={shipStroke} strokeWidth="4" />
              <line x1="-35" y1="250" x2="335" y2="250" stroke={shipStroke} strokeWidth="1.5" opacity="0.35" />
              <line x1="-15" y1="280" x2="315" y2="280" stroke={shipStroke} strokeWidth="1.5" opacity="0.35" />
              {/* Portholes */}
              <circle cx="50" cy="265" r="14" fill={bg} stroke={shipStroke} strokeWidth="3" />
              <circle cx="150" cy="265" r="14" fill={bg} stroke={shipStroke} strokeWidth="3" />
              <circle cx="250" cy="265" r="14" fill={bg} stroke={shipStroke} strokeWidth="3" />
            </g>
          </g>

          {/* Mid wave */}
          <path d="M-100 420 Q60 450 220 420 T540 420 T860 420 T1180 420 T1500 420 T1820 420 T2140 420 L2140 650 L-100 650 Z" fill="rgba(78,160,230,0.1)" stroke="rgba(78,160,230,0.3)" strokeWidth="2" />

          {/* Front wave */}
          <path d="M-100 460 Q60 430 220 460 T540 460 T860 460 T1180 460 T1500 460 T1820 460 T2140 460 L2140 650 L-100 650 Z" fill="rgba(78,160,230,0.2)" stroke="rgba(78,160,230,0.3)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
