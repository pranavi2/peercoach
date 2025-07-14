import { useState } from "react";
import "../App.css"; // Ensure this path is correct based on your file structure

const mockGroups = [
  { topic: "Machine Learning", groupName: "ML Pioneers", members: 12 },
  { topic: "Web Development", groupName: "Frontend Warriors", members: 9 },
  { topic: "Cloud", groupName: "AWS Learners", members: 7 },
];

export default function StudyGroups() {
  const [interest, setInterest] = useState("");
  const [results, setResults] = useState<typeof mockGroups>(mockGroups);

  const handleSearch = () => {
    const matched = mockGroups.filter((group) =>
      group.topic.toLowerCase().includes(interest.toLowerCase())
    );
    setResults(matched);
  };

  return (
    <div className="study-board">
      <h2 className="study-title">🔍 Find Study Groups</h2>
      <div className="study-search">
        <input
          type="text"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          placeholder="Enter topic (e.g., ML, Web)"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {results.length === 0 ? (
        <p>No groups found.</p>
      ) : (
        <div className="study-grid">
          {results.map((group, index) => (
            <div key={index} className="study-card">
              <h4>{group.groupName}</h4>
              <p><strong>Topic:</strong> {group.topic}</p>
              <p><strong>Members:</strong> {group.members}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
