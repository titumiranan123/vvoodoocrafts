
import React, { useState } from 'react';
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import log from '../../assets/logo.png'

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
const Navbar = () => {

    const navitem = <>
        <a href="#" className="text-black">
            Home
        </a>
        <a href="#" className="text-black">
            About
        </a>
        <a href="#" className="text-black">
            Program
        </a>
        <a href="#" className="text-black">
            Service
        </a>
        <a href="#" className="text-black">
            Contact
        </a>
    </>
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };


    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <nav className=" z-40  fixed top-0 w-full  py-2 shadow-lg ">
            <div className='lg:flex hidden justify-around'>
                <div className=''>
                    <img src={log} className='w-20 h-20' alt="" />
                </div>
                <div className='flex justify-center items-center gap-5 text-white '>

                </div>
                <div>
                    <a to={'/'}>Account </a>
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
                    <FaShoppingCart className='text-2xl' />
                </motion.div>
            </div>
            {isNavOpen && <motion.div className='z-50 bg-slate-400'

                initial={{ x: 100, opacity: 0 }} // Start from the right (positive x)
                animate={{ x: 0, opacity: 1 }}

            >
                <div className='flex flex-col gap-4   items-center justify-center  p-10'>
                    {
                        navitem
                    }
                    <a to={'/'}>Account </a>
                </div>
            </motion.div>}
        </nav >
    );
};

export default Navbar;