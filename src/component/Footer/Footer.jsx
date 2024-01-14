
import { FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import logo from '../../assets/Chamrabari_Logo.png'
const Footer = () => {
    return (
        <footer className="mt-10 flex justify-center items-center flex-col bg-slate-300 p-10">
            <div className="product_tag_container text-sm lg:text-[12px]">
                <button className="py-2  px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300"> Accordion</button>
                <button className="py-2 px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300"> Apple</button>
                <button className="py-2 px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300"> Apple Watch</button>
                <button className="py-2 px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300"> Belt Attach </button>
                <button className="py-2 px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300"> Bifold Wallet</button>
                <button className="py-2 px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300">Camping</button>
                <button className="py-2 px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300">Card Wallet</button>
                <button className="py-2 px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300">Classic</button>
                <button className="py-2 px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300">Crossbody</button>
                <button className="py-2 px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300">digital</button>

                <button className="py-2 px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300">Economy</button>
                <button className="py-2 px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300">For Tools</button>
                <button className="py-2 px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300">Jewelry</button>
                <button className="py-2 px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300">Large Wallet</button>
                <button className="py-2 px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300">Lighter Case</button>
                <button className="py-2 px-2 border ms-2 mt-2 hover:bg-[#44484F] hover:text-white transition-all duration-300">Long Wallet</button>

            </div>
            <div className="footer flex flex-col mt-10 justify-center items-center gap-5">
                <img className='w-64 ' src={logo} alt="" />

                <div className="social_link flex justify-center items-center flex-wrap lg:flex-nowrap md:flex-nowrap gap-5">
                    <div className='flex justify-center items-center gap-2 text-black'>FAQ</div>
                    <div className='flex justify-center items-center gap-2'><FaInstagram /> <span>Instagram</span></div>
                    <div className='flex justify-center items-center gap-2 '><FaWhatsapp /><span>WhatsApp</span></div>
                    <div className='flex justify-center items-center gap-2 '> <span className='flex justify-center items-center gap-2 '> <AiOutlineMail /> Email</span></div>
                    <div className='flex justify-center items-center gap-2 '> <FaPhone /> <span>Phone</span></div>
                </div>
                <div className='flex justify-center items-center -mt-2 gap-2 md:flex-nowrap flex-wrap' >
                    <p className='hover:underline'>Refund Policy</p>
                    <p className='hover:underline'>Privacy Policy</p>
                    <p className='hover:underline'>Shipping & Payment </p>
                    <p className='hover:underline'>Terms & Conditions</p>

                </div>
            </div>
            <div className="text-sm mt-4 flex flex-col justify-center items-center">
                <p>Copyright 2023 @ <span className="vertical_line">
                </span> | Chamrabari Born in Bangladesh </p>
                <p>All Rights Reserved </p>
            </div>
        </footer>
    );
};

export default Footer;