import { HiPlus } from "react-icons/hi2";
import doctorSchedules from '../../data/jadwal-dokter.json';
import StatusCard from './StatusCard';
import { useRouter } from "next/navigation";

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
    const router = useRouter();
    const currentDate = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const currentDay = new Date().toLocaleDateString('id-ID', { weekday: 'long' }).toUpperCase();
    const currentTime = new Date().toTimeString().slice(0, 5);

    const todaySchedules = doctorSchedules.filter((schedule: DoctorSchedule) => schedule.day === currentDay);

    const formatTime = (time: string) => {
        return time.slice(0, 5);
    };

    const navigateToSchedule = () => {
        router.push('/schedule');
    };

    const isCurrentTimeInRange = (startTime: string, endTime: string) => {
        return currentTime >= startTime && currentTime <= endTime;
    };

    return (
        <div className="flex sm:flex-row flex-col gap-2 p-4 sm:pt-8">
            <div className="w-full relative">
                <div className="bg-white w-full p-2 rounded-3xl">
                    <div className="px-4 py-6 flex-1">
                        <h1 className="text-gray-900 text-lg font-bold mb-2">Jadwal Dokter</h1>
                        <p className="text-gray-500 text-sm">{currentDate}</p>
                        <ul className="mt-4">
                            {todaySchedules.length > 0 ? (
                                todaySchedules.map((schedule: DoctorSchedule, index: number) => {
                                    const clinicName = schedule.clinic.replace("Poliklinik ", "");
                                    const isInTimeRange = isCurrentTimeInRange(schedule.start_time, schedule.end_time);
                                    return (
                                        <li key={index} className={`text-white text-sm mb-2 p-2 rounded-2xl ${isInTimeRange ? 'bg-cusblue' : 'bg-cusblue/80'} hover:bg-cusblue/100 transition-colors duration-300 flex justify-between items-center`}>
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
                                })
                            ) : (
                                <li className="text-gray-500 text-sm mb-2 py-2">
                                    Data tidak tersedia
                                </li>
                            )}
                        </ul>
                    </div>
                    <button onClick={navigateToSchedule} className="absolute top-2 right-2 bg-gray-900 text-white rounded-full p-2 transition-transform transform hover:scale-110">
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
                </div>
            </div>
        </div>
    );
}