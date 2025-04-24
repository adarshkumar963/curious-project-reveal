import React, { useState } from "react";

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 16px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  formWrapper: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    padding: "40px",
    width: "100%",
    maxWidth: "650px",
    transition: "0.3s ease",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "30px",
    color: "#1e293b",
    textAlign: "center",
    borderBottom: "1px solid #e2e8f0",
    paddingBottom: "12px",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#334155",
    fontSize: "15px",
  },
  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #cbd5e1",
    backgroundColor: "#f9fafb",
    fontSize: "15px",
    outline: "none",
    transition: "border 0.3s ease",
  },
  textarea: {
    width: "100%",
    padding: "14px",
    minHeight: "120px",
    borderRadius: "12px",
    border: "1px solid #cbd5e1",
    backgroundColor: "#f9fafb",
    fontSize: "15px",
    resize: "vertical",
    outline: "none",
    transition: "border 0.3s ease",
  },
  button: {
    width: "100%",
    backgroundColor: "#3b82f6",
    color: "#fff",
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "10px",
  },
  buttonHover: {
    backgroundColor: "#2563eb",
  },
  successMsg: {
    marginTop: "20px",
    color: "#22c55e",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "500",
  },
};

const OfferJob = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
  });

  const [hovered, setHovered] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, description, location, salary } = job;

    if (title && description && location && salary) {
      console.log("Job Posted:", job);
      setSubmitted(true);
      setJob({
        title: "",
        description: "",
        location: "",
        salary: "",
      });

      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.formWrapper} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Offer a New Job</h2>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="title">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="e.g. Frontend Developer"
            style={styles.input}
            value={job.title}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="description">
            Job Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Write about the responsibilities, experience, and expectations..."
            style={styles.textarea}
            value={job.description}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="location">
            Job Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="e.g. Remote, Hyderabad, Bangalore"
            style={styles.input}
            value={job.location}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="salary">
            Salary Package
          </label>
          <input
            type="text"
            id="salary"
            name="salary"
            placeholder="e.g. ₹60,000/month or Negotiable"
            style={styles.input}
            value={job.salary}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          style={{ ...styles.button, ...(hovered ? styles.buttonHover : {}) }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Post Job
        </button>

        {submitted && (
          <div style={styles.successMsg}>🎉 Job posted successfully!</div>
        )}
      </form>
    </div>
  );
};

export default OfferJob;