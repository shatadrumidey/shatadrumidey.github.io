import { Link } from "react-router";
import profilePhoto from "../../imports/image-2.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const bg = "#050B14";
const textMain = "#FAFAFA";
const textSec = "#A9B5C2";
const accent = "#4EA0E6";
const cardBg = "rgba(255,255,255,0.02)";
const navBg = "rgba(5,11,20,0.95)";
const navText = "#FAFAFA";
const navBorder = "rgba(78,160,230,0.15)";
const wave1 = "rgba(78,160,230,0.05)";
const wave2 = "rgba(78,160,230,0.1)";
const wave3 = "rgba(78,160,230,0.2)";
const waveStroke = "rgba(78,160,230,0.3)";
const yachtFill = "#0A1628";
const yachtStroke = "#4EA0E6";
const lineGrad = "linear-gradient(to right, transparent 0%, rgba(78,160,230,0.2) 30%, rgba(78,160,230,0.4) 50%, rgba(78,160,230,0.2) 70%, transparent 100%)";
const dividerGrad = "linear-gradient(to right, transparent 0%, rgba(78,160,230,0.15) 20%, rgba(78,160,230,0.3) 50%, rgba(78,160,230,0.15) 80%, transparent 100%)";

const MINI_STARS: [number, number, number][] = [
  [92, 4, 1.4], [96, 11, 1], [89, 18, 1.6], [94, 7, 1],
  [3, 5, 1.2], [7, 12, 1], [1, 19, 1.4], [5, 8, 1],
  [88, 25, 1], [98, 30, 1.2],
];

const experiences = [
  {
    title: "Research Intern — Computer Vision in Healthcare",
    org: "IIT Kharagpur (Prof. Jiaul Hoque Paik)",
    period: "April 2026 – Present",
    bullets: [
      "Developing deep learning models for skin cancer detection on the Diverse Dermatology Images (DDI) dataset, targeting racial bias in dermatology AI that underperforms on darker Fitzpatrick Skin Tones (FST V–VI).",
      "Proposed YOLO26-LWN, a custom architecture replacing the C3k2 block with a novel C3k2_LWN block, achieving 79.4% ROC-AUC on dark skin tones — outperforming ResNet, EfficientNet, and standard YOLO variants.",
      "Benchmarked 30+ model configurations across sensitivity, specificity, and ROC-AUC stratified by skin tone; targeting submission to the 41st Annual AAAI Conference on Artificial Intelligence.",
    ],
  },
  {
    title: "Research Intern | EEG-based Memory Reconstruction using ML",
    org: "EchoLab, University of Texas, Dallas",
    period: "June 2026 - Present",
    bullets: [
      "Developed modules for multimodal fusion of EEG features and structured memory descriptions for neural decoding.",
      "Investigating feature extraction pipelines for EEG and conditioning mechanisms for generative image/video reconstruction.",
      "Exploring SLAM-inspired 3D scene representations to improve temporal consistency in reconstructed memory sequences.",
    ],
  },
  {
    title: "Machine Learning Intern",
    org: "Judix",
    period: "Dec 2025 – Feb 2026",
    bullets: [
      "Designed the end-to-end pipeline for a domain-specific legal chatbot, handling document ingestion, retrieval, and response generation.",
      "Studied and applied principles of agentic AI to enable multi-step reasoning and task decomposition in legal query workflows.",
    ],
  },
];

