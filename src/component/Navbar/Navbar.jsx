import { useContext, useState } from 'react';
import { FaAngleDown, FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import log from '../../assets/Chamrabari_Logo.png';
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'
import { Authcontext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isProductOpen, setProductOpen] = useState(false);
    const [isAccountOpen, setAccountOpen] = useState(false);
    const { user, logOut } = useContext(Authcontext);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    const navigate = useNavigate()
    const singout = () => {
        logOut()
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Logout successful',

                })
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                if (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',

                    })
                }
            })

    }

    const navItems = (
        <nav className='nav'>
            <ul className="flex justify-center gap-4 items-center relative w-full">
                <li className=""><a href="/">Home</a></li>
                <li className=" relative">
                    <a className='flex justify-center items-center gap-2' href="allproducts"> All Products <FaAngleDown /> </a>
                    <ul
                        className={`bg-white border p-6  submenu_1`}
                    >
                        <li className='hover-me ' >
                            <a href="#">Men</a>
                            <ul
                                className={`bg-white border p-6  submenus`}
                            >
                                <li><a href="#">Belt</a></li>
                                <li><a href="#">Card Holder </a></li>
                            </ul>
                        </li>
                        <li className='hover-me '>
                            <a href="#">Women</a>
                            <ul
                                className={`bg-white border p-6  submenus`}
                            >
                                <li><a href="#">Bra</a></li>
                                <li><a href="#">Women</a></li>
                            </ul>
                        </li>
                        <li className='hover-me '>
                            <a href="#">Children</a>
                            <ul
                                className={`bg-white border p-6  submenus`}
                            >
                                <li><a href="#">children</a></li>
                                <li><a href="#">Women</a></li>
                            </ul>
                        </li>
                        <li className='hover-me '>
                            <a href="#">Corporate </a>
                            <ul
                                className={`bg-white border p-6  submenus`}
                            >
                                <li><a href="#">Corporate</a></li>
                                <li><a href="#">Women</a></li>
                            </ul>
                        </li>

                    </ul>
                </li>
                <li className=""><a href="#">Blog</a></li>
                <li className=""><a href="#">About</a></li>

            </ul>
        </nav>
    );

    return (
        <nav className="z-40 w-full shadow-lg py-6 px-6">
            <div className='lg:flex hidden justify-between px-2 items-center'>
                <div className='w-48 overflow-hidden '>
                    <img src={log} className='img-fluid ' alt="" />
                </div>
                <div className=' '>
                    {navItems}
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <Link to={'/cart'} className="relative">
                        <button className="btn">
                            <span className='text-lg'> <FaShoppingCart className='text-2xl' /></span>
                            <div className="badge badge-secondary">+99</div>
                        </button>
                    </Link>
                    {
                        !user ?
                            <>
                                <Link to='/login'>Login</Link>
                                <span className='text-lg'>&#47;</span>
                                <Link to='/singup'>Singup</Link>
                            </>
                            : <>
                                <button onClick={singout}>Log out</button>
                            </>
                    }
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
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative  hidden md:flex items-center justify-center"
                >
                    <Link to={'/cart'} className="relative">
                        <button className="btn">
                            <span className='text-lg'> <FaShoppingCart className='text-2xl' /></span>
                            <div className="badge badge-secondary">+99</div>
                        </button>
                    </Link>
                    {
                        !user ?
                            <>
                                <Link to='/login'>Login</Link>
                                <span className='text-lg'>&#47;</span>
                                <Link to='/singup'>Singup</Link>
                            </>
                            : <>
                                <button onClick={singout}>Log out</button>
                            </>
                    }
                </motion.div>
            </div>
            {isNavOpen && (
                <motion.div
                    className='z-50 w-full absolute right-0 bg-slate-200 overflow-y-scroll lg:hidden'
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    <div className=' '>
                        <ul className="menu flex flex-col gap-2 justify-center p-10 ">
                            <li className=""><a href="/">Home</a></li>
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
                                    <ul className=" border  bg-white p-4">
                                        <Link to={'/cart'} className="relative">
                                            <button className="btn">
                                                <span className='text-lg'> <FaShoppingCart className='text-2xl' /></span>
                                                <div className="badge badge-secondary">+99</div>
                                            </button>
                                        </Link>
                                        {
                                            !user ?
                                                <>
                                                    <Link to='/login'>Login</Link>
                                                    <span className='text-lg'>&#47;</span>
                                                    <Link to='/singup'>Singup</Link>
                                                </>
                                                : <>
                                                    <button onClick={singout}>Log out</button>
                                                </>
                                        }

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
