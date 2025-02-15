import Image from "next/image";
import { HiPlus } from "react-icons/hi2";
import doctorSchedules from '../../data/jadwal-dokter.json';
import { useEffect, useState } from 'react';
import StatusCard from './StatusCard';

interface DoctorSchedule {
  is_holiday: boolean;
  doctor_id: string;
  doctor_name: string;
  day: string;
  start_time: string;
  end_time: string;
  clinic: string;
  quota: number;
}

export default function Info() {
    const currentDate = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const currentDay = new Date().toLocaleDateString('id-ID', { weekday: 'long' }).toUpperCase();

    const todaySchedules = doctorSchedules.filter((schedule: DoctorSchedule) => schedule.day === currentDay);

    const formatTime = (time: string) => {
        return time.slice(0, 5);
    };

    return (
        <div className="flex sm:flex-row flex-col gap-2 p-4">
            <div className="w-full relative">
                <div className="bg-white w-full p-2 rounded-3xl">
                    <div className="px-4 py-6 flex-1">
                        <h1 className="text-gray-900 text-lg font-bold mb-2">Jadwal Dokter</h1>
                        <p className="text-gray-500 text-sm">{currentDate}</p>
                        <ul className="mt-4">
                            {todaySchedules.map((schedule: DoctorSchedule, index: number) => {
                                const clinicName = schedule.clinic.replace("Poliklinik ", "");
                                return (
                                    <li key={index} className="text-white text-sm mb-2 p-2 rounded-2xl bg-cusblue/80 hover:bg-cusblue/100 trasnition-colors duration-300 flex justify-between items-center">
                                        <div>
                                            <span className="font-bold">{clinicName}</span>
                                            <br />
                                            <span>{schedule.doctor_name}</span>
                                        </div>
                                        <div>
                                            {formatTime(schedule.start_time)} - {formatTime(schedule.end_time)}
                                        </div>
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
            <div className="w-full relative">
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