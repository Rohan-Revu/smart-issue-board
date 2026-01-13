"use client";

import { useState } from "react";
import { createIssue, checkSimilarIssues } from "@/lib/issues";
import SimilarIssueModal from "./SimilarIssueModal";
import { auth } from "@/lib/firebase";
import { serverTimestamp } from "firebase/firestore";

export default function IssueForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("Low");
  const [assignedTo, setAssignedTo] = useState("");
  const [similar, setSimilar] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState("");

  async function submit(confirm = false) {
    setValidationError("");

    if (!title.trim() || !desc.trim() || !assignedTo.trim()) {
      setValidationError("Please fill in all fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    if (!confirm) {
      const found = await checkSimilarIssues(title);
      if (found.length > 0) {
        setSimilar(found);
        setIsSubmitting(false);
        return;
      }
    }

    try {
      await createIssue({
        title: title.trim(),
        description: desc.trim(),
        priority: priority as any,
        status: "Open",
        assignedTo: assignedTo.trim(),
        createdBy: auth.currentUser!.email!,
        createdAt: serverTimestamp(),
      });
      setTitle("");
      setDesc("");
      setAssignedTo("");
      setPriority("Low");
    } catch (err) {
      setValidationError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="form" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "700" }}>
          Create New Issue
        </h3>
        <p className="text-muted">Fields marked with * are required.</p>
      </header>
      {validationError && (
        <div
          style={{
            padding: "0.75rem",
            backgroundColor: "#fee2e2",
            color: "#991b1b",
            borderRadius: "8px",
            marginBottom: "1.5rem",
            fontSize: "0.85rem",
            border: "1px solid #fecaca",
          }}
        >
          {validationError}
        </div>
      )}

      <div className="input-group">
        <label>Issue Title *</label>
        <input
          placeholder="e.g., Fix navigation bug"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            borderColor: validationError && !title ? "var(--danger)" : "",
          }}
        />
      </div>

      <div className="input-group">
        <label>Description *</label>
        <textarea
          placeholder="Provide details..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          style={{
            minHeight: "120px",
            borderColor: validationError && !desc ? "var(--danger)" : "",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
        }}
      >
        <div className="input-group">
          <label>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div className="input-group">
          <label>Assignee Email/Name *</label>
          <input
            placeholder="user@example.com"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            style={{
              borderColor:
                validationError && !assignedTo ? "var(--danger)" : "",
            }}
          />
        </div>
      </div>

      <button
        onClick={() => submit()}
        disabled={isSubmitting}
        style={{
          width: "100%",
          marginTop: "1rem",
          opacity: !title || !desc || !assignedTo ? 0.7 : 1,
          cursor: !title || !desc || !assignedTo ? "not-allowed" : "pointer",
        }}
      >
        {isSubmitting ? "Creating..." : "Create Issue"}
      </button>

      {similar.length > 0 && (
        <SimilarIssueModal
          issues={similar}
          onCancel={() => {
            setSimilar([]);
            setIsSubmitting(false);
          }}
          onConfirm={() => submit(true)}
        />
      )}
    </div>
  );
}
