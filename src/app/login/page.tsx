"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, pass);
      router.push("/dashboard");
    } catch (err: any) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <form
        className="form"
        onSubmit={login}
        style={{ maxWidth: "480px", width: "100%", padding: "2.5rem" }}
      >
        <div style={{ marginBottom: "2rem", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "800",
              letterSpacing: "-0.025em",
              marginBottom: "0.5rem",
            }}
          >
            Welcome Back
          </h2>
          <p className="text-muted">Enter your details to sign in</p>
        </div>

        {error && (
          <div
            style={{
              padding: "0.75rem",
              background: "#fee2e2",
              color: "#991b1b",
              borderRadius: "10px",
              fontSize: "0.85rem",
              marginBottom: "1.5rem",
              border: "1px solid #fecaca",
            }}
          >
            {error}
          </div>
        )}

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="name@gmail.com"
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            placeholder="••••••••"
            type="password"
            required
            onChange={(e) => setPass(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{ width: "100%", marginTop: "1rem" }}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <p
          className="text-muted"
          style={{
            textAlign: "center",
            fontSize: "0.9rem",
            marginTop: "2rem",
          }}
        >
          Don't have an account?{" "}
          <Link
            href="/signup"
            style={{
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
}
