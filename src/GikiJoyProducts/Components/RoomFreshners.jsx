import React from "react";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

const FruitProductCards = () => {
  // Updated products to show Amla Candy and Mango Tin Cans
  const products = [
    {
      title: "Premium Amla Candy",
      price: "₹150",
      tag: "Best Seller",
      imageUrl: "/assets/images/MangoProduct/cover- ac1.png",
      route: "/gikijoy-farm/product/candy/1",
      description: "Sweet and tangy with natural goodness"
    },
    {
      title: "Alphonso Mango Tin",
      price: "₹200",
      tag: "Seasonal Special",
      imageUrl: "/assets/images/mango shoot/GikiJoy Cans/DASHEHRI  Slices in Pulp/GKJPulp2.jpg",
      route: "/gikijoy-farm/product/mango-cans/2",
      description: "Preserved sweetness of premium Alphonso mangoes"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Header with modern minimalist design */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
          Signature Products
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600 text-base max-w-md mx-auto">
          Traditional flavors prepared with modern techniques
        </p>
      </div>

      {/* Smaller card layout with grid */}
      <div className="grid grid-cols-2 gap-4">
        {products.map((product, index) => (
          <div key={index} className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            {/* Image with overlay */}
            <div className="relative aspect-[4/3]">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Tag */}
              <div className="absolute top-2 right-2">
                <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-900 rounded-full shadow-sm">
                  {product.tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-3 text-white">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-sm font-bold">{product.title}</h3>
                {/* <span className="text-sm font-semibold">{product.price}</span> */}
              </div>
              
              <p className="text-white/80 text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {product.description}
              </p>
              
              <Link to={product.route} className="inline-block w-full">
                <button className="w-full px-2 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded text-xs shadow-sm hover:from-amber-600 hover:to-orange-600 transition flex items-center justify-center gap-1 font-medium">
                  <Eye className="w-3 h-3" />
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FruitProductCards;