import React from 'react';
import ProductList from './ProductList';

const ProductSection = ({ products, addToCart, removeFromCart, cart }) => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <ProductList products={products} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
      </div>
    </section>
  );
};

export default ProductSection;
