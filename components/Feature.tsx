import {
  Heart,
  History,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import React from "react";

export default function Feature() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-400 to-blue-700 py-24 rounded-3xl">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Everything You Need for Magical Conversations
          </h2>
          <p className="text-md mt-3 max-w-2xl lg:max-w-xl mx-auto text-white/90 tracking-wide leading-relaxed">
            Discover all the features that make AnimeChat AI the perfect platform
            for connecting with your favorite characters.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: History,
              title: "Chat History",
              description:
                "Never lose a conversation. All your chats are safely stored and easily accessible.",
            },
            {
              icon: Heart,
              title: "Character Authenticity",
              description:
                "Each character maintains their unique personality and speaking style.",
            },
            {
              icon: Users,
              title: "Multiple Characters",
              description:
                "Switch between different characters while maintaining separate chat histories.",
            },
            {
              icon: Shield,
              title: "Safe & Secure",
              description:
                "Your conversations are private and protected with enterprise-grade security.",
            },
            {
              icon: Sparkles,
              title: "AI-Powered",
              description:
                "Advanced AI ensures natural and contextually relevant responses.",
            },
            {
              icon: Zap,
              title: "Real-time Responses",
              description:
                "Get instant replies with no waiting or loading times.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white text-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-zinc-200 transition-transform transform hover:-translate-y-1 hover:scale-[1.02] duration-300"
            >
              <feature.icon className="w-10 h-10 text-blue-500 mb-4 transition-transform hover:scale-110 duration-300" />
              <h3 className="text-lg font-semibold mb-2 font-sans tracking-tight">
                {feature.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
