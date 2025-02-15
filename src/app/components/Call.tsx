import Image from "next/image";

export default function Call() {
    return (
        <div id="call-section" className="flex flex-col md:flex-row items-center p-4 bg-white rounded-3xl mt-4">
            <div className="w-full md:w-1/2 p-4">
                <h1 className="text-2xl font-bold text-gray-900">Hubungi Kami</h1>
                <p className="text-gray-500 mt-2">Untuk informasi lebih lanjut, silakan hubungi kami</p>
                <p className="text-gray-900 mt-4 text-lg">+62 812 4039 5379</p>
            </div>
            <div className="w-full md:w-1/2 p-4">
                <Image
                    src="/images/hubungi-dokter.webp"
                    alt="Call Center"
                    width={200}
                    height={150}
                    className="w-72 object-cover rounded-3xl mx-auto"
                />
            </div>
        </div>
    );
}
