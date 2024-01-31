import { useContext, useState } from 'react';
import { FaAngleDown, FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import log from '../../assets/Chamrabari_Logo.png';
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './navbar.css'
import { Authcontext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../hook/useCart';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/userSlice';
const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isProductOpen, setProductOpen] = useState(false);
    const [isMen, setMen] = useState(false);
    const [isWomen, setWomen] = useState(false);
    const [isChildren, setChildren] = useState(false);
    const [isUnisex, setUnisex] = useState(false);
    const [data] = useCart()
    const { logOut } = useContext(Authcontext);
    const manuluser = useSelector(state => state.user.user)
    const router = useLocation()
    const dispatch = useDispatch()

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    const navigate = useNavigate()
    const singout = () => {
        logOut()
            .then(res => {
                dispatch(logout())
                Swal.fire({
                    icon: 'success',
                    title: 'Logout successful',
                })
                console.log(res)
                navigate('/')
            })
            .catch(err => {
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
                <li className=""><a href="about">About</a></li>
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
                                <li><a href="/shop/category/men/loffer">Loffer</a></li>
                                <li><a href="/shop/category/men/half-shoe">Half shoe</a></li>
                                <li><a href="/shop/category/men/shoe">Shoe </a></li>
                            </ul>
                        </li>
                        <li className='hover-me '>
                            <a href="#">Women</a>
                            <ul
                                className={`bg-white border p-6  submenus`}
                            >
                                <li><a href="/shop/category/women/belt">Belt </a></li>
                                <li><a href="/shop/category/women/purse">Purse</a></li>
                                <li><a href="/shop/category/women/hand-bag">Hand Bag </a></li>
                                <li><a href="/shop/category/women/sandal">Sandal  </a></li>
                                <li><a href="/shop/category/women/shoe">shoe </a></li>
                            </ul>

                        </li>
                        <li className='hover-me '>
                            <a href="#">Children</a>
                            <ul
                                className={`bg-white border p-6  submenus`}
                            >
                                <li><a href="/shop/category/children/belt">Belt</a></li>
                                <li><a href="/shop/category/children/sandal">Sandal </a></li>
                                <li><a href="/shop/category/children/shoe">Shoe </a></li>
                            </ul>
                        </li>
                        <li className='hover-me '>
                            <a href="#">Unisex </a>
                            <ul
                                className={`bg-white border p-6  submenus`}
                            >
                                <li><a href="/shop/category/children/wallet">Wallet</a></li>
                                <li><a href="/shop/category/children/mobile-wallet">Mobile wallet</a></li>
                                <li><a href="/shop/category/children/card-holder">Card Holder</a></li>
                                <li><a href="/shop/category/children/key-ring">Key Ring</a></li>
                                <li><a href="/shop/category/children/laptop-cover">Laptop Cover</a></li>
                                <li><a href="/shop/category/children/jacket">Jacket</a></li>
                                <li><a href="/shop/category/children/side-bag">Side Bag</a></li>
                            </ul>
                        </li>
                        <li><a href="/shop/category/children/gift">Gift Box</a></li>
                    </ul>
                </li>
                <li className=""><a href="/blog">Blog</a></li>
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
                        !manuluser ?
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
                            <div className="badge text-white bg-[#C94428]">{data ? <>{data.length}</> : <>0</>}</div>
                        </button>
                    </Link>
                    {
                        !manuluser ?
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
                    className='z-50 w-full p-5 absolute right-0 bg-[#C94428] text-white md:text-[#4B4F58] md:bg-white overflow-y-scroll lg:hidden'
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    <div className=' '>
                        <div className="menu flex flex-col gap-5  p-10 ">
                            <div><Link to={'/'} className='text-[16px] font-[600]'>Home</Link></div>
                            <div className='text-[16px] font-[600]'><Link to={'/about'}>
                                About
                            </Link></div>
                            <div className="">
                                <Link
                                    className='flex items-center text-[16px] font-[600]'
                                    onClick={() => setProductOpen(!isProductOpen)}
                                >
                                    All Products <FaAngleDown />
                                </Link>
                            </div>
                            <div id="allProducts" className='-mt-5'>
                                <div
                                    className={`flex flex-col gap-1 border md:bg-white bg-[#C94428]  p-4 ${!isProductOpen ? 'hidden' : ''}`}
                                >
                                    <div className="categories flex flex-col gap-5 ">
                                        <div >
                                            <Link className='text-[16px] font-[500]' onClick={() => setMen(!isMen)} >Men</Link>
                                            <div
                                                className={`flex flex-col gap-1 border md:bg-white bg-[#C94428]  p-4 ${!isMen ? 'hidden' : ''}`}
                                            >
                                                <ul
                                                    className={`md:bg-white bg-[#C94428] flex gap-3 flex-col border p-6 text-[16px]`}
                                                >
                                                    <li><Link to="/shop/category/men/belt">Belt</Link></li>
                                                    <li><Link to="/shop/category/men/sandal">Sandal </Link></li>
                                                    <li><Link to="/shop/category/men/loffer">Loffer</Link></li>
                                                    <li><Link to="/shop/category/men/half-shoe">Half shoe</Link></li>
                                                    <li><Link to="/shop/category/men/shoe">Shoe </Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='text-[16px] md:bg-white bg-[#C94428]  font-[500]'>
                                            <Link onClick={() => setWomen(!isWomen)} >Women</Link>
                                            <div
                                                className={`flex flex-col gap-1 border md:bg-white bg-[#C94428]  p-4 ${!isWomen ? 'hidden' : ''}`}
                                            >
                                                <ul
                                                    className={`md:bg-white bg-[#C94428]  border p-6  `}
                                                >
                                                    <li><Link to="/shop/category/women/belt">Belt </Link></li>
                                                    <li><Link to="/shop/category/women/purse">Purse</Link></li>
                                                    <li><Link to="/shop/category/women/hand-bag">Hand Bag </Link></li>
                                                    <li><Link to="/shop/category/women/sandal">Sandal  </Link></li>
                                                    <li><Link to="/shop/category/women/shoe">shoe </Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='text-[16px] font-[500]'>
                                            <Link onClick={() => setChildren(!isChildren)} >Children</Link>
                                            <ul
                                                className={`flex flex-col gap-1 border  md:bg-white bg-[#C94428] p-4 ${!isChildren ? 'hidden' : ''}`}
                                            >
                                                <li><Link to="/shop/category/children/belt">Belt</Link></li>
                                                <li><Link to="/shop/category/children/sandal">Sandal </Link></li>
                                                <li><Link to="/shop/category/children/shoe">Shoe </Link></li>
                                            </ul>
                                        </div>
                                        <div className='text-[16px] font-[500]'>
                                            <Link onClick={() => setUnisex(!isUnisex)} >Unisex</Link>
                                            <div
                                                className={`flex flex-col gap-1 border  md:bg-white bg-[#C94428] p-4 ${!isUnisex ? 'hidden' : ''}`}
                                            >
                                                <ul
                                                    className={` md:bg-white bg-[#C94428] border p-6  `}
                                                >
                                                    <li><Link to="/shop/category/children/wallet">Wallet</Link></li>
                                                    <li><Link to="/shop/category/children/mobile-wallet">Mobile wallet</Link></li>
                                                    <li><Link to="/shop/category/children/card-holder">Card Holder</Link></li>
                                                    <li><Link to="/shop/category/children/key-ring">Key Ring</Link></li>
                                                    <li><Link to="/shop/category/children/laptop-cover">Laptop Cover</Link></li>
                                                    <li><Link to="/shop/category/children/jacket">Jacket</Link></li>
                                                    <li><Link to="/shop/category/children/side-bag">Side Bag</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='text-[16px] font-[500]'><Link to="#">Gift Box</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[16px] font-[600]"><Link to="#">Blog</Link></div>
                        </div>
                        <motion.div
                            className="relative flex gap-5  md:hidden items-center ms-9"
                        >

                            {
                                !manuluser ?
                                    <>
                                        <Link className='btn' to='/login'>Login</Link>
                                        <span className='text-lg'> &#47;</span>
                                        <Link className='btn' to='/singup'>Singup</Link>
                                    </>
                                    : <div className='flex items-center gap-5'>
                                        <Link to={'/cart'} className="relative">
                                            <button className="btn">
                                                <span className='text-lg'> <FaShoppingCart className='text-2xl' /></span>
                                                <div className="badge text-white bg-[#C94428]">{data ? <>{data.length}</> : <>0</>}</div>
                                            </button>
                                        </Link>
                                        <button onClick={singout} className='btn'>Log out</button>
                                    </div>
                            }
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
