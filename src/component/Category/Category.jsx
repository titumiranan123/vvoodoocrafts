import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import card1 from '../../assets/card-1.jpg'
import card2 from '../../assets/card-2.jpg'
import card3 from '../../assets/card-3.jpg'
import card4 from '../../assets/card-4.jpg'
import card5 from '../../assets/card-5.jpg'
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
            slidesPerView: 5,
            spaceBetween: 0,
        },
    };

    return (
        <div className='-mt-10 md:mt-0'>
            <div className='flex justify-center items-center  flex-col'>
                <h2 className='text-4xl'>Shop By Category</h2>
                <div className='bg-[#f8f8f8] w-20 h-[4px]'></div>
            </div>
            <div className='mt-10 md:mt-20'>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
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
                            <img className='w-[18rem] h-[18rem]' src={card1} alt="" />
                            <div className=' flex justify-center items-center  p-5 '>
                                <p>Hoster & Sheath</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[19rem] h-[22rem] border bg-[#f8f8f8]'>
                            <img className='w-[18rem] h-[18rem]' src={card2} alt="" />
                            <div className='flex justify-center items-center p-5'  >
                                <p>Hoster & Sheath</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[19rem] h-[22rem] border bg-[#f8f8f8]'>
                            <img className='w-[18rem] h-[18rem]' src={card3} alt="" />
                            <div className='flex justify-center items-center p-5' >
                                <p>Case</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[19rem] h-[22rem] border bg-[#f8f8f8]'>
                            <img className='w-[18rem] h-[18rem]' src={card4} alt="" />
                        </div >
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[19rem] h-[22rem] border bg-[#f8f8f8]'>
                            <img className='w-[18rem] h-[18rem]' src={card5} alt="" />
                            <div className='flex justify-center items-center p-5'  >
                                <p>Belt </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-48 h-20 border bg-[#f8f8f8]'>

                            <div className='flex justify-center h-20 items-center p-5'  >
                                <p>Pattern </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[19rem] h-[22rem] border bg-[#f8f8f8]'>
                            <img className='w-[18rem] h-[18rem]' src={card1} alt="" />
                            <div className='flex justify-center items-center p-5' >
                                <p>Bag</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[19rem] h-[22rem] border bg-[#f8f8f8]'>
                            <img className='w-[18rem] h-[18rem]' src={card2} alt="" />
                            <div className='flex justify-center items-center p-5'  >
                                <p>Accessory</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    );
};

export default Category;