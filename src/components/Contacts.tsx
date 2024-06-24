import { useState } from 'react';
import { Link } from 'react-router-dom';
type Contact = {
    id: number;
    name: string;
    phone: string;
    location?: string;
    avatar?: string;
};

export const Contacts: React.FC = () => {
    const [contacts, _setContacts] = useState<Contact[]>([
        { id: 1, name: 'John Doe', phone: '1234567890' },
        { id: 2, name: 'Jane Smith', phone: '0987654321' },
    ]);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div className='w-64 p-4 bg-white rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold mb-4 text-center'>
                    Contacts
                </h2>
                <ul className='mb-4'>
                    {contacts.map((contact) => (
                        <li
                            key={contact.id}
                            className='mb-2 p-2 bg-gray-100 rounded'
                        >
                            <p className='font-bold'>{contact.name}</p>
                            <p>{contact.phone}</p>
                        </li>
                    ))}
                </ul>
                <Link to='/' className='block'>
                    <button
                        type='button'
                        className='w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                    >
                        Back to Dialer
                    </button>
                </Link>
            </div>
        </div>
    );
};
