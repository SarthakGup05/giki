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
  // {
  //   id: 3, // Add unique id
  //   title: "Hybrid",
  //   price: "₹499",
  //   imgSrc: "/assets/images/GikiJoy Edited Sku Images/JPEG/WhatsApp Image 2024-06-25 at 17.25.43_fa25ead8.jpg",
  // },
 
];
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
const mangoCandyContent = [
  {
    id: 1, // Add unique id
    title: "Aamla Candy",
    price: "₹299",
    imgSrc: "/assets/images/MangoProduct/cover- ac1.png",
  },
  // {
  //   id: 2, // Add unique id
  //   title: "Mango Can 2",
  //   price: "₹399",
  //   imgSrc: "/assets/images/GikiJoy Edited Sku Images/WhatsApp Image 2024-06-25 at 18.46.18_52223182.jpg",
  // },
  // {
  //   id: 3, // Add unique id
  //   title: "Mango Can 3",
  //   price: "₹499",
  //   imgSrc: "/assets/images/GikiJoy Edited Sku Images/WhatsApp Image 2024-06-25 at 19.20.37_83e86e01.jpg",
  // },
];
const Mangoes = () => {
  const category1 = "mangoes"; // Define the category
  const category2 = "mango-cans"; // Define the category
  const category3 = "candy"; // Define the category

  return (
    <div>
      <Layout>
        <h2 className="text-3xl font-bold text-center mb-8">Mangoes</h2>
        <ProductGrid products={mangoContent} category={category1} />
       <h2 className="text-3xl font-bold text-center mb-8">Mango Cans</h2>
            <ProductGrid products={mangoCansContent} category={category2} />
            <h2 className="text-3xl font-bold text-center mb-8">Aamla Candy</h2>
            <ProductGrid products={mangoCandyContent} category={category3} />
      </Layout>
    </div>
  );
}

export default Mangoes;
