import React from "react";
import ProductList from "./ProductList";

const ProductLayout = () => {
  return (
    <section className="product-layout page-container pb-10">
      <h2 className="capitalize text-black mb-10 text-3xl font-bold">
        Sản phẩm
      </h2>
      <ProductList />
    </section>
  );
};

export default ProductLayout;
