import React, { useState } from "react";
const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    description:
      "We're seeking a frontend engineer with solid React experience and a passion for polished UI/UX.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "CodeBase",
    location: "New York",
    type: "Part-time",
    description:
      "Join our backend team to build scalable Node.js APIs and real-time features.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Designify",
    location: "San Francisco",
    type: "Contract",
    description:
      "Looking for a visual thinker to lead UI/UX strategy and create design systems.",
  },
];

const styles = {
  container: {
    maxWidth: "1080px",
    margin: "50px auto",
    padding: "0 24px",
    fontFamily: "'Inter', sans-serif",
    color: "#1a1a1a",
  },
  header: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "30px",
    color: "#0d0d0d",
  },
  filters: {
    display: "flex",
    gap: "20px",
    marginBottom: "40px",
    flexWrap: "wrap",
  },
  select: {
    padding: "12px 16px",
    fontSize: "15px",
    border: "1px solid #dcdcdc",
    borderRadius: "8px",
    background: "#f9f9f9",
    transition: "all 0.2s ease",
    cursor: "pointer",
  },
  jobCard: {
    border: "1px solid #e8e8e8",
    borderRadius: "10px",
    padding: "24px",
    marginBottom: "24px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.04)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  jobCardHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.06)",
  },
  jobTitle: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "6px",
    color: "#2c3e50",
  },
  company: {
    fontSize: "16px",
    color: "#7f8c8d",
    marginBottom: "4px",
  },
  meta: {
    fontSize: "14px",
    color: "#999",
    marginBottom: "10px",
  },
  description: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#4a4a4a",
  },
  applyButton: {
    marginTop: "20px",
    padding: "10px 22px",
    backgroundColor: "#0052cc",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  applyButtonHover: {
    backgroundColor: "#003d99",
  },
  noJobs: {
    textAlign: "center",
    color: "#aaa",
    fontSize: "16px",
    marginTop: "60px",
  },
};

const ViewJob = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const filteredJobs = jobsData.filter((job) => {
    return (
      (selectedLocation === "All" || job.location === selectedLocation) &&
      (selectedType === "All" || job.type === selectedType)
    );
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Explore Job Opportunities</h1>

      {/* Filters */}
      <div style={styles.filters}>
        <select
          style={styles.select}
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="All">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
        </select>

        <select
          style={styles.select}
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      {/* Job Cards */}
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <div
            key={job.id}
            style={{
              ...styles.jobCard,
              ...(hoveredCard === job.id ? styles.jobCardHover : {}),
            }}
            onMouseEnter={() => setHoveredCard(job.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={styles.jobTitle}>{job.title}</div>
            <div style={styles.company}>{job.company}</div>
            <div style={styles.meta}>
              {job.location} | {job.type}
            </div>
            <div style={styles.description}>{job.description}</div>
            <button
              style={{
                ...styles.applyButton,
                ...(hoveredButton === job.id ? styles.applyButtonHover : {}),
              }}
              onMouseEnter={() => setHoveredButton(job.id)}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => alert(`Applied to ${job.title}`)}
            >
              Apply
            </button>
          </div>
        ))
      ) : (
        <p style={styles.noJobs}>No jobs found with selected filters.</p>
      )}
    </div>
  );
};

export default ViewJob;