import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Call() {
    return (
        <div id="call-section" className="flex flex-col sm:flex-row items-center p-4 bg-white rounded-t-3xl mt-4">
            <div className="w-full md:w-1/2 p-8 lg:p-28">
                <h1 className="text-2xl font-bold text-gray-900">Hubungi Kami</h1>
                <p className="text-gray-500 mt-2">Untuk informasi lebih lanjut, silakan hubungi kami</p>
                <p className="text-gray-900 mt-4 text-lg">+62 812 4039 5379</p>
                <div className="flex space-x-4 mt-4 px-2">
                    <a href="https://www.facebook.com/rsbundapengharapan/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-gray-900 h-6 w-6" />
                    </a>
                    <a href="https://www.instagram.com/rsbundapengharapan/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-gray-900 h-6 w-6" />
                    </a>
                    <a href="https://youtube.com/@rsbundapengharapan" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-gray-900 h-6 w-6" />
                    </a>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col items-end pr-10">
                <Image
                    src="/images/QR-survey-kepuasan-rsbp.png"
                    alt="Leave a review"
                    width={150}
                    height={150}
                    className="w-32 object-cover rounded-lg m-4"
                />
                <p className="text-gray-500 mt-2 text-sm text-right">Scan untuk mengisi kepuasan dan pengalaman anda di RSBP.</p>
            </div>
        </div>
    );
}
