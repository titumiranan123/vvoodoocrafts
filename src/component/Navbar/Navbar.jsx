import { useContext, useState } from 'react';
import { FaAngleDown, FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import log from '../../assets/Chamrabari_Logo.png';
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './navbar.css'
import { Authcontext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../hook/useCart';
const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isProductOpen, setProductOpen] = useState(false);
    const [isMen, setMen] = useState(false);
    const [isWomen, setWomen] = useState(false);
    const [isChildren, setChildren] = useState(false);
    const [isUnisex, setUnisex] = useState(false);
    const [data] = useCart()
    const { user, logOut } = useContext(Authcontext);
    const router = useLocation()

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    const navigate = useNavigate()
    const singout = () => {
        logOut()
            .then(res => {
                localStorage.removeItem('access_token')
                location.reload()
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
    const CustomLink = ({ href, className, title }) => {
        const isActive = router.pathname === href
        return (<Link className={` flex justify-center items-center ${className}${isActive && ' h-[30px] rounded-[30px] w-[89px] bg-white text-black px-5  py-2'}`} to={href}>
            {title}
        </Link>)
    }
    const navItems = (
        <nav className='nav'>
            <ul className="flex justify-center gap-4 items-center relative w-full">
                <li className=""><CustomLink href={'/'} title={'Home'} /></li>
                <li className=""><a href="#">About</a></li>
                <li className=" relative">

                    <a className='flex justify-center items-center gap-2' href="/shop/allproduct"> All Products <FaAngleDown /> </a>
                    <ul
                        className={`bg-white border p-6  submenu_1`}
                    >
                        <li className='hover-me ' >
                            <a href="">Men</a>
                            <ul
                                className={`bg-white border p-6  submenus`}
                            >
                                <li><a href="/shop/category/men/belt">Belt</a></li>
                                <li><a href="/shop/category/men/sandal">Sandal </a></li>
                                <li><a href="/shop/category/men/loafer">Loafer</a></li>
                                <li><a href="/shop/category/men/half_shoe">Half shoe</a></li>
                                <li><a href="shoe">Shoe </a></li>
                            </ul>
                        </li>
                        <li className='hover-me '>
                            <a href="#">Women</a>
                            <ul
                                className={`bg-white border p-6  submenus`}
                            >
                                <li><a href="/shop/category/men/belt">Belt </a></li>
                                <li><a href="/shop/category/men/purse">Purse</a></li>
                                <li><a href="/shop/category/men/hand_bag">Hand Bag </a></li>
                                <li><a href="/shop/category/men/sandal">Sandal  </a></li>
                                <li><a href="/shop/category/men/shoe">shoe </a></li>
                            </ul>

                        </li>
                        <li className='hover-me '>
                            <a href="#">Children</a>
                            <ul
                                className={`bg-white border p-6  submenus`}
                            >
                                <li><a href="/shop/category/men/belt">Belt</a></li>
                                <li><a href="/shop/category/men/belt">Sandal </a></li>
                                <li><a href="/shop/category/men/belt">Shoe </a></li>
                            </ul>
                        </li>
                        <li className='hover-me '>
                            <a href="#">Unisex </a>
                            <ul
                                className={`bg-white border p-6  submenus`}
                            >
                                <li><a href="#">Wallet</a></li>
                                <li><a href="#">Mobile wallet</a></li>
                                <li><a href="#">Card Holder</a></li>
                                <li><a href="#">Key Ring</a></li>
                                <li><a href="#">Laptop Cover</a></li>
                                <li><a href="#">Jacket</a></li>
                                <li><a href="#">Side Bag</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Gift Box</a></li>

                    </ul>
                </li>
                <li className=""><a href="#">Blog</a></li>
                <li className=""><a href="/dashboard">Dashboard</a></li>


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
                            <div className="badge text-white bg-[#C94428]">{data ? <>{data.length}</> : <>0</>}</div>
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
                            <div className="badge bg-[#C94428]">{data ? <>{data.length}</> : <>0</>}</div>
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
                    className='z-50 w-full absolute right-0 bg-white overflow-y-scroll lg:hidden'
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    <div className=' '>
                        <ul className="menu flex flex-col gap-2  p-10 ">
                            <li className=""><a href="/">Home</a></li>
                            <li className=""><a href="#">About</a></li>
                            <li className="">
                                <a
                                    className='flex items-center '
                                    href="/shop/allproduct"
                                    onClick={() => setProductOpen(!isProductOpen)}
                                >
                                    All Products <FaAngleDown />
                                </a>
                            </li>
                            <li id="allProducts">
                                <div
                                    className={`flex flex-col gap-1 border bg-white p-4 ${!isProductOpen ? 'hidden' : ''}`}
                                >
                                    <ul className="categories ">
                                        <li className='text-sm'>
                                            <a onClick={() => setMen(!isMen)} href="/category/men">Men</a>
                                            <div
                                                className={`flex flex-col gap-1 border bg-white p-4 ${!isMen ? 'hidden' : ''}`}
                                            >
                                                <ul
                                                    className={`bg-white border p-6  `}
                                                >
                                                    <li><a href="#">Belt</a></li>
                                                    <li><a href="#">Sandal </a></li>
                                                    <li><a href="#">Loafer</a></li>
                                                    <li><a href="#">Half shoe</a></li>
                                                    <li><a href="#">Shoe </a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a onClick={() => setWomen(!isWomen)} href="#">Women</a>
                                            <div
                                                className={`flex flex-col gap-1 border bg-white p-4 ${!isWomen ? 'hidden' : ''}`}
                                            >
                                                <ul
                                                    className={`bg-white border p-6  `}
                                                >
                                                    <li><a href="#">Belt </a></li>
                                                    <li><a href="#">Purse</a></li>
                                                    <li><a href="#">Hand Bag </a></li>
                                                    <li><a href="#">Sandal  </a></li>
                                                    <li><a href="#">shoe </a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a onClick={() => setChildren(!isChildren)} href="#">Children</a>
                                            <div
                                                className={`flex flex-col gap-1 border bg-white p-4 ${!isChildren ? 'hidden' : ''}`}
                                            >
                                                <li><a href="#">Belt</a></li>
                                                <li><a href="#">Sandal </a></li>
                                                <li><a href="#">Shoe </a></li>
                                            </div>
                                        </li>
                                        <li>
                                            <a onClick={() => setUnisex(!isUnisex)} href="#">Unisex</a>
                                            <div
                                                className={`flex flex-col gap-1 border bg-white p-4 ${!isUnisex ? 'hidden' : ''}`}
                                            >
                                                <ul
                                                    className={`bg-white border p-6  `}
                                                >
                                                    <li><a href="#">Wallet</a></li>
                                                    <li><a href="#">Mobile wallet</a></li>
                                                    <li><a href="#">Card Holder</a></li>
                                                    <li><a href="#">Key Ring</a></li>
                                                    <li><a href="#">Laptop Cover</a></li>
                                                    <li><a href="#">Jacket</a></li>
                                                    <li><a href="#">Side Bag</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#">Gift Box</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className=""><a href="#">Blog</a></li>


                        </ul>

                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
