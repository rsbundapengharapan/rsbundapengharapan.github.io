"use client"

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <Landing/>
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

      <footer className="bg-sky-50 py-8">
        <div className="container mx-auto text-center text-sky-800">
          <p>&copy; RSBP 2024. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
