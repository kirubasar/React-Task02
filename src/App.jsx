import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const products = [
    {
      id: 1,
      name: 'Fancy Product',
      price: '$40.00 - $80.00',
      imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      isSale: false,
    },
    {
      id: 2,
      name: 'Special Item',
      price: '$18.00',
      originalPrice: '$20.00',
      imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      isSale: true,
      rating: 5,
    },
    {
      id: 3,
      name: 'Sale Item',
      price: '$25.00',
      originalPrice: '$50.00',
      imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      isSale: true,
    },
    {
      id: 4,
      name: 'Popular Item',
      price: '$40.00',
      imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      isSale: false,
      rating: 5,
    },
    {
        id: 5,
        name: 'Sale Item',
        price: '$25.00',
        originalPrice: '$50.00',
        imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        isSale: true,
      },
      {
        id: 6,
        name: 'Fancy Product',
        price: '$120.00 - $280.00',
        imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        isSale: false,
      },
      {
        id: 7,
        name: 'Special Item',
        price: '$18.00',
        originalPrice: '$20.00',
        imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        isSale: true,
        rating: 5,
      },
      {
        id: 8,
        name: 'Popular Item',
        price: '$40.00',
        imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        isSale: false,
        rating: 5,
      }
  ];
  const addToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    const isProductInCart = cart.some(item => item.id === productId);
    if (!isProductInCart && productToAdd) {
      setCart([...cart, productToAdd]);
    }
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} />
      <Header />
      <ProductSection products={products} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
      <Footer />
    </div>
  );
}

export default App;