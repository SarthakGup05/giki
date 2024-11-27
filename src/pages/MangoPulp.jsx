// src/pages/MangoPulpPage.js
import React from 'react';
import { Layout } from '../layout/Layout';
import { ProductGrid } from '../components/ProductGrid';

const mangoPulpContent = [
  {
    title: "GikiJoy Alphonso Aamras without Sugar (Pulp) 850 gm TIN",
    price: "₹799",
    imgSrc: "/assets/images/mango shoot/GikiJoy Cans/DASHEHRI Pulp/0H2A9881.JPG",
  },
  {
    title: "GikiJoy Alphonso Aamras (Pulp) 850 gm TIN",
    price: "₹599",
    imgSrc: "/assets/images/mango shoot/GikiJoy Cans/DASHEHRI Pulp/0H2A9901.JPG",
  },
  {
    title: "GikiJoy Alphonso Aamras (Pulp) POUCH 500 gm",
    price: "₹399",
    imgSrc: "/assets/images/mango shoot/GikiJoy Cans/DASHEHRI Pulp/0H2A9859.JPG",
  },
];

export const MangoPulpPage = () => {
  return (
    <Layout>
      <h2 className="text-3xl font-bold text-center mb-8">Mango Pulp Products</h2>
      <ProductGrid products={mangoPulpContent} />
    </Layout>
  );
};
