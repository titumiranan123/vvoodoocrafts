
import { FaInstagram, FaPhone, FaPinterest, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <footer className="mt-10 flex justify-center items-center flex-col">
            <div className="footer flex flex-col justify-center items-center space-y-8">
                <img src={logo} alt="" />
                <div>
                    <h2 className='text-lg hover:underline'>Quick Links</h2>
                </div>
                <div className="social_link flex justify-center items-center flex-wrap lg:flex-nowrap md:flex-nowrap gap-7">
                    <div className='flex justify-center items-center gap-4'><FaInstagram /> <span>Instagram</span></div>
                    <div className='flex justify-center items-center gap-4 '><FaWhatsapp /><span>WhatsApp</span></div>
                    <div className='flex justify-center items-center gap-4 '> <span className='flex justify-center items-center gap-4 '> <AiOutlineMail /> Email</span></div>
                    <div className='flex justify-center items-center gap-4 '> <FaPhone /> <span>Phone</span></div>
                    <div className='flex justify-center items-center gap-4 '><FaPinterest />  <span>Pinterest</span> </div>
                    <div className='flex justify-center items-center gap-4 '><FaTelegram />  <span>Telegram</span></div>
                </div>
                
                <div className='grid grid-cols-1 gap-10  md:grid-cols-2 md:gap-20' >
                <div className='flex flex-col justify-center items-center gap-1'>
                    <p>FAQ</p>
                    <p>Refund & Contact Us</p>
                </div>
                
                <div className='flex flex-col justify-center items-center gap-1'>
                    <p>Privacy Policy</p>
                    <p>Shipping & Payment</p>
                    <p>Terms & Condition</p>
                </div>
                </div>

            </div>
            <div className="text-sm mt-10 flex flex-col justify-center items-center">
                <p>Copyright 2023 <span className="vertical_line">

                </span> vvoodoo Handmade Leather Goods</p>
                <p>All Right</p>
            </div>
        </footer>
    );
};

export default Footer;