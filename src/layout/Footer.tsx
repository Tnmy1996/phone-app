import { Link } from 'react-router-dom';

import callToolbar from '../assets/icons/callToolbar.svg';
import chat from '../assets/icons/chat.svg';
import contact from '../assets/icons/contact.svg';
import home from '../assets/icons/home.svg';
import keypad from '../assets/icons/keypad.svg';

export const Footer: React.FC = () => {
    return (
        <div className='flex justify-center items-center bg-white'>
            <div className='w-96 pb-4 flex justify-around'>
                <Link to='/'>
                    <button
                        type='button'
                        className='flex flex-col justify-center items-center gap-2 w-9'
                    >
                        <img src={home} alt='home' className='h-5' />
                        <span className='text-xs text-[#A5A5A5]'>Home</span>
                    </button>
                </Link>
                <Link to='/'>
                    <button
                        type='button'
                        className='flex flex-col justify-center items-center gap-2 w-9'
                    >
                        <img src={chat} alt='chat' className='h-5' />
                        <span className='text-xs text-[#A5A5A5]'>Message</span>
                    </button>
                </Link>
                <Link to='/'>
                    <button
                        type='button'
                        className='flex flex-col justify-center items-center gap-2 w-9'
                    >
                        <img src={keypad} alt='dialler' className='h-5' />
                        <span className='text-xs text-[#A5A5A5]'>Keypad</span>
                    </button>
                </Link>
                <Link
                    to={`/incoming/+1-${Math.floor(Math.random() * 9000000000) + 1000000000}`}
                >
                    <button
                        type='button'
                        className='flex flex-col justify-center items-center gap-2 w-9'
                    >
                        <img src={callToolbar} alt='call' className='h-5' />
                        <span className='text-xs text-[#A5A5A5]'>Call</span>
                    </button>
                </Link>
                <Link to='/contacts'>
                    <button
                        type='button'
                        className='flex flex-col justify-center items-center gap-2 w-9'
                    >
                        <img src={contact} alt='contact' className='h-5' />
                        <span className='text-xs text-[#A5A5A5]'>Contact</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};
