import { Heart, History, Shield, Sparkles, Users, Zap } from "lucide-react";
import React from "react";

export default function Feature() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 mt-24 sm:mt-32 h-full">
      <div className="text-center">
        <div className="text-3xl sm:text-4xl font-extrabold tracking-tighter">
          Everything You Need for Magical Conversations
        </div>
        <p className="text-md mt-2 max-w-2xl lg:max-w-xl mx-auto text-zinc-300 tracking-wider">
          Discover all the features that make AnimeChat AI the perfect platform
          for connecting with your favorite characters.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
            {
                icon: History,
                title: "Chat History",
                description: "Never lose a conversation. All your chats are safely stored and easily accessible."
            },
            {
                icon: Heart,
                title: "Character Authenticity",
                description: "Each character maintains their unique personality and speaking style."
            },
            {
                icon: Users,
                title: "Multiple Characters",
                description: "Switch between differet characters while maintaining seperate chat histories."
            },
            {
                icon: Shield,
                title: "Safe & Secure",
                description: "Your conversatios are private and protected with enterprise-grade security.",
            },
            {
                icon: Sparkles,
                title: "AI-Powered",
                description: "Advance AI ensures natural and contextually relevant responses.",
            },
            {
                icon: Zap,
                title: "Real-time Responses",
                description: "Get instant replies with no waiting or loading times.",
            }
        ].map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-cyan-900 via-gray-800 to-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-700">
                <feature.icon className="w-10 h-10 text-blue-500 mb-4 relative z-10" />
                <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                </h3>
                <p>
                    {feature.description}
                </p>
            </div>
        ))} 
      </div>
    </div>
  );
}
