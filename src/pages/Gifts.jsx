import React from 'react';
import { Layout } from '../layout/Layout';
import { ProductGrid } from '../components/ProductGrid';


const CorporateGifts = [
  {
    id: 1, // Add unique id
    title: "Hamper 1",
    price: "₹299",
    imgSrc: "/assets/images/mango shoot/GikiJoy Corporate Gifts/0H2A9829.JPG"
  },
  {
    id: 2, // Add unique id
    title: "Hamper 2",
    price: "₹399",
    imgSrc: "/assets/images/mango shoot/GikiJoy Corporate Gifts/0H2A9801.JPG",
  },
  {
    id: 3, // Add unique id
    title: "Hamper 3",
    price: "₹499",
    imgSrc: "/assets/images/mango shoot/GikiJoy Corporate Gifts/0H2A9792.JPG",
  },
 
];

const Gifts = () => {
  const category = "Gifts"; // Define the category

  return (
    <div>
      <Layout>
        <h2 className="text-3xl font-bold text-center mb-8">Corporate Gifts</h2>
        <ProductGrid products={CorporateGifts} category={category} />
      </Layout>
    </div>
  );
}

export default Gifts ;
