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
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavButton: React.FC<NavButtonProps> = ({ href, children, isActive, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={`flex items-center ${isActive ? 'text-white' : 'text-cusblack'} hover:text-white`}>
      <div 
        className={`rounded-full p-3 ${isActive ? 'bg-cusblue' : 'bg-white'} transition-all duration-500 ease-in-out hover:bg-cusblue`}
      >
        {children}
      </div>
    </Link>
  );
};

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
    return activeHash === hash || pathname === hash;
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Bunda Pengharapan Logo" width={50} height={50} />
        </Link>
        <div className="flex space-x-4">
          <NavButton href="/" isActive={isActive('')}>
            <HiOutlineHome className="h-6 w-6" />
          </NavButton>
          <NavButton href="/schedule" isActive={isActive('/schedule')}>
            <HiOutlineCalendar className="h-6 w-6" />
          </NavButton>
          <NavButton href="#call-section" isActive={isActive('#call-section')}>
            <HiMiniPhone className="h-6 w-6" />
          </NavButton>
          <NavButton href="/about" isActive={isActive('/about')}>
            <HiOutlineBuildingOffice2 className="h-6 w-6" />
          </NavButton>
        </div>
      </div>
    </nav>
  );
}
