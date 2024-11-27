import Gifts from "../pages/Gifts";

// src/data/productData.js
const productData = {
  mangoes: [
    {
      id: 1, // Unique id
      title: "Ambika",
      price: "₹299",
      imgSrc: "/assets/images/GikiJoy Edited Sku Images/JPEG/IMG-20240626-WA0026.jpg",
      description: "Delicious Ambika mango, sweet and juicy.",
      outOfStock: false,
    },
    {
      id: 2, // Unique id
      title: "Dushheri",
      price: "₹399",
      imgSrc: "/assets/images/GikiJoy Edited Sku Images/JPEG/IMG-20240626-WA0027.jpg",
      description:
        "The Dasheri mango, often hailed as the King of Mangoes, is a delectable variety originating from the northern regions of India, particularly in the states of Uttar Pradesh and Andhra Pradesh. Celebrated for its exceptional flavor, texture, and fragrance, the Dasheri mango has won the hearts of mango enthusiasts worldwide.",
      outOfStock: false,
    },
    {
      id: 3, // Unique id
      title: "Hybrid",
      price: "₹499",
      imgSrc: "/assets/images/GikiJoy Edited Sku Images/JPEG/WhatsApp Image 2024-06-25 at 17.25.43_fa25ead8.jpg",
      description: "Hybrid",
      outOfStock: false,
    },
    {
      id: 4, // Unique id
      title: "Vanraj",
      price: "₹499",
      imgSrc: "/assets/images/mango shoot/VanRaj/0H2A9665.JPG",
      description: "Vanraj mango, rich in flavor and aroma.",
      outOfStock: false,
    },
  ],
  mangoCans: [
    {
      id: 1,
      title: "GikiJoy Mango Can 1",
      price: "₹299",
      imgSrc: "/assets/images/GikiJoy Edited Sku Images/WhatsApp Image 2024-06-25 at 18.46.18_52223182.jpg",
      description:
        "Experience the taste of pure, natural Dashehari mangoes with GikiJoy Mango Can 1. Perfect for making a variety of mango delicacies.",
      features: [
        "Non GMO",
        "No Added Preservatives",
        "No Artificial Flavours",
        "No Artificial Colors",
        "No Thickeners or Other Additives",
        "Vegan",
        "100% Natural Dashehari GI 125 Mangoes",
        "Limited Batch Production i.e. 500 kg per cycle",
        "Just 5% Added Cane Sugar"
      ],
      brand: "GikiJoy",
      netQuantity: "850 gm",
      flavor: "Dashehari Mango",
      containerType: "Can",
      outOfStock: false,
    },
    {
      id: 2,
      title: "GikiJoy Mango Can 2",
      price: "₹399",
      imgSrc: "/assets/images/GikiJoy Edited Sku Images/WhatsApp Image 2024-06-25 at 18.46.18_52223182.jpg",
      description:
        "Savor the delicious and natural flavor of Dashehari mangoes with GikiJoy Mango Can 2. Ideal for mango smoothies, lassis, and more.",
      features: [
        "Non GMO",
        "No Added Preservatives",
        "No Artificial Flavours",
        "No Artificial Colors",
        "No Thickeners or Other Additives",
        "Vegan",
        "100% Natural Dashehari GI 125 Mangoes",
        "Limited Batch Production i.e. 500 kg per cycle",
        "Just 5% Added Cane Sugar"
      ],
      brand: "GikiJoy",
      netQuantity: "850 gm",
      flavor: "Dashehari Mango",
      containerType: "Can",
      outOfStock: false,
    },
    {
      id: 3,
      title: "GikiJoy Mango Can 3",
      price: "₹499",
      imgSrc: "/assets/images/GikiJoy Edited Sku Images/WhatsApp Image 2024-06-25 at 19.20.37_83e86e01.jpg",
      description:
        "Delight in the rich and authentic taste of Dashehari mangoes with GikiJoy Mango Can 3. Perfect for baking, cooking, and as a sweet treat.",
      features: [
        "Non GMO",
        "No Added Preservatives",
        "No Artificial Flavours",
        "No Artificial Colors",
        "No Thickeners or Other Additives",
        "Vegan",
        "100% Natural Dashehari GI 125 Mangoes",
        "Limited Batch Production i.e. 500 kg per cycle",
        "Just 5% Added Cane Sugar"
      ],
      brand: "GikiJoy",
      netQuantity: "850 gm",
      flavor: "Dashehari Mango",
      containerType: "Can",
      outOfStock: false,
    },
  ],
  Gifts: [
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
  ],
};

// src/data/listingData.js
const listingData = [
  {
    id: 1,
    title: "Mysa | Luxurious 2BHK | Entire apartment",
    location: "Jaipur, India",
    description: "Entire apartment in Jaipur, India",
    details: "4 guests · 2 bedrooms · 2 beds · 2 bathrooms",
    host: {
      name: "Royal",
      hostingDuration: "1 month hosting",
      experience: "Exceptional check-in experience",
      selfCheckIn: true,
    },
    pricePerNight: "₹2,339",
    images: [
      '/assets/images/property1/img1.jpg',
      '/assets/images/property1/img2.jpg',
      '/assets/images/property1/img3.jpg',
      // Add more image paths
    ],
    reviews: [
      { user: 'User1', rating: 5, comment: 'Amazing stay!' },
      { user: 'User2', rating: 4, comment: 'Lovely place.' },
      // Add more reviews
    ],
    outOfStock: false,
  },
  {
    id: 2,
    title: "Cozy Cottage in the Hills",
    location: "Manali, India",
    description: "Entire cottage in the hills, offering peace and serenity.",
    details: "2 guests · 1 bedroom · 1 bed · 1 bathroom",
    host: {
      name: "Nature's Bliss",
      hostingDuration: "3 months hosting",
      experience: "Scenic surroundings and great amenities",
      selfCheckIn: false,
    },
    pricePerNight: "₹1,599",
    images: [
      '/assets/images/property2/img1.jpg',
      '/assets/images/property2/img2.jpg',
      '/assets/images/property2/img3.jpg',
      // Add more image paths
    ],
    reviews: [
      { user: 'User3', rating: 5, comment: 'Peaceful and beautiful location.' },
      { user: 'User4', rating: 4, comment: 'Perfect for a weekend getaway.' },
      // Add more reviews
    ],
    outOfStock: false,
  },
  // Add more listings as needed
];




export default productData;
