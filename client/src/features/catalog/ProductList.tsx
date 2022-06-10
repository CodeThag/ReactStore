import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[]
}

const ProductList: FunctionComponent<Props> = ({ products }) => {
    return (
        <Grid container spacing={4}>
            {products.map(product => {
                return (
                    <Grid item xs={3} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                );
            })}
        </Grid>);
}

export default ProductList;