
import { Outlet } from 'react-router-dom';
import dashbord from '../../src/assets/icon/Dashbord.svg'
import home from '../../src/assets/icon/home.svg'
import user from '../../src/assets/icon/user.svg'
import product from '../../src/assets/icon/product.svg'
import singup from '../../src/assets/icon/singup.svg'
import singin from '../../src/assets/icon/singin.svg'
import help from '../../src/assets/icon/help.svg'
import logo from '../../src/assets/Chamrabari_Logo.png'
import SearchInput from '../component/search/Search';
const navItem = <div className=' bg-opacity-60 h-screen'>
    <ul className="space-y-2 font-medium border-b-2 border-[#C94428] py-4">
        <li>
            <a href="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#C94428] hover:text-white dark:hover:bg-gray-700 group">
                <img src={dashbord} alt='' className='h-6 w-6' />
                <span className="ms-3">Dashboard</span>
            </a>
        </li>
        <li>
            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#C94428] hover:text-white dark:hover:bg-gray-700 group">
                <img src={home} alt='' className='h-6 w-6 ' />
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
            </a>
        </li>
        {/* <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#C94428] hover:text-white dark:hover:bg-gray-700 group">
                <img src={inbox} alt='' className='h-6 w-6' />
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>

            </a>
        </li> */}

        <li>
            <a href="/dashboard/products" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#C94428] hover:text-white dark:hover:bg-gray-700 group">
                <img src={product} alt='' className='h-6 w-6' />
                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
        </li>
        <li>
            <a href="/dashboard/users" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#C94428] hover:text-white dark:hover:bg-gray-700 group">
                <img src={user} alt='' className='h-6 w-6' />
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
        </li>
    </ul>
    <ul className="pt-4 mt-4 space-y-2 font-medium  dark:border-gray-700">

        <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#C94428] hover:text-white dark:hover:bg-gray-700 group">
                <img src={singin} alt='' className='h-6 w-6' />
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
        </li>
        <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#C94428] hover:text-white dark:hover:bg-gray-700 group">
                <img src={singup} alt='' className='h-8=6 w-6' />
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </a>
        </li>
        <li>
            <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-[#C94428] hover:text-white dark:hover:bg-gray-700 dark:text-white group">
                <img src={help} alt='' className='h-8=6 w-6' />
                <span className="ms-3">Help</span>
            </a>
        </li>
    </ul>
</div>

const Dashboardlayout = () => {
    return (
        <div className='lg:max-w-[1540px]  px-4  mx-auto '>
            <div className='flex justify-between pt-6 p-2 bg-white w-[1540px] box-border fixed top-0  items-center'>
                <div>
                    <img src={logo} className='img-fluid w-48' alt="" />
                </div>
                <div>
                    <SearchInput />
                </div>
                <div>
                    <img src={user} className='w-12 h-12 rounded-full bg-red-500 p-2' alt="" />
                </div>
            </div>
            <div className='flex gap-10 mt-20 '>
                <div className='  w-[20%]  h-screen mt-25 '>
                    {navItem}
                </div>
                <div className='w-[80%] drawer-content border-2 border-dashed'>

                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboardlayout;
