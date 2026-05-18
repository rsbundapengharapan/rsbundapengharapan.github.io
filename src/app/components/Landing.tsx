import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Landing() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progressKey, setProgressKey] = useState(0);

    const slides = [
        { image: '/images/rsbp-front.webp', alt: 'RSBP Tampak Depan' },
        { image: '/images/radiologi.webp', alt: 'Layanan X-ray dan USG' },
        { image: '/images/ruangan-bed.webp', alt: 'Ruangan dan Bed Rawat Inap RSBP' },
        { image: '/images/tampak-depan-2.webp', alt: 'Teras Depan dan Taman RSBP' },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // auto slide
    useEffect(() => {
        if (isLoading) return;
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setProgressKey((prev) => prev + 1);
        }, 5000);
        return () => clearInterval(slideInterval);
    }, [isLoading]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setProgressKey((prev) => prev + 1);
    };

    const navigateToAbout = () => {
        router.push('/about');
    };

    return(
      <div className="flex flex-col sm:flex-row h-auto">
        {/* Object section */}
        {isLoading ? (
          <div className="w-full md:w-[60%] py-48 bg-gray-200 animate-pulse rounded-3xl"></div>
        ) : (
          <div className="w-full md:w-[60%] relative overflow-hidden rounded-3xl h-96 sm:h-80 md:h-96">
            {/* slides */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url('${slide.image}')` }}
              />
            ))}

            {/* dots progress */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="h-1 w-10 rounded-full bg-white/40 overflow-hidden cursor-pointer hover:bg-white/60 transition-colors"
                >
                  <span
                    key={index === currentSlide ? `active-${progressKey}-${index}` : `inactive-${index}`}
                    className={`block h-full rounded-full bg-white ${
                      index === currentSlide ? '' : 'w-0'
                    }`}
                    style={
                      index === currentSlide
                        ? { animation: `progress-fill 5000ms linear forwards` }
                        : {}
                    }
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Shortcut section */}
        <div className="w-full sm:w-2/4 sm:max-w-lg p-4 h-64 sm:h-80 md:h-96">
            <div className="container mx-auto h-full">
              { isLoading ? (
                <div className="animate-pulse flex flex-col h-full gap-2">
                  <div className="bg-gray-200 rounded-3xl h-3/5"></div>
                  <div className="flex flex-row gap-2 flex-1">
                    <div className="bg-gray-200 rounded-3xl w-1/2"></div>
                    <div className="bg-gray-200 rounded-3xl w-1/2"></div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full gap-2">
                  {/* Top Full Width Box */}
                  <div
                    className="bg-cover bg-center p-6 rounded-3xl relative h-3/5"
                    style={{ backgroundImage: "url('/images/direktur.webp')"}}
                  >
                    <button onClick={navigateToAbout} className="absolute bottom-4 left-4 bg-amber-900/20 hover:bg-amber-900/50 backdrop-blur-md p-8 shadow-lg text-white rounded-full text-sm px-5 py-2.5 text-center">
                      <span className="hidden sm:inline">Tentang RSBP</span>
                      <span className="sm:hidden">Tentang</span>
                      <span className="ml-2">&#8594;</span>
                    </button>
                  </div>

                  {/* Bottom Two Boxes */}
                  <div className="flex flex-row gap-2 flex-1 min-h-0">
                    {/* Left Box */}
                    <div
                      className="flex-1 rounded-3xl relative overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
                      onClick={() => {
                      document.getElementById('call-section')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Image
                        src="/images/call.webp"
                        alt="Hubungi No.HP / Telpon RS Bunda Pengharapan Merauke"
                        fill
                        className="object-cover"
                      />
                      {/* blur gradient dari bawah ke atas */}
                      <div
                        className="absolute inset-0 backdrop-blur-sm"
                        style={{
                          maskImage: 'linear-gradient(to top, black 0%, transparent 60%)',
                          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 60%)',
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
                        <h2 className="text-white text-md font-extrabold mb-1">Hubungi</h2>
                        <p className="text-white/80 text-sm">Admisi</p>
                      </div>
                    </div>

                    <div className="flex-1 rounded-3xl relative overflow-hidden">
                      <Image
                        src="/images/radiologi.webp"
                        alt="Pemeriksaan MCU Radiologi dan Lab"
                        fill
                        className="object-cover"
                      />
                      {/* blur gradient dari bawah ke atas */}
                      <div
                        className="absolute inset-0 backdrop-blur-sm"
                        style={{
                          maskImage: 'linear-gradient(to top, black 0%, transparent 60%)',
                          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 60%)',
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
                        <h2 className="text-white text-md font-extrabold mb-1">MCU</h2>
                        <p className="text-white/80 text-sm">Lab dan Rad</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
        </div>
        <style>{`
          @keyframes progress-fill {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>
      </div>
    );
}
