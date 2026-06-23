import { useState } from 'react'
import ProductCard from './components/ProductCard';
import './App.css'

function App() {
  const products = [
    { id: 1, name: "무선 키보드", price: 39000, brand: "EZTECH" },
    { id: 2, name: "무선 마우스", price: 29000, brand: "EZTECH" },
    { id: 3, name: "모니터", price: 199000, brand: "EZTECH" },
  ];

  return (
    <>
      {products.map(({ id, name, price, brand }) => (
        <ProductCard
          key={id}
          name={name}
          price={price}
          brand={brand}
        />
      ))}
    </>
  );
}

export default App
