import React from 'react';
import { Layout } from '../layout/Layout';
import { ProductGrid } from '../components/ProductGrid';

const mangoCansContent = [
  {
    id: 1, // Add unique id
    title: "Mango Can 1",
    price: "₹299",
    imgSrc: "/assets/images/GikiJoy Edited Sku Images/WhatsApp Image 2024-06-25 at 18.46.18_52223182.jpg",
  },
  {
    id: 2, // Add unique id
    title: "Mango Can 2",
    price: "₹399",
    imgSrc: "/assets/images/GikiJoy Edited Sku Images/WhatsApp Image 2024-06-25 at 18.46.18_52223182.jpg",
  },
  {
    id: 3, // Add unique id
    title: "Mango Can 3",
    price: "₹499",
    imgSrc: "/assets/images/GikiJoy Edited Sku Images/WhatsApp Image 2024-06-25 at 19.20.37_83e86e01.jpg",
  },
];

export const MangoCansPage = () => {
  const category = "mango-cans"; // Define the category

  return (
    <Layout>
      <h2 className="text-3xl font-bold text-center mb-8">Mango Cans Products</h2>
      <ProductGrid products={mangoCansContent} category={category} />
    </Layout>
  );
};
