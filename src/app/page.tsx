"use client"

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Info from "./components/Info";
import Call from "./components/Call";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto bg-cuswhite rounded-3xl m-2 font-avenir">
      <Navbar />
      <Landing />
      <Info />
      <Call />
      <Footer />
    </main>
  )
}