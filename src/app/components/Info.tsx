import Image from "next/image";
import { HiPlus } from "react-icons/hi2";
import doctorSchedules from '../../data/jadwal-dokter.json';
import { useEffect, useState } from 'react';
import StatusCard from './StatusCard';

interface DoctorSchedule {
  poli: string;
  time: string;
  color: string;
}

export default function Info() {
    const currentDate = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    return (
        <div className="flex sm:flex-row flex-col gap-2 px-2">
            <div className="w-full relative p-2">
                <div className="bg-white w-full p-2 rounded-3xl">
                    <div className="px-4 py-6 flex-1">
                        <h1 className="text-gray-900 text-lg font-bold mb-2">Jadwal Dokter</h1>
                        <p className="text-gray-500 text-sm">{currentDate}</p>
                        <ul className="mt-4">
                            {doctorSchedules.map((schedule: DoctorSchedule, index: number) => {
                                return (
                                    <li key={index} className="text-white text-sm mb-2 p-2 rounded-2xl bg-cusblue/80 hover:bg-cusblue/100 trasnition-colors duration-300">
                                        <span className="font-bold">{schedule.poli}</span>: {schedule.time}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <button className="absolute top-2 right-2 bg-gray-900 text-white rounded-full p-2">
                        <HiPlus className="w-4"/>
                    </button>
                </div>
            </div>
            <div className="w-full relative p-2">
                <div className="bg-white w-full p-2 rounded-3xl">
                    <div className="px-4 py-6 flex-1">
                        <h1 className="text-gray-900 text-lg font-bold mb-2">Layanan</h1>
                        <StatusCard type="igd" title="IGD" subtitle="IGD dan Ambulance" time="24 Jam" />
                        <StatusCard type="lab" title="Lab" subtitle="Pemeriksaan MCU, lab PK dan MB" time="08:00 - 16:00" />
                        <StatusCard type="rad" title="Radiologi" subtitle="MCU, Rontgen, dan USG" time="08:00 - 16:00" />
                    </div>
                    <button className="absolute top-2 right-2 bg-gray-900 text-white rounded-full p-2">
                        <HiPlus className="w-4"/>
                    </button>
                </div>
            </div>
        </div>
    );
}