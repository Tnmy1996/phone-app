import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { CustomButton } from './CustomButton';
import { NumberPad } from './NumberPad';

import contact from '../assets/icons/contact.svg';
import defaultContact from '../assets/icons/defaultContact.svg';
import dialpad from '../assets/icons/dialpad.svg';
import endCall from '../assets/icons/endCall.svg';
import expand from '../assets/icons/expand.svg';
import message from '../assets/icons/message.svg';
import mute from '../assets/icons/mute.svg';
import volumeUp from '../assets/icons/volumeUp.svg';

export const CallingScreen: React.FC = () => {
    const { phoneNumber } = useParams();
    const navigate = useNavigate();

    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [isSpeakerOn, setIsSpeakerOn] = useState<boolean>(false);
    const [isNumberPadVisible, setIsNumberPadVisible] =
        useState<boolean>(false);
    const [isCallConnected, setIsCallConnected] = useState<boolean>(false);
    const [isCallDisconnected, setIsCallDisconnected] =
        useState<boolean>(false);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const callConnectionTimeout = setTimeout(() => {
            setIsCallConnected(true);
        }, 2000);

        return () => {
            callConnectionTimeout;
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isCallConnected]);

    const toggleMute = (): void => {
        setIsMuted(!isMuted);
        if (isSpeakerOn) {
            setIsSpeakerOn(false);
        }
    };
    const toggleSpeaker = (): void => {
        setIsSpeakerOn(!isSpeakerOn);
        if (isMuted) {
            setIsMuted(false);
        }
    };

    const handleCallDisconnection = (): void => {
        setIsCallConnected(false);
        setIsCallDisconnected(true);
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    const formatTime = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const remainingSeconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className='flex flex-col items-center justify-center bg-gray-100'>
            <div className='w-96 h-[768px] p-4 bg-white'>
                <div className='flex justify-between text-xs'>
                    <p className='text-[#232323]'>Calling from Whatsapp</p>
                    <p className='text-[#5E5E5E]'>{phoneNumber}</p>
                </div>
                <div className='flex flex-col items-center mt-8 mb-10'>
                    <img src={defaultContact} alt='contact-image' />
                    {isCallConnected ? (
                        <p className='text-center my-2'>
                            {formatTime(seconds)}
                        </p>
                    ) : (
                        <p className='text-center my-2'>
                            {isCallDisconnected ? 'Call end' : 'Connecting...'}
                        </p>
                    )}
                    <p className='text-xl'>{phoneNumber}</p>
                    <p className='text-[#4F4F4F]'>Houston, TX</p>
                </div>
                <div className='flex flex-col justify-between h-[480px]'>
                    {isNumberPadVisible ? (
                        <NumberPad onClickHandler={() => {}} />
                    ) : (
                        <div className='grid grid-cols-3 gap-5'>
                            <div className='flex flex-col items-center gap-2'>
                                <CustomButton
                                    key='mute'
                                    config={{
                                        type: 'action',
                                        icon: mute,
                                        onClickHandler: toggleMute,
                                        backGroundColour: isMuted
                                            ? '#48CAE4'
                                            : '#F5F5F5',
                                    }}
                                />
                                <p className='text-xs text-[#232323]'>Mute</p>
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <CustomButton
                                    key='keypad'
                                    config={{
                                        type: 'action',
                                        icon: dialpad,
                                        onClickHandler: () => {
                                            setIsNumberPadVisible(true);
                                        },
                                        backGroundColour: '#F5F5F5',
                                    }}
                                />
                                <p className='text-xs text-[#232323]'>Keypad</p>
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <CustomButton
                                    config={{
                                        type: 'action',
                                        icon: volumeUp,
                                        onClickHandler: toggleSpeaker,
                                        backGroundColour: isSpeakerOn
                                            ? '#48CAE4'
                                            : '#F5F5F5',
                                    }}
                                />
                                <p className='text-xs text-[#232323]'>
                                    Speaker
                                </p>
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <CustomButton
                                    config={{
                                        type: 'action',
                                        icon: message,
                                        onClickHandler: () => {},
                                        backGroundColour: '#F5F5F5',
                                    }}
                                />
                                <p className='text-xs text-[#232323]'>
                                    Message
                                </p>
                            </div>
                            <div />
                            <div className='flex flex-col items-center gap-2'>
                                <CustomButton
                                    config={{
                                        type: 'action',
                                        icon: contact,
                                        onClickHandler: () => {},
                                        backGroundColour: '#F5F5F5',
                                    }}
                                />
                                <p className='text-xs text-[#232323]'>
                                    Contacts
                                </p>
                            </div>
                        </div>
                    )}
                    <div className='grid grid-cols-3 gap-5'>
                        <div />
                        <CustomButton
                            config={{
                                type: 'action',
                                icon: endCall,
                                onClickHandler: handleCallDisconnection,
                                backGroundColour: '#FD3C2E',
                            }}
                        />
                        {isNumberPadVisible && (
                            <div>
                                <button
                                    type='button'
                                    className='h-20 w-20 p-2 flex flex-col justify-center items-center gap-3'
                                    onClick={() => setIsNumberPadVisible(false)}
                                >
                                    <img
                                        src={expand}
                                        alt='hide'
                                        className='w-4'
                                    />
                                    <p className='text-xs text-[#232323]'>
                                        Hide
                                    </p>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
