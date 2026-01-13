"use client";

import { updateIssueStatus } from "@/lib/issues";
import { Issue } from "@/types/issue";

export default function IssueCard({ issue }: { issue: Issue }) {
  async function changeStatus(newStatus: Issue["status"]) {
    if (issue.status === "Open" && newStatus === "Done") {
      alert("Please move issue to In Progress before Done.");
      return;
    }
    await updateIssueStatus(issue.id!, newStatus);
  }

  // Helper for dynamic status colors
  const getStatusColor = () => {
    switch (issue.status) {
      case "Open":
        return "#64748b";
      case "In Progress":
        return "#4f46e5";
      case "Done":
        return "#16a34a";
      default:
        return "#64748b";
    }
  };

  return (
    <div
      className="card"
      style={{ padding: "1.5rem", borderLeft: `4px solid ${getStatusColor()}` }}
    >
      <div className="flex space-between" style={{ alignItems: "flex-start" }}>
        <h4
          style={{
            fontSize: "1.1rem",
            fontWeight: "700",
            color: "var(--text-main)",
          }}
        >
          {issue.title}
        </h4>
        <span className={`badge ${issue.priority.toLowerCase()}`}>
          {issue.priority}
        </span>
      </div>

      <p
        className="text-muted"
        style={{ fontSize: "0.9rem", margin: "1rem 0", lineHeight: "1.5" }}
      >
        {issue.description}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1.5rem",
          paddingTop: "1rem",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ position: "relative", width: "140px" }}>
          <select
            value={issue.status}
            onChange={(e) => changeStatus(e.target.value as any)}
            style={{
              padding: "0.4rem 0.6rem",
              fontSize: "0.8rem",
              fontWeight: "600",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: 0, // Override base CSS margin
              backgroundColor: "rgba(241, 245, 249, 0.5)",
            }}
          >
            <option>Open</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>

        <div className="flex" style={{ gap: "0.5rem" }}>
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "var(--primary-glow)",
              color: "var(--primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.7rem",
              fontWeight: "bold",
            }}
          >
            {issue.assignedTo.charAt(0).toUpperCase()}
          </div>
          <span
            className="text-muted"
            style={{ fontSize: "0.8rem", fontWeight: "500" }}
          >
            {issue.assignedTo}
          </span>
        </div>
      </div>
    </div>
  );
}
