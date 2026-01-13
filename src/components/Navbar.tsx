"use client";

import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const userEmail = auth.currentUser?.email;

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <nav className="navbar">
      {/* Brand Section */}
      <Link
        href="/dashboard"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <div
          style={{
            width: "35px",
            height: "35px",
            background: "linear-gradient(135deg, var(--primary), #818cf8)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"></path>
          </svg>
        </div>
        <h2 style={{ margin: 0, color: "var(--text-main)" }}>Smart Board</h2>
      </Link>

      {/* Right Side Actions: Side-by-Side */}
      <div
        className="flex"
        style={{ display: "flex", alignItems: "center", gap: "1rem" }}
      >
        {/* HIGHLIGHTED EMAIL PILL */}
        <div
          style={{
            background: "rgba(99, 102, 241, 0.08)",
            border: "1px solid rgba(99, 102, 241, 0.2)",
            padding: "0.5rem 1rem",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            whiteSpace: "nowrap", // Prevents email from breaking into two lines
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "var(--success)",
              borderRadius: "50%",
              boxShadow: "0 0 8px var(--success)",
            }}
          ></div>

          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "var(--primary)",
            }}
          >
            {userEmail || "guest@user.com"}
          </span>
        </div>

        {/* LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="secondary"
          style={{
            padding: "0.5rem 1rem",
            fontSize: "0.85rem",
            backgroundColor: "#fff",
            border: "1px solid var(--border)",
            color: "var(--danger)", // Red text for logout
            borderRadius: "12px",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
