import React from 'react';
import ProductItem from './ProductItem';


const ProductList = ({ products, addToCart, removeFromCart, cart }) => {
return (
    
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} isInCart={cart.some(item => item.id === product.id)} />
      ))}
    </div>
  );
};

export default ProductList;
