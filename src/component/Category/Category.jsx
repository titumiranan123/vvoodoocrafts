import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import Accesories from '../../assets/Accesories .jpg'
import bag from '../../assets/bag.png'
import belt from '../../assets/belt.png'
import wallet_and_card_holder from '../../assets/wallet and card holder.png'
import lether from '../../assets/leather.jpg'
import './style.css'
const Category = () => {
    const swiperBreakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    };

    return (
        <div className=' mt-[100px]'>
            <div className='flex justify-center items-center  flex-col'>
                <h2 className='text-3xl font-bold'>Shop By Category</h2>
                <div className='bg-[#141414] w-1/3 mt-2 h-[2px]'></div>
                <h3 className='text-xl font-bold mt-2'>All Products </h3>
            </div>
            <div className='mt-10 md:mt-20'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={40}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={swiperBreakpoints}

                >
                    <SwiperSlide>
                        <div className='w-[19rem] h-[22rem] border bg-[#f8f8f8]'>
                            <img className='w-[18rem] h-[18rem]' src={bag} alt="" />
                            <div className='flex justify-center items-center p-5' >
                                <p>Bag</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[19rem] h-[22rem] border bg-[#f8f8f8]'>
                            <img className='w-[18rem] h-[18rem]' src={Accesories} alt="" />
                            <div className='flex justify-center items-center p-5'  >
                                <p>Accessory</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[19rem] h-[22rem] border bg-[#f8f8f8]'>
                            <img className='w-[18rem] h-[18rem]' src={wallet_and_card_holder} alt="" />
                            <div className=' flex justify-center items-center  p-5 '>
                                <p>Wallet & Card Holder</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='w-[19rem] h-[22rem] border bg-[#f8f8f8]'>
                            <img className='w-[18rem] h-[18rem]' src={lether} alt="" />
                            <div className='flex justify-center items-center p-5' >
                                <p>Lether</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[19rem] h-[22rem] border bg-[#f8f8f8]'>
                            <img className='w-[18rem] h-[18rem]' src={belt} alt="" />
                            <div className='flex justify-center items-center p-5'  >
                                <p>Belt </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='w-[19rem] h-[22rem] border bg-[#f8f8f8]'>
                            <img className='w-[18rem] h-[18rem]' src={bag} alt="" />
                            <div className='flex justify-center items-center p-5' >
                                <p>Bag</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[19rem] h-[22rem] border bg-[#f8f8f8]'>
                            <img className='w-[18rem] h-[18rem]' src={wallet_and_card_holder} alt="" />
                            <div className=' flex justify-center items-center  p-5 '>
                                <p>Wallet & Card Holder</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='w-[19rem] h-[22rem] border bg-[#f8f8f8]'>
                            <img className='w-[18rem] h-[18rem]' src={lether} alt="" />
                            <div className='flex justify-center items-center p-5' >
                                <p>Lether</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[19rem] h-[22rem] border bg-[#f8f8f8]'>
                            <img className='w-[18rem] h-[18rem]' src={belt} alt="" />
                            <div className='flex justify-center items-center p-5'  >
                                <p>Belt </p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='flex mt-10 justify-center items-center '>
                <button className="mt-2 bg-[#C94428] bg-opacity-69 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none">View More</button>
            </div>
        </div>
    );
};

export default Category;