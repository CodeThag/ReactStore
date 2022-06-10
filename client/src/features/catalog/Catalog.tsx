import { FunctionComponent, useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";


const Catalog: FunctionComponent = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://localhost:7121/api/products').then(response => response.json())
            .then(data => setProducts(data));
        // An empty array means this useEffect will be called once
        // If not parameter is passed, useEffect will be called after page render and be called again in cyclical way.
        // changable dependencies can be put here. like url parameter, calling functions etc.
    }, []);

    return (
        <>
            <ProductList products={products} />
        </>);
}

export default Catalog;