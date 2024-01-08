import man from '../../assets/men.jpg'
import woman from '../../assets/women.jpg'
import couple from '../../assets/couple.jpg'

const Unisexsecsion = () => {
    return (
        <div className='-mt-10 md:mt-0'>
            <section className="third_section mt-20 mb-20">

                <div className="card_section flex justify-center items-center gap-5 md:flex-wrap flex-wrap lg:flex-nowrap mt-10">
                    <div className="category_card p-4 w-72 flex flex-col justify-center items-center border gap-4 ">
                        <div>
                            <img src={man} alt="" />
                        </div>
                        <div className="flex justify-center items-center flex-col w-3/4 ">
                            <h3 className='text-xl font-semibold '>For Women</h3>
                            <span className="card_line mt-2 mb-2 bg-[#44484F] w-3/4 h-[1px]">
                            </span>
                            <p className='text-center'>Design and made specially
                                for WOMEN. products like tote bag , Bracelets, etc.</p>
                        </div>
                    </div>
                    <div className="category_card p-4 w-72 flex flex-col justify-center items-center border gap-4 ">
                        <img src={woman} alt="" />
                        <div className="flex justify-center items-center flex-col w-3/4">
                            <h3 className='text-xl font-semibold '>For Men</h3>
                            <span className="card_line mt-2 mb-2 bg-[#44484F] w-3/4 h-[1px]">
                            </span>
                            <p className='text-center'>Design and made specially
                                for MEN. products like Belt, Bifold Wallet, etc.</p>
                        </div>
                    </div>
                    <div className="category_card p-4 w-72 flex flex-col justify-center items-center border gap-4  card">
                        <img src={couple} alt="" />
                        <div className="flex justify-center items-center flex-col w-3/4">
                            <h3 className='text-xl font-semibold '>Childrens</h3>
                            <span className="card_line mt-2 mb-2 bg-[#44484F] w-3/4 h-[1px]">
                            </span>
                            <p className='text-center'>Celebrate love or
                                friendship . products like Wallet sers, wrist Band, etc</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Unisexsecsion;