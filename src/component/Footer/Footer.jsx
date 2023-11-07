
import { FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import logo from '../../assets/Chamrabari_Logo.png'
const Footer = () => {
    return (
        <footer className="mt-10 flex justify-center items-center flex-col bg-slate-300 p-10">
            <div className="footer flex flex-col justify-center items-center gap-5">
                <img className='w-64 ' src={logo} alt="" />
                <div className='mt-5'>
                    <h2 className='text-lg hover:underline'>Contact Us </h2>
                </div>
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
            <div className="text-sm mt-10 flex flex-col justify-center items-center">
                <p>Copyright 2023 @ <span className="vertical_line">
                </span> | Chamrabari Born in Bangladesh </p>
                <p>All Rights Reserved </p>
            </div>
        </footer>
    );
};

export default Footer;