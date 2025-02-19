"use client";

import { useState, useEffect } from "react";
import doctorSchedules from '../../data/jadwal-dokter.json';
import Navbar from "../components/Navbar";
import Call from "../components/Call";
import Footer from "../components/Footer";

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

const daysOfWeek = ["SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU"];

const formatTime = (time: string) => {
  return time.slice(0, 5);
};

export default function Schedule() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const popup = document.querySelector('.popup');
    if (popup && !popup.contains(event.target as Node)) {
      togglePopup();
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-cuswhite rounded-3xl m-2 font-avenir">
      <Navbar/>
      <div className="p-4">
        <div className="container mx-auto">
          <h2 className="text-gray-900 text-lg font-bold mb-4">Jadwal Dokter</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {daysOfWeek.map((day) => (
              <div key={day} className="bg-gray-100 p-4 rounded-2xl">
                <h3 className="text-gray-900 font-bold mb-2">{day}</h3>
                <ul>
                  {doctorSchedules.filter((schedule: DoctorSchedule) => schedule.day === day).map((schedule, index) => (
                    <li key={index} className="text-gray-700 text-sm mb-2">
                      <span className="font-bold">{schedule.clinic.replace("Poliklinik ", "")}</span>
                      <br />
                      <span>{schedule.doctor_name}</span>
                      <br />
                      {formatTime(schedule.start_time)} - {formatTime(schedule.end_time)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Call/>
      <Footer/>
    </div>
  );
}
