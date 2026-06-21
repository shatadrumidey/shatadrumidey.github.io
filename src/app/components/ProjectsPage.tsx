import { Link } from "react-router";

export function ProjectsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", fontFamily: "'DM Sans', sans-serif" }}>
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(90,150,210,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 56px",
      }}>
        <Link to="/" style={{ color: "#0C1B28", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none", opacity: 0.55 }}>HOME</Link>
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
                color: path === "/projects" ? "rgba(60,110,175,0.9)" : "#0C1B28",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                opacity: path === "/projects" ? 1 : 0.5,
                borderBottom: path === "/projects" ? "1.5px solid rgba(90,150,210,0.6)" : "none",
                paddingBottom: 2,
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "80px 32px" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", color: "#0C1B28", marginBottom: "40px" }}>Projects</h1>
        <div style={{ display: "grid", gap: "32px" }}>
          <div style={{ padding: "32px", borderRadius: "16px", border: "1px solid rgba(90,150,210,0.14)", background: "rgba(240,247,255,0.45)" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "#0C1B28", marginBottom: "12px" }}>Coming Soon</h3>
            <p style={{ color: "#3A4F63", lineHeight: 1.6 }}>This section is currently under development. Check back soon for my latest work in Machine Learning and Software Engineering.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
