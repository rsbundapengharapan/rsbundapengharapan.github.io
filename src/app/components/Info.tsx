import Image from "next/image";
import {
  HiPlus
} from "react-icons/hi2";

export default function Info() {
    const currentDate = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    return (
        <div className="">
            <div className="flex">
                <div className="w-2/5 p-4 relative">
                    <div className="bg-white w-full p-2 rounded-3xl">
                        <div className="px-4 py-6 flex-1">
                            <h1 className="text-gray-900 text-lg font-bold mb-2">Jadwal Dokter</h1>
                            <p className="text-gray-500 text-sm">{currentDate}</p>
                        </div>
                        <button className="absolute top-2 right-2 bg-gray-900 text-white rounded-full p-2">
                            <HiPlus className="w-4"/>
                        </button>
                    </div>
                </div>
                <div className="w-3/5 p-4 relative">
                    <div className="bg-white w-full p-2 rounded-3xl">
                        <div className="px-4 py-6 flex-1">
                            <h1 className="text-gray-900 text-lg font-bold mb-2">Layanan</h1>
                            <div className="flex-1 md:w-1/5 bg-gray-50 rounded-3xl relative flex flex-col">
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
                        <button className="absolute top-2 right-2 bg-gray-900 text-white rounded-full p-2">
                            <HiPlus className="w-4"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}