import React from "react";
import "../App.css"; // Make sure this is included

const events = [
  {
    title: "Resume Building Workshop",
    date: "July 20, 2025",
    time: "3:00 PM",
    location: "Room 301, CS Building",
    description:
      "Learn how to build industry-ready resumes with career counselors.",
  },
  {
    title: "AI & ML Meetup",
    date: "July 22, 2025",
    time: "5:00 PM",
    location: "Online (Zoom)",
    description:
      "Network with students and researchers working on AI and ML projects.",
  },
];

export default function EventBoard() {
  return (
    <div className="event-board">
      <h2 className="section-title">📅 Upcoming Events</h2>
      <div className="event-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3 className="event-title">{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p className="event-desc">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
