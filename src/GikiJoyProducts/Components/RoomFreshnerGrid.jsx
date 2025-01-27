import React from "react";
import { ProductGrid } from "../../components/ProductGrid";


const RoomFreshners = [
  {
    id: 1, // Add unique id
    title: "White Wood",
    price: "₹480",
    tag: "Premium Selection",
    imgSrc: "/assets/images/room freshners/1.jpg",
  },
  {
    id: 2, // Add unique id
    title: "Golden Dust",
    price: "₹480",
    tag: "Best Seller",
    imgSrc: "/assets/images/room freshners/2.jpg",
  },
  {
    id: 3,
    title: "Oudh Fancy",
    price: "₹480",
    tag: "New Arrival",
    imgSrc: "/assets/images/room freshners/3.jpg",
  },
  {
    id: 4,
    title: "Romania Garden",
    price: "₹480",
    tag: "Limited Edition",
    imgSrc: "/assets/images/room freshners/4.jpg",
  },
  {
    id: 5,
    title: "Eminence",
    price: "₹480",
    tag: "Premium Selection",
    imgSrc: "/assets/images/room freshners/5.jpg",
  },
];


const RoomProduct = () => {
  const category1 = "freshners"; // Define the category
 

  return (
    <div>
      
      <h2 className="text-3xl font-bold text-center mb-8">Room Freshners</h2>
      <ProductGrid products={RoomFreshners} category={category1} />
      
       
      
    </div>
  );
};

export default RoomProduct;
