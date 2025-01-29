import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
      <nav className="bg-sky-50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Image src="/logo.png" alt="Bunda Pengharapan Logo" width={60} height={60} />
          <div className="space-x-4">
            <Link href="#" className="text-sky-800 hover:text-sky-600">Home</Link>
            <Link href="#" className="text-sky-800 hover:text-sky-600">Jadwal</Link>
            <Link href="#" className="text-sky-800 hover:text-sky-600">Tentang</Link>
            <Link href="#" className="text-sky-800 hover:text-sky-600">Hubungi</Link>
          </div>
        </div>
      </nav>
    );
}