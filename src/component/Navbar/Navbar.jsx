import { useState } from 'react';
import { FaAngleDown, FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import log from '../../assets/Chamrabari_Logo.png';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isProductOpen, setProductOpen] = useState(false);
    const [isAccountOpen, setAccountOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const navItems = (
        <ul className="menu flex gap-2">
            <li className=""><a href="#">Home</a></li>

            <li className="group relative">
                <a
                    onMouseEnter={() => setProductOpen(!isProductOpen)}
                    onMouseLeave={() => setProductOpen(!isProductOpen)}
                    className='flex justify-center items-center gap-2'
                    href="#"
                >
                    All Products <FaAngleDown />
                </a>

                <ul
                    className={`account-contents bg-white  absolute top-8 border p-6 ${isProductOpen ? '' : 'hidden'}`}
                >
                    <li><a href="#">WALLET AND CART HOLDER</a></li>
                    <li><a href="#">BAG</a></li>
                    <li><a href="#">BELT</a></li>
                    <li><a href="#">ACCESSORY</a></li>
                    <li><a href="#">CASE</a></li>
                    <li><a href="#">HOLSTER & SHEATH</a></li>
                </ul>
            </li>
            <li className=""><a href="#">Blog</a></li>
            <li className=""><a href="#">About</a></li>
            <li className="dropdown" id="account">
                <a
                    onMouseEnter={() => setAccountOpen(!isAccountOpen)}
                    onMouseLeave={() => setAccountOpen(!isAccountOpen)}
                    className='flex justify-center items-center gap-2'
                    href="#"
                >
                    Account <FaAngleDown />
                </a>
                <div className={`account-contents ${isAccountOpen ? '' : 'hidden'}`}>
                    <ul className="categories bg-white absolute top-14 p-4">
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><a href="#">Whitelist</a></li>
                        <li><Link to={'/cart'}>Cart</Link></li>
                    </ul>
                </div>
            </li>
        </ul>
    );

    return (
        <nav className="z-40 w-full shadow-lg py-6 px-10">
            <div className='lg:flex hidden justify-between px-2 items-center'>
                <div className='w-48 overflow-hidden '>
                    <img src={log} className='img-fluid ' alt="" />
                </div>
                <div className='gap-5 text-white '>
                    {navItems}
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <Link to={'/cart'} className="relative">
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <FaShoppingCart className='text-2xl' />
                        </motion.div>
                        <span className="absolute -top-2 -right-4 bg-red-500 text-white text-[12px] rounded-full px-2">
                            20
                        </span>
                    </Link>
                </div>
            </div>
            <div className='lg:hidden w-full flex justify-between items-center'>
                <div className='w-48 overflow-hidden '>
                    <img src={log} className='img-fluid ' alt="" />
                </div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="menu-icon h-10 flex justify-center items-center w-10"
                    onClick={toggleNav}
                >
                    {isNavOpen ? <FaTimes className="spinning text-xl" /> : <FaBars className="spinning text-xl" />}
                </motion.div>
                <Link to={'/cart'}>
                    <motion.div
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="relative"
                        >
                            <FaShoppingCart className='text-2xl' />
                            <motion.span className="absolute -top-4 -right-4 bg-red-500 text-white md:text-sm text-[12px] rounded-full px-2">
                                20
                            </motion.span>
                        </motion.div>
                    </motion.div>
                </Link>
            </div>
            {isNavOpen && (
                <motion.div
                    className='z-50 w-full absolute right-0 bg-slate-200 overflow-y-scroll lg:hidden'
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    <div className=' '>
                        <ul className="menu flex flex-col gap-2 justify-center p-10 ">
                            <li className=""><a href="#">Home</a></li>
                            <li className="">
                                <a
                                    className='flex items-center '
                                    href="# "
                                    onClick={() => setProductOpen(!isProductOpen)}
                                >
                                    All Products <FaAngleDown />
                                </a>
                            </li>
                            <li className="dropdown" id="allProducts">
                                <div
                                    className={`flex flex-col gap-1 border bg-white p-4 ${!isProductOpen ? 'hidden' : ''}`}
                                >
                                    <ul className="categories ">
                                        <li className='text-sm'><a href="#">WALLET AND CART HOLDER</a></li>
                                        <li><a href="#">BAG</a></li>
                                        <li><a href="#">BELT</a></li>
                                        <li><a href="#">ACCESSORY</a></li>
                                        <li><a href="#">CASE</a></li>
                                        <li><a href="#">HOLSTER & SHEATH</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className=""><a href="#">Blog</a></li>
                            <li className=""><a href="#">About</a></li>
                            <li className="dropdown" id="account">
                                <a
                                    className='flex items-center gap-2'
                                    href="#"
                                    onClick={() => setAccountOpen(!isAccountOpen)}
                                >
                                    Account <FaAngleDown />
                                </a>
                                <div className={`flex flex-col ${!isAccountOpen ? 'hidden' : ''}`}>
                                    <ul className="categories border bg-white p-4">
                                        <li><Link to={'/login'}>Login</Link></li>
                                        <li><a href="#">Whitelist</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
