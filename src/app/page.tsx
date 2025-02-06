"use client"

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Image from "next/image";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <main className="min-h-screen max-w-7xl mx-auto bg-gray-100 rounded-3xl m-2 font-avenir">
      <Navbar />
      <Landing />
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-sky-900 mb-8 text-center">Pelayanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Rawat Jalan', 'Rawat Inap', 'IGD 24 Jam'].map((service) => (
              <div key={service} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-sky-800 mb-2">{service}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8">
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