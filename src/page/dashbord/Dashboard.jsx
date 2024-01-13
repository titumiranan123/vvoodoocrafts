import useProduct from "../../hook/useProduct";
import ProductCard from "./ProductCard/ProductCard";

const Dashboardhome = () => {
    const [data] = useProduct()
    console.log(data)
    return (
        <div className="h-screen ">
            <div className="h-[400px]">

            </div>
            <div className="border-t-2 border-[#C94428] ">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold mt-8 mb-4">Shopping Cart</h1>
                    <div className=" flex flex-col gap-10">
                        {data?.map((item, index) => (
                            <ProductCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboardhome;