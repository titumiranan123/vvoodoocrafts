import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar';


const Main = () => {
    return (
        <div className='lg:max-w-[1440px] mx-auto px-4'>
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;