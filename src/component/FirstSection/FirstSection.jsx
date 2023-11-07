import img1 from '../../assets/sec-1.jpg'
import img2 from '../../assets/sec-2.jpg'
import img3 from '../../assets/sec-3.jpg'

const FirstSection = () => {
    return (
        <div>
            <section className="first_section md:mt-20 mt-14 lg:mt-20 md:mb-20 mb-10">
                <div className="section-1 flex justify-center items-center flex-wrap lg:flex-nowrap overflow-hidden gap-2  md:gap-5">
                    <div className="card top-sell gift flex justify-center  space-y-6 p-4 w-72 h-80    items-center flex-col">
                        <img src={img1} alt="" className='overflow-hidden w-72 h-56' />
                        <div className=" flex justify-center items-center flex-col gap-3">
                            <p className='text-xl font-semibold'>Most Loved Designs</p>
                            <h3>This Week Top Sell</h3>
                        </div>
                    </div>
                    <div className=" designoftheweek overflow-hidden  flex justify-center space-y-6 p-4 w-72 h-80  item items-center flex-col lg:flex-col-reverse gap-3 ">
                        <img src={img2} alt="" className='w-72 h-56' />
                        <div className=" flex justify-center items-center flex-col gap-1">
                            <p className='text-xl font-semibold'>Design of the Week</p>
                            <h2>Do Not Miss The Details</h2>
                        </div>
                    </div>
                    <div className=" md:mt-10 lg:mt-0 flex justify-center  space-y-6 p-4 w-72 h-80 overflow-hidden   items-center flex-col  ">
                        <img src={img3} alt="" className='w-72 h-56' />
                        <div className=" flex justify-center items-center flex-col gap-1">
                            <p className='text-xl font-semibold'>Looking For Gifts ?</p>
                            <h2>Not Expensive But Great Gift</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex justify-center flex-col-reverse  lg:flex-row items-center lg:gap-10 md:gap-20 gap-10 flex-wrap lg:flex-nowrap'>
                <div className='lg:w-1/2  w-full'>
                    <iframe className='lg:w-[576px] w-full h-[300px] lg:h-[350px]' src="https://www.youtube.com/watch?v=ZIXy5eC_1sw" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
                <div className='lg:w-1/2 flex justify-center items-center flex-col gap-2   w-full'>
                    <h1 className='text-6xl text-center'>100% handcrafted</h1>
                    <div className='h-[3px] bg-[#44484F] mt-4 mb-4 w-3/4 mx-auto '></div>
                    <p className='text-2xl text-center'>Watch the process in the youtube channel</p>
                </div>
            </section>
        </div>
    );
};

export default FirstSection;