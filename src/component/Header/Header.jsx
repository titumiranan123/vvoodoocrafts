import { FaLock } from "react-icons/fa";
import header from '../../assets/HomeHeader-1024x854.png'

const Header = () => {
    return (
        <div className="mt-4 -z-20">
            <div className="header flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-5">
                <div className="lg:w-1/2 w-full flex justify-center  flex-col gap-5 ">
                    
                    <h3 className="font-semibold text-2xl ">design & handcrafted by vvoodoo</h3>
                    <h1 className="text-6xl text-[#4B4F58]">Handmade Leather <br /> Goods</h1>
                    <p>Here at vvoodoo we have a daily goal of challenging our <br /> skills with new ideas , techniques &designs so we can <br /> provide the best Leather Accessory  experience for you </p>
                    <button className="flex gap-2 bg-[#44484F] text-white py-2 px-4 rounded-lg w-52 "> ALL PRODUCTS <FaLock className="text-white" /></button>
                </div>
                <div className="lg:w-1/2 w-full ">
                    <img  src={header} alt="" />
                </div>

            </div>
        </div>

    )

}
export default Header;