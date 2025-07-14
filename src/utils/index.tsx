import { useState } from "react";
import { getGeminiResponse } from "./gemini";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./Home.css"; // Make sure to create this file

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const geminiResponse = await getGeminiResponse(prompt);
      setResponse(geminiResponse);

      // Save to Firestore
      await addDoc(collection(db, "peercoach-chats"), {
        prompt,
        response: geminiResponse,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gemini-container">
      <h1>PeerCoach Gemini Chat</h1>
      <textarea
        className="gemini-textarea"
        placeholder="Ask something..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <br />
      <button onClick={handleAsk} disabled={loading}>
        {loading ? "Thinking..." : "Ask Gemini"}
      </button>
      <div className="gemini-response">
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}
