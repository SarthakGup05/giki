import React from "react";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryCards = () => {
  const categories = [
    {
      id: 1,
      title: "Room Fresheners",
      description: "Premium scents to elevate your space",
      imageUrl: "/assets/images/page banner/frgrances.jpg",
      route: "/gikijoy-products/room-freshner",
      featuredProduct: "White Wood & Golden Dust",
      tag: "Best Sellers"
    },
    {
      id: 2,
      title: "Mango Baskets",
      description: "Elegant gift baskets for every occasion",
      imageUrl: "/assets/images/page banner/mngo.jpg", 
      route: "/gikijoy-gifts/products",
      featuredProduct: "Premium Assortment",
      tag: "New Collection"
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600">
          Product Categories
        </h2>
        <p className="text-gray-600 text-lg">
          Explore our premium collections crafted with care
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            {/* Image with overlay */}
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={category.imageUrl}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70 opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-900 rounded-full shadow-md">
                  {category.tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {category.title}
              </h3>
              
              <p className="text-white/90 mb-4 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150">
                <span className="text-sm text-white/80">
                  Featuring: {category.featuredProduct}
                </span>
                
                <Link to={category.route}>
                  <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300">
                    <Eye className="w-4 h-4 mr-2" />
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;