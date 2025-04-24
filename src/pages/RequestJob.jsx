import React, { useState } from "react";

const jobOptions = [
  "Frontend Developer",
  "Backend Engineer",
  "UI/UX Designer",
  "Product Manager",
  "Data Analyst",
];

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    padding: "40px 16px",
    backgroundColor: "#f1f5f9",
    fontFamily: "'Inter', sans-serif",
  },
  formCard: {
    backgroundColor: "#ffffff",
    padding: "36px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    maxWidth: "600px",
    width: "100%",
  },
  heading: {
    fontSize: "26px",
    fontWeight: "600",
    marginBottom: "28px",
    color: "#0f172a",
    textAlign: "center",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "15px",
    fontWeight: "500",
    marginBottom: "8px",
    color: "#334155",
  },
  select: {
    width: "100%",
    padding: "12px 14px",
    fontSize: "15px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    backgroundColor: "#f8fafc",
    outline: "none",
    transition: "border 0.2s ease",
  },
  textarea: {
    width: "100%",
    padding: "14px",
    fontSize: "15px",
    minHeight: "120px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    backgroundColor: "#f8fafc",
    resize: "vertical",
    outline: "none",
    transition: "border 0.2s ease",
  },
  button: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    padding: "12px 22px",
    fontSize: "15px",
    fontWeight: "500",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    width: "100%",
    marginTop: "8px",
  },
  buttonHover: {
    backgroundColor: "#1d4ed8",
  },
  successMsg: {
    marginTop: "20px",
    color: "#16a34a",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "500",
  },
};

const RequestJob = () => {
  const [selectedJob, setSelectedJob] = useState("");
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedJob && message.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedJob("");
        setMessage("");
      }, 3000);
    } else {
      alert("Please select a job and write a message.");
    }
  };

  return (
    <div style={styles.wrapper}>
      <form style={styles.formCard} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Apply for a Job</h2>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="jobSelect">
            Choose a Role
          </label>
          <select
            id="jobSelect"
            style={styles.select}
            value={selectedJob}
            onChange={(e) => setSelectedJob(e.target.value)}
          >
            <option value="">-- Select Job --</option>
            {jobOptions.map((job, i) => (
              <option key={i} value={job}>
                {job}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            style={styles.textarea}
            placeholder="Tell us why you're a good fit for this job..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isHovered ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Submit Application
        </button>

        {submitted && (
          <div style={styles.successMsg}>✅ Application sent successfully!</div>
        )}
      </form>
    </div>
  );
};

export default RequestJob;