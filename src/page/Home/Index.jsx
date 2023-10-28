import Category from "../../component/Category/Category";
import FirstSection from "../../component/FirstSection/FirstSection";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import InstragramSection from "../../component/InstragramSection/InstragramSection";
import Navbar from "../../component/Navbar/Navbar";
import ProductTag from "../../component/ProductTag/ProductTag";
import Unisexsecsion from "../../component/Unisex/Unisex";


const Home = () => {
    return (
        <div className="lg:container mx-auto px-4">
            <Navbar />
            <Header />
            <FirstSection />
            <Unisexsecsion />
            <Category />
            <InstragramSection />
            <ProductTag />
            <Footer />
        </div>
    );
};

export default Home;