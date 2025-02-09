import { FC } from 'react';
import { PiTestTube, PiAmbulance, PiAtomLight} from 'react-icons/pi';

interface StatusCardProps {
    type: 'igd' | 'lab' | 'rad';
    title: string;
    subtitle: string;
    time: string;
}

const StatusCard: FC<StatusCardProps> = ({ type, title, subtitle, time }) => {
    const renderIcon = () => {
        switch (type) {
            case 'igd':
                return <PiAmbulance className="w-6 h-6 text-white" />;
            case 'lab':
                return <PiTestTube className="w-6 h-6 text-white" />;
            case 'rad':
                return <PiAtomLight className="w-6 h-6 text-white" />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-cuswhite rounded-3xl p-4 hover:shadow transition-shadow duration-300 my-2">
            <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
                <div className="w-10 h-10 bg-cusblue rounded-full flex items-center justify-center">
                {renderIcon()}
                </div>
                <h2 className="text-gray-900 text-md font-extrabold ml-2">{title}</h2>
            </div>
            <p className="text-gray-500 text-sm">{time}</p>
            </div>
            <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
    );
};

export default StatusCard