export function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Scattered star dots */}
      {MINI_STARS.map(([x, y, size], i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
            borderRadius: "50%",
            background: accent,
            opacity: 0.22,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}

      {/* Small crescent moon */}
      <div style={{ position: "fixed", top: 22, right: 28, zIndex: 0, pointerEvents: "none", opacity: 0.13 }}>
        <svg width="28" height="28" viewBox="0 0 44 44" fill="none">
          <defs>
            <mask id="about-crescent">
              <circle cx="22" cy="22" r="20" fill="white" />
              <circle cx="30" cy="18" r="17" fill="black" />
            </mask>
          </defs>
          <circle cx="22" cy="22" r="20" fill={accent} mask="url(#about-crescent)" />
        </svg>
      </div>

      {/* Top edge subtle strip */}
      <div style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        height: 3,
        background: lineGrad,
        zIndex: 10,
      }} />

      {/* Nav */}
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
        <Link
          to="/"
          style={{
            color: navText,
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            opacity: 0.55,
            textDecoration: "none",
          }}
        >
          HOME
        </Link>
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
                color: path === "/about" ? accent : navText,
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                opacity: path === "/about" ? 1 : 0.5,
                borderBottom: path === "/about" ? `1.5px solid ${accent}` : "none",
                paddingBottom: 2,
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Background Decorative Lighthouse */}
      <div style={{ position: "absolute", right: "10%", top: "45%", opacity: 0.05, pointerEvents: "none", zIndex: 0 }}>
        <svg width="300" height="800" viewBox="0 0 100 250" fill="none">
          <path d="M35 240 L65 240 L58 40 L42 40 Z" stroke={accent} strokeWidth="0.8" />
          <rect x="42" y="30" width="16" height="10" stroke={accent} strokeWidth="0.8" />
          <path d="M42 30 L50 15 L58 30" stroke={accent} strokeWidth="0.8" />
          <line x1="40" y1="80" x2="60" y2="80" stroke={accent} strokeWidth="0.4" />
          <line x1="38" y1="130" x2="62" y2="130" stroke={accent} strokeWidth="0.4" />
          <line x1="36" y1="180" x2="64" y2="180" stroke={accent} strokeWidth="0.4" />
          <circle cx="50" cy="35" r="3" fill={accent} opacity={0.1} />
        </svg>
      </div>

      {/* Main content */}
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "56px 32px 80px", position: "relative", zIndex: 10 }}>

        {/* Intro box */}
        <div style={{
          display: "flex",
          gap: 48,
          alignItems: "flex-start",
          padding: "40px 44px",
          borderRadius: 16,
          border: `1px solid ${navBorder}`,
          background: cardBg,
          marginBottom: 60,
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Subtle corner dot cluster */}
          <div style={{ position: "absolute", bottom: 16, right: 20, display: "flex", gap: 5, opacity: 0.18 }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ width: 3, height: 3, borderRadius: "50%", background: accent }} />
            ))}
          </div>

          {/* Photo */}
          <div style={{ flexShrink: 0 }}>
            <div style={{
              width: 160,
              height: 190,
              borderRadius: 12,
              overflow: "hidden",
              border: `2px solid ${navBorder}`,
              boxShadow: `0 4px 24px ${navBorder}`,
            }}>
              <ImageWithFallback
                src={profilePhoto}
                alt="Shatadrumi Dey"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>

          {/* Bio text */}
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontFamily: "PaintBrushScript, serif",
              fontSize: "2.8rem",
              fontWeight: "normal",
              color: textMain,
              margin: "0 0 18px 0",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}>
              Hi, I'm Shatadrumi :){" "}
              
            </h1>
            <p style={{ color: textSec, lineHeight: 1.75, margin: "0 0 12px 0", fontSize: "0.95rem" }}>
              I'm a third-year undergraduate at IIT Patna studying Mathematics & Computing.
            </p>
            <p style={{ color: textSec, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              I'm fascinated by machine learning and software engineering, and I enjoy building things that blend theory with real-world impact. Outside academics, I've been practicing Bharatanatyam for over 12 years, occasionally write poetry, and will never pass up a chance to appreciate a beautiful math problem.
            </p>
          </div>
        </div>

        {/* Thin horizon-style divider */}
        <div style={{ height: 1, background: dividerGrad, marginBottom: 52 }} />

        {/* Past Experience */}
        <section>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: textMain,
            letterSpacing: "0.02em",
            margin: "0 0 36px 0",
            textTransform: "uppercase",
            opacity: 0.85,
          }}>
            Past Experience
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{
                paddingLeft: 20,
                borderLeft: `2px solid ${navBorder}`,
                position: "relative",
              }}>
                {/* Accent dot on the left border */}
                <div style={{
                  position: "absolute",
                  left: -5,
                  top: 6,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: accent,
                  border: `1.5px solid ${bg}`,
                }} />

                <div style={{ marginBottom: 10 }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: textMain,
                    margin: "0 0 4px 0",
                    lineHeight: 1.4,
                  }}>
                    {exp.title}
                  </h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                    <span style={{ color: accent, fontSize: "0.82rem", letterSpacing: "0.04em" }}>
                      {exp.org}
                    </span>
                    {exp.period && (
                      <>
                        <span style={{ color: accent, opacity: 0.5, fontSize: "0.75rem" }}>·</span>
                        <span style={{ color: textSec, fontSize: "0.78rem", letterSpacing: "0.03em" }}>
                          {exp.period}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <ul style={{ margin: 0, paddingLeft: 18, listStyleType: "none" }}>
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} style={{
                      color: textSec,
                      fontSize: "0.88rem",
                      lineHeight: 1.72,
                      marginBottom: 7,
                      position: "relative",
                      paddingLeft: 14,
                    }}>
                      <span style={{
                        position: "absolute",
                        left: 0,
                        top: "0.6em",
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: accent,
                        opacity: 0.45,
                        display: "block",
                      }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom horizon line */}
        <div style={{ height: 1, background: dividerGrad, marginTop: 64, marginBottom: 40 }} />
      </main>

      {/* Prominent Waves & Small Yacht at Bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "140px", pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 140" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0 }}>
          <path d="M-100 80 Q60 50 220 80 T540 80 T860 80 T1180 80 T1500 80 L1500 140 L-100 140 Z" fill={wave1} stroke={waveStroke} strokeWidth="1.5" />
          <path d="M-100 100 Q60 130 220 100 T540 100 T860 100 T1180 100 T1500 100 L1500 140 L-100 140 Z" fill={wave2} stroke={waveStroke} strokeWidth="1.5" />
          <path d="M-100 120 Q60 90 220 120 T540 120 T860 120 T1180 120 T1500 120 L1500 140 L-100 140 Z" fill={wave3} stroke={waveStroke} strokeWidth="1.5" />
        </svg>

        {/* Small static yacht */}
        <div style={{ position: "absolute", bottom: "45px", right: "15%" }}>
          <svg width="60" height="50" viewBox="0 0 72 60" fill="none">
            <line x1="34" y1="38" x2="34" y2="4" stroke={yachtStroke} strokeWidth="1.5" />
            <path d="M34 6 L34 36 L14 34 Z" fill={yachtFill} stroke={yachtStroke} strokeWidth="1" />
            <path d="M34 10 L34 32 L50 28 Z" fill={yachtFill} stroke={yachtStroke} strokeWidth="1" />
            <path d="M10 38 Q36 44 62 38 L58 46 Q36 52 14 46 Z" fill={yachtFill} stroke={yachtStroke} strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
