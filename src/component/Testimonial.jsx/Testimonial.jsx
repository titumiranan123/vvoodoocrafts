
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const Testimonial = () => {
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
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    };
    return (
        <div className='mt-16'>
            <div className='flex justify-center items-center mb-5 flex-col'>
                <h2 className='text-4xl font-bold'>Customer Blessings</h2>
                <div className='bg-[#f8f8f8] w-20 h-[4px]'></div>
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
                        <div className="max-w-md mx-auto  bg-white rounded-xl shadow-lg border overflow-hidden md:max-w-2xl">
                            <div className="md:flex">
                                <div className="p-8">

                                    <p className="mt-2 text-gray-500">&quot;I&apos;m very satisfied with the services provided. They exceeded my expectations and delivered exceptional results.&quot;</p>
                                    <div className="mt-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=826&t=st=1703731156~exp=1703731756~hmac=81961fa392f3f0ee96cc85e4aa806beee03db8d598da9ca1ad7ed35e20fac8ec" alt="User" />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-sm font-medium text-gray-900">John Doe</div>
                                                <div className="text-sm text-gray-500">CEO, Company Name</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border  overflow-hidden md:max-w-2xl">
                            <div className="md:flex">
                                <div className="p-8">

                                    <p className="mt-2 text-gray-500">&quot;I&apos;m very satisfied with the services provided. They exceeded my expectations and delivered exceptional results.&quot;</p>
                                    <div className="mt-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=826&t=st=1703731156~exp=1703731756~hmac=81961fa392f3f0ee96cc85e4aa806beee03db8d598da9ca1ad7ed35e20fac8ec" alt="User" />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-sm font-medium text-gray-900">John Doe</div>
                                                <div className="text-sm text-gray-500">CEO, Company Name</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border  overflow-hidden md:max-w-2xl">
                            <div className="md:flex">
                                <div className="p-8">

                                    <p className="mt-2 text-gray-500">&quot;I&apos;m very satisfied with the services provided. They exceeded my expectations and delivered exceptional results.&quot;</p>
                                    <div className="mt-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=826&t=st=1703731156~exp=1703731756~hmac=81961fa392f3f0ee96cc85e4aa806beee03db8d598da9ca1ad7ed35e20fac8ec" alt="User" />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-sm font-medium text-gray-900">John Doe</div>
                                                <div className="text-sm text-gray-500">CEO, Company Name</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border  overflow-hidden md:max-w-2xl">
                            <div className="md:flex">
                                <div className="p-8">

                                    <p className="mt-2 text-gray-500">&quot;I&apos;m very satisfied with the services provided. They exceeded my expectations and delivered exceptional results.&quot;</p>
                                    <div className="mt-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=826&t=st=1703731156~exp=1703731756~hmac=81961fa392f3f0ee96cc85e4aa806beee03db8d598da9ca1ad7ed35e20fac8ec" alt="User" />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-sm font-medium text-gray-900">John Doe</div>
                                                <div className="text-sm text-gray-500">CEO, Company Name</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border  overflow-hidden md:max-w-2xl">
                            <div className="md:flex">
                                <div className="p-8">

                                    <p className="mt-2 text-gray-500">&quot;I&apos;m very satisfied with the services provided. They exceeded my expectations and delivered exceptional results.&quot;</p>
                                    <div className="mt-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=826&t=st=1703731156~exp=1703731756~hmac=81961fa392f3f0ee96cc85e4aa806beee03db8d598da9ca1ad7ed35e20fac8ec" alt="User" />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-sm font-medium text-gray-900">John Doe</div>
                                                <div className="text-sm text-gray-500">CEO, Company Name</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;