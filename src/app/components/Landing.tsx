import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Landing() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Simulate loading time
        return () => clearTimeout(timer);
    }, []);

    const navigateToAbout = () => {
        router.push('/about');
    };

    return(
      <div className="flex flex-col md:flex-row h-auto md:h-[50vh]">
        {/* Object section */}
        {isLoading ? (
          <div className="w-full md:w-[60%] py-48 bg-gray-200 animate-pulse"></div>
        ) : (
          <div 
            className="w-full md:w-[60%] py-48 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/images/rsbp-front.webp')"}}
          >
          </div>
        )}

        {/* Shortcut section */}
        <div className="w-full md:w-[40%] p-4">
            <div className="container mx-auto">
              {isLoading ? (
                <div className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-3xl mb-2"></div>
                  <div className="flex flex-row gap-2">
                    <div className="bg-gray-200 h-48 w-1/2 rounded-3xl"></div>
                    <div className="bg-gray-200 h-48 w-1/2 rounded-3xl"></div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Top Full Width Box */}
                  <div
                    className="bg-cover bg-center p-6 rounded-3xl mb-2 relative h-48"
                    style={{ backgroundImage: "url('/images/direktur.webp')"}}
                  >
                    <button onClick={navigateToAbout} className="mt-28 relative bg-amber-900/20 hover:bg-amber-900/50 backdrop-blur-md p-8 shadow-lg text-white rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      <span className="hidden sm:inline">Tentang RSBP</span>
                      <span className="sm:hidden">Tentang</span>
                      <span className="ml-2">&#8594;</span>
                    </button>
                  </div>

                  {/* Bottom Two Boxes */}
                  <div className="flex flex-row gap-2">
                    {/* Left Box (60% width) */}
                    <div className="flex-1 bg-white rounded-3xl relative flex flex-col">
                      <div className="h-[80%] overflow-hidden rounded-3xl bg-cusblue">
                        <Image
                          src="/images/call.webp"
                          alt="Pemeriksaan MCU Radiologi dan Lab"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover p-6"
                        />
                      </div>
                      <div className="px-4 py-6 flex-1">
                        <h2 className="text-gray-900 text-md font-extrabold mb-2">Hubungi</h2>
                        <p className="text-gray-500 text-sm">Admisi</p>
                      </div>
                    </div>

                    <div className="flex-1 bg-white rounded-3xl relative flex flex-col">
                      <div className="h-[80%] overflow-hidden rounded-3xl">
                        <Image
                          src="/images/radiologi.webp"
                          alt="Pemeriksaan MCU Radiologi dan Lab"
                          width={500}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="px-4 py-6 flex-1">
                        <h2 className="text-gray-900 text-md font-extrabold mb-2">MCU</h2>
                        <p className="text-gray-500 text-sm">Lab dan Rad</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
        </div>
      </div>
    );
}
