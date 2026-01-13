"use client";

import { useState } from "react";
import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/Navbar";
import IssueForm from "@/components/IssueForm";
import IssueList from "@/components/IssueList";

export default function Dashboard() {
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  return (
    <AuthGuard>
      <Navbar />
      <div className="container">
        <IssueForm />

        <div
          className="card"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            padding: "1.25rem 2rem",
            alignItems: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            border: "1px solid var(--glass-border)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--text-muted)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <span
              style={{
                fontWeight: "700",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                letterSpacing: "0.05em",
              }}
            >
              FILTER BY
            </span>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <label
              style={{ margin: 0, fontSize: "0.85rem", fontWeight: "600" }}
            >
              Priority
            </label>
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              style={{
                width: "auto",
                marginBottom: 0,
                padding: "0.4rem 2rem 0.4rem 0.8rem",
                fontSize: "0.85rem",
              }}
            >
              <option>All</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <label
              style={{ margin: 0, fontSize: "0.85rem", fontWeight: "600" }}
            >
              Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{
                width: "auto",
                marginBottom: 0,
                padding: "0.4rem 2rem 0.4rem 0.8rem",
                fontSize: "0.85rem",
              }}
            >
              <option>All</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>
          </div>

          {(priorityFilter !== "All" || statusFilter !== "All") && (
            <button
              className="secondary"
              style={{
                marginLeft: "auto",
                padding: "0.4rem 1rem",
                fontSize: "0.75rem",
                borderRadius: "8px",
              }}
              onClick={() => {
                setPriorityFilter("All");
                setStatusFilter("All");
              }}
            >
              Clear Filters
            </button>
          )}
        </div>

        <IssueList
          priorityFilter={priorityFilter}
          statusFilter={statusFilter}
        />
      </div>
    </AuthGuard>
  );
}
