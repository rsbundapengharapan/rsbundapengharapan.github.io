"use client"

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Info from "./components/Info";
import Call from "./components/Call";
import Image from "next/image";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <main className="min-h-screen max-w-7xl mx-auto bg-cuswhite rounded-3xl m-2 font-avenir">
      <Navbar />
      <Landing />
      <Info />
      <Call />
      <footer className="py-8 mt-16">
        <div className="container mx-auto text-center text-gray-600 flex flex-col items-center">
          <p className="text-gray-400 text-sm">&copy; RSBP 2001 - {currentYear}. All rights reserved.</p>
          <a href="https://arwildo.com" target="_blank" rel="noopener dofollow">
            <Image src="/images/arwildo-software-cr.svg" alt="Arwildo Software" width={90} height={90} className="mt-4"/>
          </a>
        </div>
      </footer>
    </main>
  )
}