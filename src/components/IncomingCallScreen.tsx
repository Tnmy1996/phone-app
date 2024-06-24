import { useNavigate, useParams } from 'react-router-dom';

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
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div className='w-64 p-4 bg-white rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold mb-4 text-center'>
                    Incoming Call
                </h2>
                <p className='text-xl text-center mb-6'>{phoneNumber}</p>
                <div className='flex justify-between'>
                    <button
                        type='button'
                        onClick={answerCall}
                        className='w-1/2 mr-2 p-3 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6 mx-auto'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <title>x</title>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                            />
                        </svg>
                    </button>
                    <button
                        type='button'
                        onClick={rejectCall}
                        className='w-1/2 ml-2 p-3 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6 mx-auto'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <title>x</title>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IncomingCallScreen;
