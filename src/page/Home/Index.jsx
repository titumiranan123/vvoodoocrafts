import Category from "../../component/Category/Category";
import FirstSection from "../../component/FirstSection/FirstSection";

import Header from "../../component/Header/Header";

import ProductTag from "../../component/ProductTag/ProductTag";
import Unisexsecsion from "../../component/Unisex/Unisex";


const Home = () => {
    return (
        <div className="lg:w-[1300px] mx-auto px-4">

            <Header />
            <FirstSection />
            <Unisexsecsion />
            <Category />
            {/* <InstragramSection /> */}
            <ProductTag />

        </div>
    );
};

export default Home;