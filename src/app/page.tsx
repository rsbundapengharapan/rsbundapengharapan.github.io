import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-sky-50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Image src="/logo.png" alt="Bunda Pengharapan Logo" width={60} height={60} />
          <div className="space-x-4">
            <Link href="#" className="text-sky-800 hover:text-sky-600">Home</Link>
            <Link href="#" className="text-sky-800 hover:text-sky-600">Jadwal</Link>
            <Link href="#" className="text-sky-800 hover:text-sky-600">Tentang Kami</Link>
            <Link href="#" className="text-sky-800 hover:text-sky-600">Hubungi</Link>
          </div>
        </div>
      </nav>

      <header className="bg-sky-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">Bunda Pengharapan</h1>
          <p className="text-xl text-sky-700">&quot;Kasih yang Menyembuhkan&quot;</p>
        </div>
      </header>

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
