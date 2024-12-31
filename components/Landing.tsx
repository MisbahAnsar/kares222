import { MessageSquare, Sparkles, Zap } from "lucide-react";

export default function Landing() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 mt-24 sm:mt-32">
      <div className="text-4xl sm:text-5xl lg:text-6xl text-center font-extrabold tracking-tighter">
        Chat with Your Favourite{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-cyan-600 to-cyan-800 bg-clip-text text-transparent">
          Anime
        </span>{" "}
        Characters Anytime
      </div>
      <div className="flex items-center justify-center mt-6 gap-4">
        <button className="relative overflow-hidden text-white font-medium px-7 py-3 rounded-lg transition duration-300 group">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition duration-300"></span>
          <span className="absolute inset-0 bg-opacity-40 bg-black mix-blend-multiply group-hover:mix-blend-normal"></span>
          <span className="relative z-10">Try for free</span>
        </button>
        <button
          className="border-1 bg-white text-black rounded-lg px-7 py-3"
          title="click"
        >
          Learn More
        </button>
      </div>

      <div className="absolute left-0 top-1/2 mt-56 w-96 h-96 bg-gradient-to-r from-cyan-600 via-cyan-800 to-cyan-900 mix-blend-screen blur-3xl opacity-30"></div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-900 via-gray-800 to-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-700">
          <MessageSquare className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Natural Conversations</h3>
          <p className="text-gray-600">
            Engage in fluid, context-aware conversations that feel real and
            meaningful.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-900 via-gray-800 to-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-700">
          <Zap className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Instant Responses</h3>
          <p className="text-gray-600">
            Get immediate, character-authentic responses powered by advanced AI.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-900 via-gray-800 to-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-700">
          <Sparkles className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Multiple Characters</h3>
          <p className="text-gray-600">
            Choose from a growing collection of beloved anime characters to chat
            with.
          </p>
        </div>
      </div>
    </div>
  );
}
