"use client";

import { useState } from "react";

export default function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState("naruto");

  const chars: Record<string, string> = {
    naruto: "You are Naruto uzumaki, known as hokage, Answer as Naruto Uzumaki, if not able to find the solution then also answer as Naruto",
    Rius: "You are Rius Grammery from High school dxd and you are a girl, Answer as Rius Grammery, if not able to find the solution then also answer as Rius",
    sungjinwoo:
      "You are sungjinwoo from solo levelling, answer as sungjinwoo, if not able to find the solution then also answer as sungjinwoo",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    const finalPrompt = `${chars[character]} ${prompt}`;

    try {
      const res = await fetch("/api/generative-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: finalPrompt }),
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (res.ok) {
        setResponse(data.response);
      } else {
        setResponse(data.error || "Error occurred");
      }
    } catch (error) {
      console.error("Error: ", error);
      setResponse("Failed to fetch AI response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen text-white" style={{
      background: "radial-gradient(ellipse 80% 80% at 50% -25%, rgba(76, 201, 255, 0.3), rgba(0, 0, 0, 0)), #0b0d11",
    }}
    >
      <div className="max-w-[700px] m-auto p-4">
        <h2 className="text-3xl font-medium">An Anime AI ChatBot</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            Select a Character:
            <select
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
              className="block w-full p-2 mt-2 bg-black text-orange-400"
            >
              <option value="naruto">Naruto</option>
              <option value="Rius">Rius</option>
              <option value="sungjinwoo">sungjinwoo</option>
              {/* <option value="naruto">Naruto</option> */}
            </select>
          </label>
          <textarea
            placeholder="Enter your prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={5}
            style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
            className="bg-gray-500 text-white"
          />
          <button type="submit" disabled={loading}>
            {loading ? "Generating..." : "Generate"}
          </button>
        </form>
        {response && (
          <div style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>
            <h2>Response:</h2>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}
