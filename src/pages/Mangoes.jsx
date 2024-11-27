import React from 'react';
import { Layout } from '../layout/Layout';
import { ProductGrid } from '../components/ProductGrid';


const mangoContent = [
  {
    id: 1, // Add unique id
    title: "Ambika",
    price: "₹299",
    imgSrc: "/assets/images/GikiJoy Edited Sku Images/JPEG/IMG-20240626-WA0026.jpg"
  },
  {
    id: 2, // Add unique id
    title: "Dushheri",
    price: "₹399",
    imgSrc: "/assets/images/GikiJoy Edited Sku Images/JPEG/IMG-20240626-WA0027.jpg",
  },
  {
    id: 3, // Add unique id
    title: "Hybrid",
    price: "₹499",
    imgSrc: "/assets/images/GikiJoy Edited Sku Images/JPEG/WhatsApp Image 2024-06-25 at 17.25.43_fa25ead8.jpg",
  },
 
];

const Mangoes = () => {
  const category = "mangoes"; // Define the category

  return (
    <div>
      <Layout>
        <h2 className="text-3xl font-bold text-center mb-8">Mangoes</h2>
        <ProductGrid products={mangoContent} category={category} />
      </Layout>
    </div>
  );
}

export default Mangoes;
