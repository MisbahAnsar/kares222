"use client";
import { Search, Plus, MessageSquare, Users, Settings } from "lucide-react";
import Image from "next/image";
import { characters } from "@/data/character"; // Import the characters array

interface ChatListProps {
  onSelectCharacter: (name: string, description: string, avatar: string) => void;
  selectedCharacter: string | null;
}

export default function ChatList({ onSelectCharacter, selectedCharacter }: ChatListProps) {
  // Function to handle character selection
  const handleSelectCharacter = (character: (typeof characters)[0]) => {
    onSelectCharacter(character.name, character.description, character.avatar);
  };

  return (
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
          />
        </div>
      </div>

      <div className="flex-1 overflow-auto scrollbar-hide">
        {characters.map((character) => {
          // Generate a random time and message for each character
          
          const hasUnread = Math.random() > 0.7;
          const unreadCount = hasUnread ? Math.floor(Math.random() * 8) + 1 : undefined;

          return (
            <div
              key={character.id}
              className={`flex items-center gap-3 p-4 hover:bg-zinc-900 cursor-pointer border-b border-zinc-900 ${
                selectedCharacter === character.name ? "bg-zinc-900" : ""
              }`}
              onClick={() => handleSelectCharacter(character)}
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
                    unreadCount ? "text-white" : "text-zinc-400"
                  }`}
                >
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-around p-4 border-t border-zinc-900">
        <button className="text-zinc-400 hover:text-white">
          <MessageSquare className="h-6 w-6" />
        </button>
        <button className="text-zinc-400 hover:text-white">
          <Users className="h-6 w-6" />
        </button>
        <button className="text-zinc-400 hover:text-white">
          <Settings className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}