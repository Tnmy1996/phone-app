import { Outlet } from 'react-router-dom';
import statusBar from '../assets/icons/statusBar.svg';

export const Layout: React.FC = () => {
    return (
        <div>
            <div>
                <img
                    src={statusBar}
                    alt='status bar'
                    className='w-full h-[44px]'
                />
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    );
};
