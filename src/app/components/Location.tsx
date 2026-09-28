import { FaMapMarkerAlt, FaClock, FaClipboardList, FaAmbulance, FaCommentDots, FaInstagram, FaSun, FaMoon } from "react-icons/fa";

export default function Location() {
    return (
        <div id="location-section" className="p-4 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 lg:p-10 rounded-3xl">
                <div>
                    <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                        <FaMapMarkerAlt className="text-gray-900 h-5 w-5" /> Lokasi & Kontak Darurat
                    </h2>
                    <p className="text-gray-500 mt-2">Jika Anda membutuhkan penanganan medis segera atau ingin melakukan pendaftaran, berikut adalah detail kontak resmi yang dapat dihubungi:</p>
                    <ul className="text-gray-700 mt-4 space-y-3">
                        <li className="flex items-start gap-2">
                            <FaMapMarkerAlt className="text-gray-900 h-4 w-4 mt-1 shrink-0" />
                            <span><span className="font-semibold">Alamat:</span> Jl. Tujuh Wali-Wali, Kamundu, RT.20/RW.04, Kec. Merauke, Kabupaten Merauke, Papua Selatan 99616.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <FaClipboardList className="text-gray-900 h-4 w-4 mt-1 shrink-0" />
                            <span><span className="font-semibold">Nomor Admisi / Pendaftaran:</span> 0813-4301-1641</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <FaAmbulance className="text-gray-900 h-4 w-4 mt-1 shrink-0" />
                            <span><span className="font-semibold">Nomor Ambulans:</span> 0812-8667-8343</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCommentDots className="text-gray-900 h-4 w-4 mt-1 shrink-0" />
                            <span><span className="font-semibold">Layanan Pengaduan:</span> 0821-9931-3962</span>
                        </li>
                    </ul>
                    <p className="text-gray-600 mt-4 flex items-start gap-2">
                        <FaInstagram className="text-gray-900 h-4 w-4 mt-1 shrink-0" />
                        <span><span className="font-semibold">Informasi Media Sosial:</span> Anda juga bisa memantau pembaruan fasilitas dan pengumuman terbaru di akun resmi Instagram RS Bunda Pengharapan.</span>
                    </p>
                </div>
                <div>
                    <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                        <FaClock className="text-gray-900 h-5 w-5" /> Jam Besuk Pasien Rawat Inap
                    </h2>
                    <p className="text-gray-500 mt-2">Untuk menjaga kenyamanan serta proses pemulihan pasien, RS Bunda Pengharapan menerapkan aturan jam kunjung yang ketat bagi para pembesuk:</p>
                    <ul className="text-gray-700 mt-4 space-y-3">
                        <li className="flex items-start gap-2">
                            <FaSun className="text-gray-900 h-4 w-4 mt-1 shrink-0" />
                            <span><span className="font-semibold">Sesi Siang:</span> Pukul 12.00 – 14.00 WIT</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <FaMoon className="text-gray-900 h-4 w-4 mt-1 shrink-0" />
                            <span><span className="font-semibold">Sesi Sore/Malam:</span> Pukul 17.30 – 20.00 WIT</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
