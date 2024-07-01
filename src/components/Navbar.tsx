import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-sky-600 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="font-bold text-xl">RS Bunda Pengharapan</span>
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">Tentang</Link></li>
          <li><Link href="/facilities">Fasilitas</Link></li>
          <li><Link href="/services">Layanan</Link></li>
          <li><Link href="/contact">Hubungi</Link></li>
        </ul>
      </div>
    </nav>
  )
}