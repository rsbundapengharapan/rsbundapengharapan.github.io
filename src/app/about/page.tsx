"use client"

import Navbar from "../components/Navbar";
import Call from "../components/Call";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto bg-cuswhite rounded-3xl m-2 font-avenir">
      <Navbar />
      <div className="p-4">
          <div className="p-4 md:w-3/4 mx-auto">
            <Image
              src="/images/du.webp"
              alt="Hospital"
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="p-4">
            <p className="text-gray-700 text-lg">
              Rumah Sakit Bunda Pengharapan adalah rumah sakit yang berkomitmen untuk memberikan pelayanan kesehatan terbaik bagi masyarakat. Kami memiliki berbagai fasilitas dan layanan medis yang lengkap untuk memenuhi kebutuhan kesehatan Anda.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 p-4 order-2 md:order-1">
            <Image
              src="/images/pelayanan-2.webp"
              alt="Hospital"
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="md:w-1/2 p-4 order-1 md:order-2">
            <p className="text-gray-700 text-lg">
              Kami memiliki tim medis yang profesional dan berpengalaman di berbagai bidang spesialisasi. Dengan dukungan teknologi medis terkini, kami siap memberikan pelayanan kesehatan yang cepat, tepat, dan akurat.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 p-4">
            <p className="text-gray-700 text-lg">
              RS Bunda Pengharapan - Kasih yang Menyembuhkan
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <Image
              src="/images/pelayanan-1.webp"
              alt="Hospital"
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
      <Call />
      <Footer />
    </main>
  )
}
