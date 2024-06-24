import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dialer, CallingScreen, Contacts } from './components';
import './index.css';
import IncomingCallScreen from './components/IncomingCallScreen';

const root = document.getElementById('root');

if (!root) {
    throw new Error('Root element not found');
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dialer />,
    },
    {
        path: '/calling/:phoneNumber',
        element: <CallingScreen />,
    },
    {
        path: '/contacts',
        element: <Contacts />,
    },
    {
        path: '/incoming/:phoneNumber',
        element: <IncomingCallScreen />,
    },
]);

createRoot(root).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
