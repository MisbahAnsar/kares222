"use client";

import { CharacterCard } from "@/components/ui/apple-cards-carousel";
import { characters } from "@/data/character";
import { useState } from "react";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import Navbar from "@/components/Navbar";
import Chats from "@/components/ui/Chats";

export default function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState<string | null>(null); // Holds the selected character ID

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim() || !character) return; // Ensure both prompt and character are selected

    setLoading(true);
    setResponse("");

    const finalPrompt = `${
      characters.find((char) => char.id === character)?.description
    } ${prompt}`;

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
    <div
      className="h-full text-white"
      style={{
        background:
          "radial-gradient(ellipse 80% 80% at 50% -25%, rgba(76, 201, 255, 0.3), rgba(0, 0, 0, 0)), #0b0d11",
      }}
    >
      <Navbar />
      {/* Character Selection Section */}
      <div className="mx-auto px-6 sm:px-10 max-w-4xl">
        <div className="text-white border-2 rounded-xl border-gray-700 mt-10">
          <h1 className="text-2xl font-bold px-4 pt-6">Select Character</h1>
          {/* Use Carousel for Character Selection */}
          <Carousel
            items={characters.map((char) => (
              <CharacterCard
                key={char.id}
                name={char.name}
                avatar={char.avatar}
                onSelect={() => setCharacter(char.id)} // Set the selected character
              />
            ))}
          />

          {/* Chat Component  */}
          <Chats
            characterName={
              character
                ? characters.find((char) => char.id === character)?.name || null
                : null
            }
            characterDescription={
              character
                ? characters.find((char) => char.id === character)
                    ?.description || null
                : null
            }
            characterAvatar={
              character
                ? characters.find((char) => char.id === character)?.avatar ||
                  null
                : null
            }
            disabled={!character}
          />
        </div>
      </div>
    </div>
  );
}
