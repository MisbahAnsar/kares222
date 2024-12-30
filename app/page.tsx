"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import Landing from "@/components/Landing";
import Feature from "@/components/Feature";

export default function Home() {
  return (
    <div
      className="text-white"
      style={{
        background:
          "radial-gradient(ellipse 80% 80% at 50% -25%, rgba(76, 201, 255, 0.3), rgba(0, 0, 0, 0)), #0b0d11",
      }}
    >
      <Navbar />
      <Landing />
      <Feature />
    </div>
  );
}
