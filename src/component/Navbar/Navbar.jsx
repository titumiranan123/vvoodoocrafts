
import { useEffect, useState } from 'react';
import { FaAngleDown, FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import log from '../../assets/logo.png'
import './Navbar.css';
import { motion } from "framer-motion";

const Navbar = () => {
    useEffect(() => {
        // JavaScript for handling dropdown menu on hover
        const allProducts = document.getElementById("allProducts");
        const dropdownContent = allProducts.querySelector(".dropdown-content");
        allProducts.addEventListener("mouseover", () => {
            dropdownContent.style.display = "block";
        });

        allProducts.addEventListener("mouseout", () => {
            dropdownContent.style.display = "none";
        });
        // for account 
        const account = document.getElementById("account");
        const dropdownAccountContent = account.querySelector(".account-contents"); // Use . for class or # for ID

        account.addEventListener("mouseover", () => {
            dropdownAccountContent.style.display = "block";
        });
        account.addEventListener("mouseout", () => {
            dropdownAccountContent.style.display = "none";
        });
    }, [])
    const navitem = <>
        <ul className="menu">
            <li className="menu-item"><a href="#">Home</a></li>
            <li className="menu-item dropdown" id="allProducts">
                <a className='flex justify-center items-center gap-2' href="#">All Products <FaAngleDown /> </a>
                <div className="dropdown-content">
                    <ul className="categories">
                        <li><a href="#">WALLET AND CART HOLDER</a></li>
                        <li><a href="#">BAG</a></li>
                        <li><a href="#">BELT</a></li>
                        <li><a href="#">ACCESSORY</a></li>
                        <li><a href="#">CASE</a></li>
                        <li><a href="#">HOLSTER & SHEATH</a></li>
                    </ul>
                </div>
            </li>
            <li className="menu-item"><a href="#">Blog</a></li>
            <li className="menu-item"><a href="#">About</a></li>
            <li className="menu-item dropdown" id="account">
                <a className='flex justify-center items-center gap-2' href="#">Account <FaAngleDown /> </a>
                <div className="account-contents">
                    <ul className="categories">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Whitelist</a></li>
                        <li><a href="#">Cart
                        </a></li>

                    </ul>
                </div>
            </li>

        </ul>
    </>
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isProductopen, setProductOpen] = useState(false)
    const [isAccountopen, setAccountOpen] = useState(false)
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <nav className="z-40  w-full  py-2  lg:px-4 px-2'">
            <div className='lg:flex hidden justify-between lg:px-4 px-2'>
                <div className=''>
                    <img src={log} className='w-40 h-20' alt="" />
                </div>
                <div className='flex justify-center items-center gap-5 text-white '>
                    {navitem}
                </div>
                <div className='flex justify-center items-center gap-5'>

                    <div className="relative">
                        <FaShoppingCart className='text-4xl' />

                        <span className="absolute -top-2 -right-4 bg-red-500 text-white text-sm rounded-full px-2">
                            20
                        </span>

                    </div>
                </div>
            </div>
            <div className='lg:hidden w-full flex justify-around items-center'>
                <div className=''>
                    <img src={log} className='w-14 h-14' alt="" />
                </div>
                <div className="menu-icon h-10 flex justify-center items-center w-10 bg-[#20BD40]" onClick={toggleNav}>
                    {isNavOpen ? <FaTimes className="spinning bg-[#20BD40] text-xl " /> : <FaBars className="spinning bg-[#20BD40] text-xl " />}
                </div>
                <motion.div
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                >
                    <div className="relative">
                        <FaShoppingCart className='text-4xl' />

                        <span className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full px-2">
                            20
                        </span>

                    </div>

                </motion.div>
            </div>
            {isNavOpen && <motion.div className='z-50 bg-slate-200 overflow-y-scroll'

                initial={{ x: 100, opacity: 0 }} // Start from the right (positive x)
                animate={{ x: 0, opacity: 1 }}

            >
                <div className=''>
                    <ul className="menu flex flex-col gap-4   items-center justify-center  p-10 ">
                        <li className="menu-item"><a href="#">Home</a></li>
                        <li className="menu-item dropdown" id="allProducts">
                            <a className='flex justify-center items-center gap-2' href="# " onClick={() => setProductOpen(!isProductopen)}>All Products <FaAngleDown /> </a>
                            <div className={`flex flex-col gap-3 ${!isProductopen ? 'hidden' : ''}`}>
                                <ul className="categories text-lg">
                                    <li className='text-sm'><a href="#">WALLET AND CART HOLDER</a></li>
                                    <li><a href="#">BAG</a></li>
                                    <li><a href="#">BELT</a></li>
                                    <li><a href="#">ACCESSORY</a></li>
                                    <li><a href="#">CASE</a></li>
                                    <li><a href="#">HOLSTER & SHEATH</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu-item"><a href="#">Blog</a></li>
                        <li className="menu-item"><a href="#">About</a></li>
                        <li className="menu-item dropdown" id="account">
                            <a className='flex justify-center items-center gap-2' href="#" onClick={() => setAccountOpen(!isAccountopen)} >Account <FaAngleDown /> </a>
                            <div className={`flex flex-col ${!isAccountopen ? "hidden" : ''}`}>
                                <ul className="categories ">
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">Whitelist</a></li>
                                    <li><a href="#">Cart
                                    </a></li>

                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>
            </motion.div>}
        </nav >
    );
};

export default Navbar;