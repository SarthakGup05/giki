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
  candy: [
    {
      id: 1,
      title: "Aamla Candy",
      price: "₹299",
      imgSrc: "/assets/images/MangoProduct/cover- ac1.png",
      description: "Boosts immunity, rich in antioxidants, and good for skin and hair. Made from 100% natural ingredients with no artificial color or preservatives.",
      netWeight: "200 gm",
      ingredients: ["Amla berry", "Refined sugar"],
      nutrition: {
        calories: "315kcal",
        totalFat: "0gm",
        saturatedFat: "0gm",
        transFat: "0gm",
        sodium: "0mg",
        totalCarbs: "77.9gm",
        dietaryFiber: "5gm",
        sugar: "5gm",
        protein: "0.6gm",
        vitaminC: "0mg",
      },
      storage: "Once open, refrigerate. Store in a dry and cool place.",
      manufacturedBy: "GiKiJoy, 1/523 Jiamau, Hazratganj, Lucknow, Uttar Pradesh 226001",
      email: "contactGikijoy@gmail.com",
      gst: "09ABBFG3476E1ZF",
      packagedOn: "10th Dec 2024",
      useBefore: "12 months from the date of manufacture",
      brand: "GiKiJoy",
      isHealthy: true,
    },
   
  ],

};

// src/data/listingData.js





export default productData;
