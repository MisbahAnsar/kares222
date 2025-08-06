"use client";


import Link from "next/link";
import Image from "next/image";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import Navbar from "@/components/Navbar";

export default function Landing() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 🔮 Animated Background */}
      <div className="hidden lg:block">
        <AnimatedGradientBackground />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 pt-24 sm:pt-32">
        {/* Hero section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="flex-1">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white">
              Chat with Your Favourite{" "}
              <span className="font-semibold italic font-serif bg-gradient-to-r from-[#2979ff] to-[#ff80ab] bg-clip-text text-transparent">
                Anime
              </span>{" "}
              Characters Anytime
            </div>
            <div className="flex items-center justify-start mt-6 gap-4">
              <button className="relative overflow-hidden text-white font-medium px-7 py-3 rounded-lg transition duration-300 group">
                <span className="absolute inset-0 bg-opacity-40 bg-black mix-blend-multiply group-hover:mix-blend-normal"></span>
                <span className="relative z-10">
                  <Link href="/chat">Try for free</Link>
                </span>
              </button>
              <button
                className="border-1 bg-white/40 hover:bg-white/60 text-black rounded-lg px-7 py-3"
                title="click"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden md:block flex-1 relative mt-10 md:mt-0">
            <div className="absolute -top-52 right-0 w-96 h-96">
              <Image
                src="/luffy2.png"
                alt="Anime Character"
                width={384}
                height={384}
                className="rounded-lg w-full h-full scale-x-[-1]"
              />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
