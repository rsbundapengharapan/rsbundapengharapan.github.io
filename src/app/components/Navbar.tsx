import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import {
  HiOutlineHome, 
  HiOutlineCalendar,
  HiMiniPhone,
  HiOutlineBuildingOffice2,
  HiPlus 
} from "react-icons/hi2";

import doctorSchedules from '../../data/jadwal-dokter.json';

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const daysOfWeek = ["SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU"];

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
        className={`rounded-full p-3  ${isActive ? 'bg-cusblue' : 'bg-white'} transition-all duration-300 hover:bg-cusblue`}
      >
        {children}
      </div>
    </Link>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const formatTime = (time: string) => {
    return time.slice(0, 5);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="/logo.png" alt="Bunda Pengharapan Logo" width={50} height={50} />
        <div className="flex space-x-4">
          <NavButton href="/" isActive={isActive('')}>
            <HiOutlineHome className="h-6 w-6" />
          </NavButton>
          <NavButton href="#jadwal" isActive={isActive('#jadwal')} onClick={togglePopup}>
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
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-white p-8 rounded-3xl w-full max-w-4xl transform transition-transform duration-300 ease-in-out scale-95 opacity-0 animate-popup">
            <button onClick={togglePopup} className="absolute top-4 right-4 bg-gray-900 text-white rounded-full p-2 transition-transform transform hover:scale-110">
              <HiPlus className="w-4 rotate-45"/>
            </button>
            <h2 className="text-gray-900 text-lg font-bold mb-4">Jadwal Dokter</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {daysOfWeek.map((day) => (
                <div key={day} className="bg-gray-100 p-4 rounded-2xl">
                  <h3 className="text-gray-900 font-bold mb-2">{day}</h3>
                  <ul>
                    {doctorSchedules.filter((schedule) => schedule.day === day).map((schedule, index) => (
                      <li key={index} className="text-gray-700 text-sm mb-2">
                        <span className="font-bold">{schedule.clinic.replace("Poliklinik ", "")}</span>
                        <br />
                        <span>{schedule.doctor_name}</span>
                        <br />
                        {formatTime(schedule.start_time)} - {formatTime(schedule.end_time)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}