import React from 'react';


const ProductItem = ({ product, addToCart, removeFromCart, isInCart }) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={product.imageUrl} alt={product.name} />
        <div className="card-body p-4">
          <div className="text-center">
            
            <h5 className="fw-bolder">{product.name}</h5>
            
            {product.isSale ? (
              <span><del>{product.originalPrice}</del> {product.price}</span>
            ) : (
              <span>{product.price}</span>
            )}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {isInCart ? (
              <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(product.id)}>
                Remove from Cart
              </button>
            ) : (
              <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(product.id)}>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
