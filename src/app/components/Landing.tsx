import Image from "next/image";

export default function Landing() {
    return(
      <div className="flex h-[50vh]">
        <div 
          className="w-[60%] p-4 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/images/rsbp-front.webp')"}}
        >
        </div>

      <div className="w-[40%] p-4">
          <div className="container mx-auto">
            {/* Top Full Width Box */}
            <div
              className="bg-cover bg-center p-6 rounded-3xl mb-2 relative h-48"
              style={{ backgroundImage: "url('/images/direktur.webp')"}}
            >
              <button className="mt-28 relative bg-amber-900/20 hover:bg-amber-900/50 backdrop-blur-md p-8 shadow-lg text-white rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Tentang RSBP <span className="ml-2">&#8594;</span>
              </button>
            </div>

            {/* Bottom Two Boxes */}
            <div className="flex flex-col md:flex-row gap-2">
              {/* Left Box (60% width) */}
              <div className="flex flex-col md:flex-row gap-2">
                

                <div className="flex-1 md:w-4/5 bg-white rounded-3xl relative flex flex-col">
                  <div className="h-[80%] overflow-hidden rounded-3xl bg-cusblue">
                    <Image
                      src="/images/call.png"
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

                <div className="flex-1 md:w-1/5 bg-white rounded-3xl relative flex flex-col">
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
            </div>
          </div>
        </div>
        
      </div>
    );
}