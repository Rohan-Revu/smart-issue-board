"use client";

import { useEffect, useState } from "react";
import { getRecentIssues } from "@/lib/issues"; // Your Firestore fetching function
import IssueCard from "./IssueCard";
import { Issue } from "@/types/issue";

interface IssueListProps {
  priorityFilter: string; // "All" | "Low" | "Medium" | "High"
  statusFilter: string; // "All" | "Open" | "In Progress" | "Done"
}

export default function IssueList({
  priorityFilter,
  statusFilter,
}: IssueListProps) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIssues() {
      setLoading(true);
      const data = await getRecentIssues();
      setIssues(data);
      setLoading(false);
    }

    fetchIssues();
  }, []);

  if (loading) return <p className="text-muted">Loading issues...</p>;

  // FILTER LOGIC
  const filtered = issues.filter((issue) => {
    const matchPriority =
      priorityFilter === "All" || issue.priority === priorityFilter;
    const matchStatus = statusFilter === "All" || issue.status === statusFilter;
    return matchPriority && matchStatus;
  });

  return (
    <div>
      <div className="flex space-between" style={{ marginBottom: "1rem" }}>
        <h3 style={{ fontWeight: 700 }}>Active Issues</h3>
        <span className={`badge ${filtered.length === 0 ? "low" : "medium"}`}>
          {filtered.length} Results
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="card" style={{ textAlign: "center", padding: "3rem" }}>
          <p className="text-muted">No issues found matching these filters.</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      )}
    </div>
  );
}
