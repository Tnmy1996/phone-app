import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Dialer: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [cursorPosition, setCursorPosition] = useState<number>(0);

    const addDigit = (digit: string): void => {
        setPhoneNumber((prevNumber) => {
            const newNumber =
                prevNumber.slice(0, cursorPosition) +
                digit +
                prevNumber.slice(cursorPosition);
            setCursorPosition(cursorPosition + 1);
            return newNumber;
        });
    };

    const backspace = (): void => {
        if (cursorPosition > 0) {
            setPhoneNumber((prevNumber) => {
                const newNumber =
                    prevNumber.slice(0, cursorPosition - 1) +
                    prevNumber.slice(cursorPosition);
                setCursorPosition(cursorPosition - 1);
                return newNumber;
            });
        }
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div className='w-64 p-4 bg-white rounded-lg shadow-md'>
                <input
                    type='tel'
                    value={phoneNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPhoneNumber(e.target.value)
                    }
                    onSelect={(e: React.SyntheticEvent<HTMLInputElement>) =>
                        setCursorPosition(e.currentTarget.selectionStart || 0)
                    }
                    className='w-full mb-4 p-2 text-xl text-center border border-gray-300 rounded'
                />
                <div className='grid grid-cols-3 gap-2'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((digit) => (
                        <button
                            type='button'
                            key={digit}
                            onClick={() => addDigit(digit.toString())}
                            className='p-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                        >
                            {digit}
                        </button>
                    ))}
                    <button
                        type='button'
                        onClick={backspace}
                        className='p-2 bg-red-500 text-white rounded hover:bg-red-600'
                    >
                        ⌫
                    </button>
                </div>
                <div className='mt-4 flex justify-between'>
                    <Link to={`/calling/${phoneNumber}`} className='w-1/2 mr-2'>
                        <button
                            type='button'
                            className='w-full p-2 bg-green-500 text-white rounded hover:bg-green-600'
                        >
                            Call
                        </button>
                    </Link>
                    <Link to='/contacts' className='w-1/2 ml-2'>
                        <button
                            type='button'
                            className='w-full p-2 bg-gray-500 text-white rounded hover:bg-gray-600'
                        >
                            Contacts
                        </button>
                    </Link>
                    <Link
                        to={`/incoming/${Math.floor(Math.random() * 9000000000) + 1000000000}`}
                        className='w-1/2 mr-2'
                    >
                        <button
                            type='button'
                            className='w-full mt-2 p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600'
                        >
                            Simulate Incoming Call
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
