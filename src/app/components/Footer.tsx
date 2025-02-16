import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-white rounded-b-3xl">
      <div className="container mx-auto text-center text-gray-600 flex flex-col items-center">
        <p className="text-gray-400 text-sm">&copy; RSBP 2001 - {currentYear}. All rights reserved.</p>
        <p className="text-gray-400 text-sm my-2">Website build and maintain</p>
        <a href="https://arwildo.com" target="_blank" rel="noopener dofollow">
          <Image src="/images/arwildo-software-cr.svg" alt="Arwildo Software" width={90} height={90} />
        </a>
      </div>
    </footer>
  );
}
