// src/main.tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

import StudyGroups from "./components/StudyGroups";
import EventBoard from "./components/EventBoard";
import MentorCard from "./components/MentorCard";

import { listModels } from "./utils/gemini"; // import the new function

export function Root() {
  useEffect(() => {
    async function fetchModels() {
      const models = await listModels();
      console.log("Available Gemini models:", models);
    }
    fetchModels();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/groups" element={<StudyGroups />} />
        <Route path="/events" element={<EventBoard />} />
        <Route path="/mentors" element={<MentorCard />} />
      </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
