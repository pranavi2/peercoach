import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./utils/index";
import EventBoard from "./components/EventBoard";
import StudyGroups from "./components/StudyGroups";
import MentorCard from "./components/MentorCard";
import { Link } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="app-wrapper">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/groups">Study Groups</Link>
          <Link to="/events">Events</Link>
          <Link to="/mentors">Mentors</Link>
        </div>
      </nav>

      <div className="page-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<FadeWrapper><Home /></FadeWrapper>}
            />
            <Route
              path="/groups"
              element={<FadeWrapper><StudyGroups /></FadeWrapper>}
            />
            <Route
              path="/events"
              element={<FadeWrapper><EventBoard /></FadeWrapper>}
            />
            <Route
              path="/mentors"
              element={<FadeWrapper><MentorCard /></FadeWrapper>}
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

function FadeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}

export default App;
