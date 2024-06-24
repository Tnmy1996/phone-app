import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const CallingScreen: React.FC = () => {
    const { phoneNumber } = useParams();
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [isSpeakerOn, setIsSpeakerOn] = useState<boolean>(false);

    const toggleMute = (): void => setIsMuted(!isMuted);
    const toggleSpeaker = (): void => setIsSpeakerOn(!isSpeakerOn);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div className='w-64 p-4 bg-white rounded-lg shadow-md'>
                <p className='text-xl text-center mb-4'>
                    Calling {phoneNumber}...
                </p>
                <div className='grid grid-cols-2 gap-2 mb-4'>
                    <button
                        type='button'
                        onClick={toggleMute}
                        className={`p-2 rounded ${isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                    >
                        {isMuted ? 'Unmute' : 'Mute'}
                    </button>
                    <button
                        type='button'
                        onClick={toggleSpeaker}
                        className={`p-2 rounded ${isSpeakerOn ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                    >
                        {isSpeakerOn ? 'Speaker Off' : 'Speaker On'}
                    </button>
                </div>
                <Link to='/' className='block'>
                    <button
                        type='button'
                        className='w-full p-2 bg-red-500 text-white rounded hover:bg-red-600'
                    >
                        End Call
                    </button>
                </Link>
            </div>
        </div>
    );
};
