import man from '../../assets/men.jpg'
import woman from '../../assets/women.jpg'
import couple from '../../assets/couple.jpg'

const Unisexsecsion = () => {
    return (
        <div>
            <section className="third_section mt-20 mb-20">
                <div className="flex justify-center flex-col items-center w-3/4 mx-auto ">
                    <h1 className='text-4xl text-center'>We Design &quot;Unisex&quot; !</h1>
                    <span className="hr_line bg-[#44484F] mx-auto h-[1px] w-2/3 mt-4 mb-5"></span>
                    <button className="btn py-2 px-4 text-xl font-serif">SHOP UNISEX</button>
                </div>
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
                            <h3>For Men</h3>
                            <span className="card_line mt-2 mb-2 bg-[#44484F] w-3/4 h-[1px]">
                            </span>
                            <p className='text-center'>Design and made specially
                                for MEN. products like Belt, Bifold Wallet, etc.</p>
                        </div>
                    </div>
                    <div className="category_card p-4 w-72 flex flex-col justify-center items-center border gap-4  card">
                        <img src={couple} alt="" />
                        <div className="flex justify-center items-center flex-col w-3/4">
                            <h3>For Couples</h3>
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