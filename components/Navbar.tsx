'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="py-4 px-4 mx-auto max-w-screen-xl">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-3xl">KARES</h1>
          </div>
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-8">
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
            <div className="p-1 relative z-20 rounded-[7px] group">
              <Link href='/chat' className="hover:text-blue-500 transition-colors">
                Start Chatting
              </Link>
              <div className="absolute inset-x-0 bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-[1px] w-1/2 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-[1px] w-1/2 mx-auto blur-sm bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
          </div>
          <button
            className="z-50 lg:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isSidebarOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 w-64 h-full bg-zinc-800 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4"
            aria-label="Close sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="mt-8 space-y-4">
            <li><Link href="#features" onClick={toggleSidebar}>Features</Link></li>
            <li><Link href="#pricing" onClick={toggleSidebar}>Pricing</Link></li>
            <li><Link href="#contact" onClick={toggleSidebar}>Contact</Link></li>
          </ul>
          <button className="mt-4 p-1 border bg-white text-black relative z-20 rounded-[7px] group inline-block">
            <Link href='/chat' className="transition-colors" onClick={toggleSidebar}>
              Start Chatting
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}

