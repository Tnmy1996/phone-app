import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Footer } from '../layout/Footer';
import { CustomButton, NumberPad } from '.';

import backspaceIcon from '../assets/icons/backspace.svg';
import call from '../assets/icons/call.svg';
import callBlack from '../assets/icons/callBlack.svg';
import contact from '../assets/icons/contact.svg';
import expand from '../assets/icons/expand.svg';
import history from '../assets/icons/history.svg';
import phone from '../assets/icons/phone.svg';
import usa from '../assets/images/usa.png';

export const Dialer: React.FC = () => {
    const navigate = useNavigate();

    const [phoneNumber, setPhoneNumber] = useState<string>('+1');

    const inputRef = useRef(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        value = `+1${value.slice(2).replace(/\D/g, '')}`;

        if (value.length > 2) {
            value = `+1-${value.slice(2)}`;
        }

        setPhoneNumber(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (
            e.key === 'Backspace' &&
            (phoneNumber === '+1' || phoneNumber === '+1-')
        ) {
            e.preventDefault();
        }
    };

    const handleFocus = () => {
        if (phoneNumber === '+1') {
            inputRef.current.setSelectionRange(2, 2);
        }
    };

    const addDigit = (digit: string): void => {
        setPhoneNumber((prevNumber) => {
            if (prevNumber.length <= 2) {
                return `+1-${digit}`;
            }
            return `${prevNumber}${digit}`;
        });
    };

    const backspace = (): void => {
        setPhoneNumber((prevNumber) => {
            if (prevNumber.length <= 2) {
                return prevNumber;
            }
            return `${prevNumber.slice(0, -1)}`;
        });
    };

    const makeCall = () => {
        if (phoneNumber.length <= 6) {
            return;
        }
        navigate(`/calling/${phoneNumber}`);
    };

    return (
        <div className='flex flex-col items-center justify-center bg-gray-100'>
            <div className='w-96 h-[738px] p-4 bg-white'>
                <button
                    type='button'
                    className='bg-[#383838] rounded-md block ml-auto mb-5'
                >
                    <span className='flex gap-2 mx-3 my-1.5 text-white text-sm'>
                        <img src={phone} alt='phone-icon' className='w-4' />
                        Get a Number
                    </span>
                </button>
                <div className='flex justify-center items-center'>
                    <button
                        type='button'
                        className='flex justify-center items-center gap-2 border border-[#DBDBDB] rounded-lg px-2 py-1'
                    >
                        <div className='relative w-5 h-5 overflow-hidden rounded-full'>
                            <img
                                src={usa}
                                alt='usa'
                                className='absolute w-full h-full object-cover object-center scale-150'
                            />
                        </div>
                        <img src={expand} alt='expand' />
                    </button>
                    <input
                        ref={inputRef}
                        type='tel'
                        value={phoneNumber}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onFocus={handleFocus}
                        placeholder='+1'
                        className='w-3/5 p-2 text-xl text-center focus:outline-none grow'
                    />
                    <button type='button' onClick={backspace}>
                        <img src={backspaceIcon} alt='backspace' />
                    </button>
                </div>
                <div className='flex justify-center items-center mb-4'>
                    <button type='button' className='text-[#57B100] my-1'>
                        Add to contact
                    </button>
                </div>
                <NumberPad onClickHandler={addDigit} />
                <div className='grid grid-cols-3 gap-5 mt-5'>
                    <CustomButton
                        config={{
                            type: 'action',
                            icon: history,
                            subKey: 'History',
                            onClickHandler: () => {},
                            backGroundColour: '#F5F5F5',
                        }}
                    />
                    <CustomButton
                        config={{
                            type: 'action',
                            icon: phoneNumber.length > 6 ? callBlack : call,
                            onClickHandler: makeCall,
                            backGroundColour:
                                phoneNumber.length > 6 ? '#B9FF66' : '#E9FFC7',
                        }}
                    />
                    <Link to='/contacts'>
                        <CustomButton
                            config={{
                                type: 'action',
                                icon: contact,
                                subKey: 'Contact',
                                onClickHandler: () => {},
                                backGroundColour: '#F5F5F5',
                            }}
                        />
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};
