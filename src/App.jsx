import React, { useState, useMemo } from "react";
import "./App.css";

const STUDENTS = [
  { roll: "240001", name: "Puvvada Bhuvaneswari", year: "2nd Year", dept: "CSE" },
  { roll: "240002", name: "Rahul Sharma", year: "1st Year", dept: "ECE" },
  { roll: "240003", name: "Ananya Singh", year: "3rd Year", dept: "IT" },
  { roll: "240004", name: "Karthik Reddy", year: "4th Year", dept: "ME" },
  { roll: "240005", name: "Priya Patel", year: "2nd Year", dept: "CSE" },
  { roll: "240006", name: "Mohammed Ali", year: "1st Year", dept: "EEE" },
  { roll: "240007", name: "Sneha Gupta", year: "3rd Year", dept: "CSE" },
  { roll: "240008", name: "Rohan Verma", year: "4th Year", dept: "CIVIL" },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) return STUDENTS;

    return STUDENTS.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.roll.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  return (
    <div className="app">
      <div className="card">
        <header className="header">
          <h1 className="title">Student Portal</h1>
          <p className="subtitle">
            Search by <strong>name</strong> or <strong>roll number</strong>.
          </p>
        </header>

        <div className="search-wrapper">
          <input
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type to search… e.g. 'Rahul'"
          />
          <span className="result-count">
            {filteredStudents.length} results
          </span>
        </div>

        <div className="list">
          {filteredStudents.length === 0 ? (
            <div className="empty-state">
              <p>No students found</p>
            </div>
          ) : (
            filteredStudents.map((s) => (
              <div key={s.roll} className="student-row">
                <div className="student-main">
                  <span className="student-name">{s.name}</span>
                  <span className="student-roll">#{s.roll}</span>
                </div>
                <div className="student-meta">
                  {s.year} • {s.dept}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
