"use client";

import { MessageSquare, Sparkles, Zap } from "lucide-react";

export default function ThreeFeatures() {
  return (
    <div className="relative w-full bg-black sm:py-24 pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <MessageSquare className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Natural Conversations</h3>
            <p className="text-gray-300">
              Engage in fluid, context-aware conversations that feel real and meaningful.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Zap className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Instant Responses</h3>
            <p className="text-gray-300">
              Get immediate, character-authentic responses powered by advanced AI.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Sparkles className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Multiple Characters</h3>
            <p className="text-gray-300">
              Choose from a growing collection of beloved anime characters to chat with.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
