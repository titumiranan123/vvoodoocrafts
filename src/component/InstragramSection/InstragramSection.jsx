import { FaComment, FaHeart, FaInstagram } from 'react-icons/fa'
import insta_1 from '../../assets/insta-shoping-1.jpg'
import insta_2 from '../../assets/insta-shoping-2.jpg'
import insta_3 from '../../assets/insta-shoping-3.jpg'
import insta_4 from '../../assets/insta-shoping-4.jpg'
import insta_5 from '../../assets/insta-shoping-5.jpg'
import insta_6 from '../../assets/insta-shoping-6.jpg'
import insta_7 from '../../assets/insta-shoping-7.jpg'
import insta_8 from '../../assets/insta-shoping-8.jpg'
import insta_9 from '../../assets/insta-shoping-9.jpg'
import { useEffect } from 'react'
import './style.css'

const InstragramSection = () => {
    useEffect(() => {
        // Get all the elements by their IDs
        const showPageButtons = document.querySelectorAll(".showPageButton");
        const closePageButton = document.getElementById("closePageButton");
        const centeredPage = document.getElementById("centeredPage");

        // Add an event listener to each "Show Page" button
        showPageButtons.forEach(button => {
            button.addEventListener("click", function () {
                centeredPage.classList.remove("display_hidden");
            });
        });

        // Add an event listener to the "Close Page" button
        closePageButton.addEventListener("click", function () {
            centeredPage.classList.add("display_hidden");
        });
    }, [])
    return (
        <div className='mt-10'>
            <section className="fifth_section">
                <div className="instagram_bar flex justify-between items-center flex-col gap-5 md:flex-row mt-10 mb-10">
                    <div className=" flex justify-center items-center text-2xl gap-2">
                        <FaInstagram className='text-2xl font-semibold mt-2' />
                        <a className="instra_link text-2xl font-semibold underline" href=""><span>@vvoodoocrafts</span></a>
                    </div>
                    <div>
                        <div className="flex gap-2 justify-center items-center bg-[#44484F] text-white py-2 px-4 rounded-lg w-52 ">Follow on Instagram</div>
                    </div>
                </div>
                <div className=" ">
                    <div id="" className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5">
                        <div className="showPageButton" style={{ position: 'relative' }}>
                            <img className='md:h-80 md:w-60 w-full  h-80' src={insta_1} alt="" />
                            <div className="overly bg-[#44484F] absolute top-0 left-0 md:h-80 md:w-60 w-full  h-80 flex justify-center items-center bg-opacity-50 opacity-0 hover:opacity-100 gap-4 ">
                                <div className='text-white flex justify-center items-center gap-4 '>
                                    <FaHeart className='text-red-500 icon ' />
                                    <span className='text-white'>120</span>
                                </div>
                                <div className='flex justify-center items-center gap-4 text-white'>
                                    <FaComment className='text-xl icon text-white' /> <span className='text-xl text-white'> 12</span>
                                </div>
                            </div>
                        </div>
                        {/*     ------------ */}
                        <div className="showPageButton" style={{ position: 'relative' }}>
                            <img className='md:h-80 md:w-60 w-full  h-80' src={insta_2} alt="" />
                            <div className="overly bg-[#44484F] absolute top-0 left-0 md:h-80 md:w-60 w-full  h-80 flex justify-center items-center bg-opacity-50 opacity-0 hover:opacity-100 gap-4 ">
                                <div className='text-white flex justify-center items-center gap-4 '>
                                    <FaHeart className='text-red-500 icon ' />
                                    <span className='text-white'>120</span>
                                </div>
                                <div className='flex justify-center items-center gap-4 text-white'>
                                    <FaComment className='text-xl icon text-white' /> <span className='text-xl text-white'> 12</span>
                                </div>

                            </div>
                        </div>
                        <div className="showPageButton" style={{ position: 'relative' }}>
                            <img className='md:h-80 md:w-60 w-full  h-80' src={insta_3} alt="" />
                            <div className="overly bg-[#44484F] absolute top-0 left-0 md:h-80 md:w-60 w-full  h-80 flex justify-center items-center bg-opacity-50 opacity-0 hover:opacity-100 gap-4 ">
                                <div className='text-white flex justify-center items-center gap-4 '>
                                    <FaHeart className='text-red-500 icon ' />
                                    <span className='text-white'>120</span>
                                </div>
                                <div className='flex justify-center items-center gap-4 text-white'>
                                    <FaComment className='text-xl icon text-white' /> <span className='text-xl text-white'> 12</span>
                                </div>

                            </div>
                        </div>
                        <div className="showPageButton" style={{ position: 'relative' }}>
                            <img className='md:h-80 md:w-60 w-full  h-80' src={insta_4} alt="" />
                            <div className="overly bg-[#44484F] absolute top-0 left-0 md:h-80 md:w-60 w-full  h-80 flex justify-center items-center bg-opacity-50 opacity-0 hover:opacity-100 gap-4 ">
                                <div className='text-white flex justify-center items-center gap-4 '>
                                    <FaHeart className='text-red-500 icon ' />
                                    <span className='text-white'>120</span>
                                </div>
                                <div className='flex justify-center items-center gap-4 text-white'>
                                    <FaComment className='text-xl icon text-white' /> <span className='text-xl text-white'> 12</span>
                                </div>

                            </div>
                        </div>
                        <div className="showPageButton" style={{ position: 'relative' }}>
                            <img className='md:h-80 md:w-60 w-full  h-80' src={insta_5} alt="" />
                            <div className="overly bg-[#44484F] absolute top-0 left-0 md:h-80 md:w-60 w-full  h-80 flex justify-center items-center bg-opacity-50 opacity-0 hover:opacity-100 gap-4 ">
                                <div className='text-white flex justify-center items-center gap-4 '>
                                    <FaHeart className='text-red-500 icon ' />
                                    <span className='text-white'>120</span>
                                </div>
                                <div className='flex justify-center items-center gap-4 text-white'>
                                    <FaComment className='text-xl icon text-white' /> <span className='text-xl text-white'> 12</span>
                                </div>

                            </div>
                        </div>
                        <div className="showPageButton" style={{ position: 'relative' }}>
                            <img className='md:h-80 md:w-60 w-full  h-80' src={insta_6} alt="" />
                            <div className="overly bg-[#44484F] absolute top-0 left-0 md:h-80 md:w-60 w-full  h-80 flex justify-center items-center bg-opacity-50 opacity-0 hover:opacity-100 gap-4 ">
                                <div className='text-white flex justify-center items-center gap-4 '>
                                    <FaHeart className='text-red-500 icon ' />
                                    <span className='text-white'>120</span>
                                </div>
                                <div className='flex justify-center items-center gap-4 text-white'>
                                    <FaComment className='text-xl icon text-white' /> <span className='text-xl text-white'> 12</span>
                                </div>

                            </div>
                        </div>
                        <div className="showPageButton" style={{ position: 'relative' }}>
                            <img className='md:h-80 md:w-60 w-full  h-80' src={insta_1} alt="" />
                            <div className="overly bg-[#44484F] absolute top-0 left-0 md:h-80 md:w-60 w-full  h-80 flex justify-center items-center bg-opacity-50 opacity-0 hover:opacity-100 gap-4 ">
                                <div className='text-white flex justify-center items-center gap-4 '>
                                    <FaHeart className='text-red-500 icon ' />
                                    <span className='text-white'>120</span>
                                </div>
                                <div className='flex justify-center items-center gap-4 text-white'>
                                    <FaComment className='text-xl icon text-white' /> <span className='text-xl text-white'> 12</span>
                                </div>

                            </div>
                        </div>
                        <div className="showPageButton" style={{ position: 'relative' }}>
                            <img className='md:h-80 md:w-60 w-full  h-80' src={insta_7} alt="" />
                            <div className="overly bg-[#44484F] absolute top-0 left-0 md:h-80 md:w-60 w-full  h-80 flex justify-center items-center bg-opacity-50 opacity-0 hover:opacity-100 gap-4 ">
                                <div className='text-white flex justify-center items-center gap-4 '>
                                    <FaHeart className='text-red-500 icon ' />
                                    <span className='text-white'>120</span>
                                </div>
                                <div className='flex justify-center items-center gap-4 text-white'>
                                    <FaComment className='text-xl icon text-white' /> <span className='text-xl text-white'> 12</span>
                                </div>

                            </div>
                        </div>
                        <div className="showPageButton" style={{ position: 'relative' }}>
                            <img className='md:h-80 md:w-60 w-full  h-80' src={insta_8} alt="" />
                            <div className="overly bg-[#44484F] absolute top-0 left-0 md:h-80 md:w-60 w-full  h-80 flex justify-center items-center bg-opacity-50 opacity-0 hover:opacity-100 gap-4 ">
                                <div className='text-white flex justify-center items-center gap-4 '>
                                    <FaHeart className='text-red-500 icon ' />
                                    <span className='text-white'>120</span>
                                </div>
                                <div className='flex justify-center items-center gap-4 text-white'>
                                    <FaComment className='text-xl icon text-white' /> <span className='text-xl text-white'> 12</span>
                                </div>

                            </div>
                        </div>
                        <div className="showPageButton" style={{ position: 'relative' }}>
                            <img className='md:h-80 md:w-60 w-full  h-80' src={insta_9} alt="" />
                            <div className="overly bg-[#44484F] absolute top-0 left-0 md:h-80 md:w-60 w-full  h-80 flex justify-center items-center bg-opacity-50 opacity-0 hover:opacity-100 gap-4 ">
                                <div className='text-white flex justify-center items-center gap-4 '>
                                    <FaHeart className='text-red-500 icon ' />
                                    <span className='text-white'>120</span>
                                </div>
                                <div className='flex justify-center items-center gap-4 text-white'>
                                    <FaComment className='text-xl icon text-white' /> <span className='text-xl text-white'> 12</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div id="centeredPage" className="display_hidden">
                        <div id="pageContent">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/wqNqqsoEJy0?si=wiq7-I-P4nOK9yp5"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <button id="closePageButton" className="bg-[#44484F] py-2 px-4">Close Page</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InstragramSection;