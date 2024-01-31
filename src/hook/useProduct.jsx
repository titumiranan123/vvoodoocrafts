
import { useEffect, useState } from "react";

const useProduct = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    console.log(product)
    return product
}
export default useProduct;