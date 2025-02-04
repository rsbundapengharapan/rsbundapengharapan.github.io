import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import {
  HiOutlineHome, 
  HiOutlineCalendar,
  HiMiniPhone,
  HiOutlineBuildingOffice2 
} from "react-icons/hi2";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ href, children, isActive }) => (
  <Link href={href} className={`flex items-center ${isActive ? 'text-white' : 'text-sky-800'} hover:text-white`}>
    <div 
      className={`rounded-full p-3 ${isActive ? 'bg-gradient-to-br from-blue-500 to-blue-300' : 'bg-white'} transition-all duration-300`}
    >
      {children}
    </div>
  </Link>
);

export default function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    setActiveHash(window.location.hash);
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isActive = (hash: string) => {
    if (hash === '') return pathname === '/' && !activeHash;
    return activeHash === hash;
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="/logo.png" alt="Bunda Pengharapan Logo" width={50} height={50} />
        <div className="flex space-x-4">
          <NavButton href="/" isActive={isActive('')}>
            <HiOutlineHome className="h-6 w-6" />
          </NavButton>
          <NavButton href="#jadwal" isActive={isActive('#jadwal')}>
            <HiOutlineCalendar className="h-6 w-6" />
          </NavButton>
          <NavButton href="#kontak" isActive={isActive('#kontak')}>
            <HiMiniPhone className="h-6 w-6" />
          </NavButton>
          <NavButton href="#info" isActive={isActive('#info')}>
            <HiOutlineBuildingOffice2 className="h-6 w-6" />
          </NavButton>
        </div>
      </div>
    </nav>
  );
}