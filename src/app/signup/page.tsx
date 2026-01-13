"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    if (pass !== confirmPass) {
      return setError("Passwords do not match.");
    }

    setLoading(true);
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      router.push("/dashboard");
    } catch (err: any) {
      const message =
        err.code === "auth/email-already-in-use"
          ? "This email is already registered."
          : err.message;
      setError(message);
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
        onSubmit={handleSignup}
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
            Join Us
          </h2>
          <p className="text-muted">Create an account to get started</p>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="••••••••"
            required
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{ width: "100%", marginTop: "1rem" }}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p
          className="text-muted"
          style={{
            textAlign: "center",
            fontSize: "0.9rem",
            marginTop: "2rem",
          }}
        >
          Already have an account?{" "}
          <Link
            href="/login"
            style={{
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
