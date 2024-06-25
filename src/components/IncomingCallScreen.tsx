import { useNavigate, useParams } from 'react-router-dom';

import { CustomButton } from './CustomButton';

import call from '../assets/icons/call.svg';
import defaultContact from '../assets/icons/defaultContact.svg';
import endCall from '../assets/icons/endCall.svg';

const IncomingCallScreen: React.FC = () => {
    const { phoneNumber } = useParams();
    const navigate = useNavigate();

    const answerCall = () => {
        navigate(`/calling/${phoneNumber}`);
    };

    const rejectCall = () => {
        navigate('/');
    };

    return (
        <div className='flex flex-col items-center justify-center bg-gray-100'>
            <div className='w-96 h-[768px] p-4 bg-white flex flex-col'>
                <div className='flex justify-between text-xs'>
                    <p className='text-[#232323]'>Incoming call to Whatsapp</p>
                    <p className='text-[#5E5E5E]'>{phoneNumber}</p>
                </div>
                <div className='flex flex-col items-center my-8'>
                    <img src={defaultContact} alt='contact-image' />
                    <p className='my-2'>Call from</p>
                    <p className='text-xl'>{phoneNumber}</p>
                    <p className='text-[#4F4F4F]'>Houston, TX</p>
                </div>
                <div className='grow' />
                <div className='flex justify-between px-7 mb-6'>
                    <CustomButton
                        config={{
                            type: 'action',
                            icon: endCall,
                            onClickHandler: rejectCall,
                            backGroundColour: '#FD3C2E',
                        }}
                    />
                    <CustomButton
                        config={{
                            type: 'action',
                            icon: call,
                            onClickHandler: answerCall,
                            backGroundColour: '#33D059',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default IncomingCallScreen;
