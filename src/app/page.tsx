"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f8fafc", overflowX: "hidden" }}>
      <div
        className="container"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          padding: "2rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-10%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)",
            zIndex: 0,
            borderRadius: "50%",
            opacity: 0.6,
            pointerEvents: "none",
          }}
        ></div>

        <header style={{ maxWidth: "850px", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.6rem 1.4rem",
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: "999px",
              fontSize: "0.85rem",
              fontWeight: "700",
              color: "var(--primary)",
              marginBottom: "2.5rem",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                background: "var(--primary)",
                borderRadius: "50%",
                boxShadow: "0 0 10px var(--primary)",
              }}
            ></span>
            SMART TRACKING!
          </div>

          <h1
            style={{
              fontSize: "clamp(3.5rem, 9vw, 5.5rem)",
              fontWeight: "900",
              lineHeight: "1.02",
              letterSpacing: "-0.06em",
              marginBottom: "1.8rem",
              color: "var(--text-main)",
            }}
          >
            The{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--primary) 0%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Smart Issue Board
            </span>
          </h1>

          <p
            className="text-muted"
            style={{
              fontSize: "1.35rem",
              maxWidth: "650px",
              margin: "0 auto 3.5rem auto",
              lineHeight: "1.6",
            }}
          >
            Streamline your workflow, track bugs in real-time, and collaborate
            seamlessly with the most intuitive board ever built.
          </p>
        </header>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            marginBottom: "6rem",
            flexWrap: "wrap",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <Link href="/signup" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "1.2rem 3rem",
                fontSize: "1.15rem",
                borderRadius: "16px",
                width: "240px",
                fontWeight: "700",
                background:
                  "linear-gradient(135deg, var(--primary) 0%, #a855f7 100%)",
                border: "none",
                color: "white",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 30px rgba(99, 102, 241, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get Started
            </button>
          </Link>
          <Link href="/login" style={{ textDecoration: "none" }}>
            <button
              style={{
                width: "240px",
                padding: "1.2rem 3rem",
                fontSize: "1.15rem",
                borderRadius: "16px",
                background: "#1e293b",
                color: "white",
                border: "none",
                fontWeight: "700",
                cursor: "pointer",
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#0f172a";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#1e293b";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Log In
            </button>
          </Link>
        </div>
      </div>
      <section
        className="container"
        style={{ padding: "8rem 2rem", textAlign: "center" }}
      >
        <h2
          style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "1rem" }}
        >
          Everything you need to ship.
        </h2>
        <p
          className="text-muted"
          style={{ fontSize: "1.2rem", marginBottom: "5rem" }}
        >
          A suite of tools designed for high-performance engineering teams.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          <div className="card" style={{ padding: "3rem", textAlign: "left" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>⚡</div>
            <h3 style={{ marginBottom: "1rem" }}>Lightning Fast</h3>
            <p className="text-muted">
              Built on top of real-time listeners. See status changes and
              assignments the millisecond they happen.
            </p>
          </div>
          <div className="card" style={{ padding: "3rem", textAlign: "left" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>🎨</div>
            <h3 style={{ marginBottom: "1rem" }}>Modern UI</h3>
            <p className="text-muted">
              A clean, dark-mode ready interface that focuses on scannability
              and professional aesthetics.
            </p>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: "8rem" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
            borderRadius: "40px",
            padding: "6rem 2rem",
            textAlign: "center",
            color: "white",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <h2
            style={{
              fontSize: "3.5rem",
              fontWeight: "800",
              marginBottom: "1.5rem",
            }}
          >
            Ready to fix your workflow?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              opacity: 0.8,
              marginBottom: "3rem",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
            }}
          >
            Join the developers who are managing their software lifecycle with
            the Smart Issue Board.
          </p>
          <Link href="/signup">
            <button
              style={{
                padding: "1.2rem 4rem",
                background: "white",
                color: "#1e293b",
                border: "none",
                borderRadius: "12px",
                fontWeight: "800",
                fontSize: "1.1rem",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      <footer
        style={{
          padding: "4rem 2rem",
          background: "white",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div>
            <h3
              style={{ fontWeight: "800", color: "var(--primary)", margin: 0 }}
            >
              Smart Board
            </h3>
            <p
              className="text-muted"
              style={{ fontSize: "0.9rem", margin: "0.2rem 0 0 0" }}
            >
              Building better tools for developers.
            </p>
          </div>
          <p className="text-muted" style={{ fontSize: "0.9rem", margin: 0 }}>
            © 2026 Smart Issue Board. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
