"use client";

import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Feature from "@/components/Feature";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="text-white bg-black"
    >
      <Navbar />
      <Landing />
      <Feature />
      <Pricing />
      <Footer />
    </div>
  );
}
