import React from "react";
import "../App.css";

interface Mentor {
  name: string;
  major: string;
  linkedin: string;
  image: string;
}

const mentors: Mentor[] = [
  {
    name: "Anisha Rao",
    major: "AI & ML | NCSU",
    linkedin: "https://www.linkedin.com/in/anisha-rao",
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Ravi Kumar",
    major: "Cloud | DevOps | AWS",
    linkedin: "https://www.linkedin.com/in/ravi-kumar",
    image: "https://i.pravatar.cc/150?img=14"
  },
  {
    name: "Sana Rahman",
    major: "Frontend | UX | React",
    linkedin: "https://www.linkedin.com/in/sana-rahman",
    image: "https://i.pravatar.cc/150?img=16"
  }
];

const MentorCard: React.FC = () => {
  return (
    <div className="mentor-board">
      <h2 className="section-title">Meet Your Mentors</h2>
      <div className="mentor-grid">
        {mentors.map((mentor, index) => (
          <div key={index} className="mentor-card">
            <img src={mentor.image} alt={mentor.name} className="mentor-img" />
            <h3>{mentor.name}</h3>
            <p>{mentor.major}</p>
            <a href={mentor.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorCard;
