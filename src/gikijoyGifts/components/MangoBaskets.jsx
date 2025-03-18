import React from "react";
import { ProductGrid } from "../../components/ProductGrid";


const Gifts = [
  
    {
      id: 1, // Add unique id
      title: "Hamper 1",
      price: "₹299",
      imgSrc: "/assets/images/mango shoot/GikiJoy Corporate Gifts/0H2A9829.JPG",
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
  ]



const Hampers = () => {
  const category1 = "Gifts"; // Define the category
 

  return (
    <div>
      
      <h2 className="text-3xl font-bold text-center mb-8">Mango Baskets</h2>
      <ProductGrid products={Gifts} category={category1} />
      
       
      
    </div>
  );
};

export default Hampers;
