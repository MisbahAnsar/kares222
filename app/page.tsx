"use client";

import Landing from "@/components/Landing";
import ThreeFeatures from "@/components/ThreeFeatures";
// import Feature from "@/components/Feature";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="text-white bg-black"
    >
      <Landing />
      <ThreeFeatures />
      {/* <Feature /> */}
      <Pricing />
      <Footer />
    </div>
  );
}
