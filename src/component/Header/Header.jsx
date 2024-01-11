import { FaLock } from "react-icons/fa";
import header from '../../assets/headerImage.jpg'
const Header = () => {
    return (
        <div className=" md:px-6 -z-20 md:h-[940px] lg:h-[500px] md:mt-0 mt-10 flex justify-center items-center">
            <div className="header flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-5">
                <div className="lg:w-1/2 w-full flex justify-center  flex-col gap-5 ">
                    <h3 className="font-semibold text-2xl ">Design & Dandcrafted by Chamrabari</h3>
                    <h1 className="text-6xl text-[#4B4F58]">Handmade Leather <br /> Goods</h1>
                    <p>Chamrabari is a place where the timeless artistry of leather craftsmanship  meets your <br /> personal style. It&apos;s a place where leather becomes more than just a material; it  transforms <br /> into bonding of love with an expression of individuality and luxury.</p>

                    <button className="flex gap-2 bg-[#C94428] text-white py-2 px-4 rounded-lg w-52 "> ALL PRODUCTS <FaLock className="text-white" /></button>
                </div>
                <div className="lg:w-1/2 w-full ">
                    <img className="img-fluid" src={header} alt="" />
                </div>
            </div>
        </div>

    )

}
export default Header;