import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../component/productCard/ProductCard";

const CategoryProduct = () => {
    const { catId, subcate } = useParams();
    const [data, setDate] = useState([]);

    useEffect(() => {
        const filteredData = products.filter(product => {
            console.log(product)
            // Correct the condition: add parentheses after toLowerCase
            return product.category.toLowerCase() === catId && product.sub_category.toLowerCase() === subcate;
        });

        setDate(filteredData);
    }, [catId, subcate]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                data.length === 0 && <div className="flex justify-center items-center h-screen text-lg ">No Product Found</div>
            }
            {
                data?.map((pt, indx) => <ProductCard key={indx} product={pt} />)
            }
        </div>
    );
};

export default CategoryProduct;

const products = [
    {
        "product_name": "Classic Leather Belt",
        "category": "Men",
        "sub_category": "Belt",
        "Product_details": "Genuine leather belt with classic design.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "29.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Classic Sandal",
        "category": "Men",
        "sub_category": "sandal",
        "Product_details": "Genuine leather belt with classic design.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "29.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Half Shoe",
        "category": "Men",
        "sub_category": "half-shoe",
        "Product_details": "Genuine leather belt with classic design.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "29.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Shoe",
        "category": "Men",
        "sub_category": "shoe",
        "Product_details": "Genuine leather belt with classic design.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "29.99",
        "previous_price": "39.99"

    },
    {
        "product_name": "Women's Elegant Wallet",
        "category": "Women",
        "sub_category": "belt",
        "Product_details": "Elegantly designed wallet with multiple compartments.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "39.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Slim Fit Long Wallet",
        "category": "Women",
        "sub_category": "purse",
        "Product_details": "Slim and stylish long wallet for men.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "49.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Chic Leather Purse",
        "category": "Women",
        "sub_category": "Purse",
        "Product_details": "Chic and compact leather purse for women.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "34.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Casual Loafers",
        "category": "Men",
        "sub_category": "loffer",
        "Product_details": "Comfortable and casual loafers for men.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "44.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Stylish High Heels",
        "category": "Women",
        "sub_category": "Shoe",
        "Product_details": "Stylish high-heeled shoes for women.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "54.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Stylish High Heels",
        "category": "Women",
        "sub_category": "hand-bag",
        "Product_details": "Stylish high-heeled shoes for women.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "54.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Comfortable Sandals",
        "category": "Children",
        "sub_category": "Sandel",
        "Product_details": "Comfortable sandals for children.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "19.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Kids' Half Shoes",
        "category": "Children",
        "sub_category": "half-shoe",
        "Product_details": "Adorable half shoes for kids.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "29.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Business Briefcase",
        "category": "Corporate",
        "sub_category": "bag",
        "Product_details": "Stylish and spacious business briefcase.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "69.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Gadget Cover Set",
        "category": "Corporate",
        "sub_category": "gadget-cover",
        "Product_details": "Set of durable gadget covers for professionals.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "49.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Fashionable Combo Pack",
        "category": "Uni sex",
        "sub_category": "combo",
        "Product_details": "Fashionable combo pack suitable for all genders.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "89.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Sporty Backpack",
        "category": "Uni sex",
        "sub_category": "Bag",
        "Product_details": "Sporty backpack for daily use.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "39.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Modern Gadget Organizer",
        "category": "Corporate",
        "sub_category": "gadget cover",
        "Product_details": "Modern gadget organizer for professionals.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "29.99",
        "previous_price": "39.99"
    },
    {
        "product_name": "Travel Combo Set",
        "category": "Uni sex",
        "sub_category": "combo",
        "Product_details": "Travel-friendly combo set for all genders.",
        "image_url": "https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=826&t=st=1705844835~exp=1705845435~hmac=62ade0df783b738fb7c6a160acb2ce61a270a7eadaac06219e7eaa5f971a78a7",
        "price": "99.99",
        "previous_price": "39.99"
    }
]