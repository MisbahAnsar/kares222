"use client";

import { useState, useEffect } from "react";
import { Search, Plus } from "lucide-react";
import Image from "next/image";
import { characters } from "@/data/character";
import Chats from "@/components/ui/Chats";

interface Message {
  sender: string;
  text: string;
  avatar?: string;
  timestamp?: string;
}

export default function ChatBot() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatHistories, setChatHistories] = useState<{ [key: string]: Message[] }>({}); // Store chat history per character
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [characterUnreadStatus, setCharacterUnreadStatus] = useState<{ [key: string]: { hasUnread: boolean; count?: number } }>({});

  // Initialize unread status after component mounts (client-side only)
  useEffect(() => {
    const unreadStatus: { [key: string]: { hasUnread: boolean; count?: number } } = {};
    characters.forEach((character) => {
      const hasUnread = Math.random() > 0.7;
      unreadStatus[character.name] = {
        hasUnread,
        count: hasUnread ? Math.floor(Math.random() * 8) + 1 : undefined,
      };
    });
    setCharacterUnreadStatus(unreadStatus);
  }, []); // Run once after mount

  const handleSelectCharacter = (name: string) => {
    setSelectedCharacter(name);
    setIsChatOpen(true);
    // Initialize chat history for the character if it doesn't exist
    if (!chatHistories[name]) {
      setChatHistories((prev) => ({ ...prev, [name]: [] }));
    }
  };

  const handleUpdateChatHistory = (characterName: string, messages: Message[]) => {
    setChatHistories((prev) => ({ ...prev, [characterName]: messages }));
  };

  const selectedCharacterData = characters.find((char) => char.name === selectedCharacter) || null;

  // Filter characters based on search query
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[hsl(12,1.75%,10.83%)]">
      <div className="relative h-screen">
        {/* ChatList Section */}
        <div className={`absolute h-full w-full md:w-96 p-0 md:p-10 ${isChatOpen ? "hidden md:block" : "block"}`}>
          <div className="flex flex-col h-full bg-black text-white w-full md:w-96 rounded-xl">
            <div className="flex justify-between items-center p-4">
              <h1 className="text-2xl font-bold">Chats</h1>
              <button className="rounded-full bg-zinc-900 hover:bg-zinc-800 p-2">
                <Plus className="h-5 w-5" />
              </button>
            </div>

            <div className="px-4 pb-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                <input
                  placeholder="Chats search..."
                  className="w-full pl-9 py-2 bg-zinc-900 border-none rounded-md focus:outline-none"
                  value={searchQuery} // Bind the input value to searchQuery
                  onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on change
                />
              </div>
            </div>

            <div className="flex-1 overflow-auto chat-container">
              {filteredCharacters.map((character) => {
                const unreadStatus = characterUnreadStatus[character.name];
                const hasUnread = unreadStatus?.hasUnread || false;

                return (
                  <div
                    key={character.id}
                    className={`flex items-center gap-3 p-4 hover:bg-zinc-900 cursor-pointer border-b border-zinc-900 ${
                      selectedCharacter === character.name ? "bg-zinc-900" : ""
                    }`}
                    onClick={() => handleSelectCharacter(character.name)}
                  >
                    <div className="relative h-12 w-12">
                      <Image
                        src={character.avatar || "/placeholder.svg"}
                        alt={character.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-black"></div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold truncate">{character.name}</h3>
                      </div>
                      <p
                        className={`text-sm truncate flex items-center gap-2 ${
                          hasUnread ? "text-white" : "text-zinc-400"
                        }`}
                      >
                        <span className="inline-block">✓</span> {character.about}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Chats Section */}
        {selectedCharacterData && (
          <div
            className={`absolute right-0 top-0 w-full md:w-[calc(100%-24rem)] h-full md:py-6 md:px-10 ${
              isChatOpen ? "block" : "hidden md:block"
            }`}
          >
            <Chats
              characterName={selectedCharacterData.name}
              characterDescription={selectedCharacterData.description}
              characterAvatar={selectedCharacterData.avatar}
              disabled={false}
              onBack={() => setIsChatOpen(false)}
              chatHistory={chatHistories[selectedCharacterData.name] || []} // Pass chat history
              onUpdateChatHistory={(messages) =>
                handleUpdateChatHistory(selectedCharacterData.name, messages)
              } // Update history callback
            />
          </div>
        )}
      </div>
    </div>
  );
}