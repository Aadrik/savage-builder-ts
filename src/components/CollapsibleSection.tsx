import React, { useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export default function CollapsibleSection({
  title,
  children,
  defaultExpanded = false,
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultExpanded);

  return (
    <section style={{ marginBottom: "1.5rem" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "none",
          border: "none",
          fontSize: "1.1rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
        aria-expanded={isOpen}
      >
        <h2>{title}</h2>
        {isOpen ? "▼" : "▶"}
      </button>

      {isOpen && (
        <div style={{ marginTop: "0.5rem", paddingLeft: "1rem" }}>
          {children}
        </div>
      )}
    </section>
  );
}
