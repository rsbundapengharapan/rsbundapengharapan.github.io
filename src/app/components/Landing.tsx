import Image from "next/image";

export default function Landing() {
    return(
      <div className="flex bg-cyan-100 h-[50vh]">
        <div className="w-[60%] p-4">
          left section
        </div>

        <div className="w-[40%] bg-blue-200 p-4">
          <div className="container mx-auto">
            {/* Top Full Width Box */}
            <div className="bg-blue-500 p-6 rounded-3xl mb-2">
              <h2 className="text-white text-2xl font-bold mb-20">Jadwal Dokter</h2>
              <button className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lihat <span className="ml-2">&#8594;</span></button>
            </div>

            {/* Bottom Two Boxes */}
            <div className="flex flex-col md:flex-row gap-2">
              {/* Left Box (60% width) */}
              <div className="flex flex-col md:flex-row gap-2">

                <div className="flex-1 md:w-4/5 p-6 rounded-3xl inset-0 bg-gradient-to-br from-blue-500 to-teal-400 relative">
                  <Image src="/images/call.png" alt="Placeholder Image" width={500} height={300} className="w-full mb-4" />
                  <div className="p-0">
                    <h2 className="text-white text-xl font-bold mb-2">Hubungi</h2>
                    <p className="text-white text-sm">Reservasi</p>
                  </div>
                </div>

                <div className="flex-1 md:w-1/5 bg-white rounded-3xl relative">
                  <Image src="/images/petugas_lab.jpg" alt="Pemeriksaan MCU Lab Radiologi Merauke" width={500} height={800} className="w-full h-full object-cover rounded-3xl" />
                  <div className="p-4 absolute bottom-0 left-0 w-full bg-white/70 backdrop-blur-md rounded-b-3xl">
                    <h2 className="text-gray-700 text-xl font-bold mb-2">MCU</h2>
                    <p className="text-gray-400 text-sm">Lab + Rad</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
}