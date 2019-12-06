import React from "react";

//step 4 imported ProductContext and removed props
// Components
import Product from "./Product";
import { ProductContext } from "../contexts/ProductContext";

const Products = props => {
  const { products, addItem } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={props.addItem} />
      ))}
    </div>
  );
};

export default Products;
