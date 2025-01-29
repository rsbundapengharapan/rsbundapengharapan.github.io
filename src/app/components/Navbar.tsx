import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineHome, 
  HiOutlineCalendar,
  HiMiniPhone,
  HiOutlineBuildingOffice2 
} from "react-icons/hi2";

export default function Navbar() {
    return (
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Image src="/logo.png" alt="Bunda Pengharapan Logo" width={50} height={50} />
          <div className="flex space-x-4">
            <Link href="/" className="text-sky-800 hover:text-white flex items-center"><div className="rounded-full bg-white p-3 hover:bg-gradient-to-r from-sky-400 to-cyan-300"><HiOutlineHome className="h-6 w-6" /></div></Link>
            <Link href="#jadwal" className="text-sky-800 hover:text-white flex items-center"><div className="rounded-full bg-white p-3 hover:bg-gradient-to-r from-sky-400 to-cyan-300"><HiOutlineCalendar className="h-6 w-6" /></div></Link>
            <Link href="#kontak" className="text-sky-800 hover:text-white flex items-center"><div className="rounded-full bg-white p-3 hover:bg-gradient-to-r from-sky-400 to-cyan-300"><HiMiniPhone className="h-6 w-6" /></div></Link>
            <Link href="#info" className="text-sky-800 hover:text-white flex items-center"><div className="rounded-full bg-white p-3 hover:bg-gradient-to-r from-sky-400 to-cyan-300"><HiOutlineBuildingOffice2 className="h-6 w-6" /></div></Link>
          </div>
        </div>
      </nav>
    );
}