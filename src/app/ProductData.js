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
      description:
        "GikiJoy Amla Candy is a 100% natural, chemical-free treat made from handpicked amla grown in Uttar Pradesh. Rich in Vitamin C and antioxidants, it boosts immunity, promotes skin health, supports digestion, and aids in detoxification. Enjoy a sweet and tangy flavor with no artificial colors or preservatives.",
        netWeight: "200 gm",
      ingredients: ["Amla berry", "Refined sugar"],
      nutrition: {
        servingSize: "30g (approximately 4-5 pieces)",
        calories: "50-60 kcal per serving",
        totalFat: "0gm",
        saturatedFat: "0gm",
        transFat: "0gm",
        sodium: "0mg",
        totalCarbs: "77.9gm",
        dietaryFiber: "5gm",
        sugar: "5gm",
        protein: "0.6gm",
        vitaminC: "600% DV",
        iron: "2% DV",
        calcium: "3% DV"
      },
      healthBenefits: [
        "Boosts immunity with high Vitamin C content",
        "Supports digestion and promotes gut health",
        "Enhances skin health by reducing signs of aging",
        "Aids in detoxification by flushing out toxins",
        "Supports heart health by maintaining cholesterol levels",
        "Improves eye health with natural antioxidants",
        "Natural energy booster",
        "Rich source of antioxidants"
      ],
      whyChoose: [
        "Made from premium hand-picked Amla",
        "100% natural ingredients",
        "No artificial preservatives",
        "Rich in Vitamin C",
        "Traditional recipe with modern standards",
        "Perfect for all age groups",
        "Convenient packaging",
        "Long shelf life without chemicals"
      ],
      storage: "Store in a cool, dry place. After opening, keep in an airtight container and refrigerate.",
      usage: [
        "Consume directly as a healthy snack",
        "Can be added to fruit salads",
        "Ideal for post-workout energy boost",
        "Perfect travel companion"
      ],
      manufacturedBy: "GiKiJoy, 1/523 Jiamau, Hazratganj, Lucknow, Uttar Pradesh 226001",
      email: "contactGikijoy@gmail.com",
      gst: "09ABBFG3476E1ZF",
      packagedOn: "10th Dec 2024",
      useBefore: "12 months from the date of manufacture",
      isHealthy: true,
      ratings: {
        average: 4.5,
        total: 128,
        distribution: {
          5: 80,
          4: 30,
          3: 10,
          2: 5,
          1: 3
        }
      },
      reviews: [
        {
          name: "Priya S.",
          rating: 5,
          date: "2024-03-15",
          comment: "Excellent natural candy! Love the taste and health benefits."
        },
        {
          name: "Rahul M.",
          rating: 4,
          date: "2024-03-10",
          comment: "Great healthy alternative to regular candies."
        }
      ],
      allergenInfo: "Processed in a facility that also processes nuts",
      disclaimer: "Natural product color and taste may vary slightly across batches",
      countryOfOrigin: "India"
    }
  ],
  freshners: [
    {
      id: 1,
      title: "White Wood",
      price: "₹480",
      imgSrc: "/assets/images/room freshners/1.jpg",
      description:
        "A soothing blend of earthy and woody tones, ideal for creating a calm and refreshing ambiance in your living spaces. Perfect for any room or office.",
      fragrance: "Woody",
      netWeight: "200 ml",
      ingredients: ["Natural essential oils", "Aqua base", "Fragrance compounds"],
      storage: "Store in a cool, dry place. Keep away from direct sunlight.",
      manufacturedBy:
        "GiKiJoy, 1/523 Jiamau, Hazratganj, Lucknow, Uttar Pradesh 226001",
      email: "contactGikijoy@gmail.com",
      gst: "09ABBFG3476E1ZF",
      packagedOn: "10th Jan 2024",
      useBefore: "24 months from the date of manufacture",
      brand: "GiKiJoy",
      isEcoFriendly: true,
    },
    {
      id: 2,
      title: "Golden Dust",
      price: "₹480",
      imgSrc: "/assets/images/room freshners/2.jpg",
      description:
        "A luxurious fragrance with a hint of oriental spices, providing a warm and inviting aura. Perfect for special occasions and cozy evenings.",
      fragrance: "Spicy Oriental",
      netWeight: "150 ml",
      ingredients: ["Fragrance oils", "Aqua", "Natural extracts"],
      storage: "Keep in a dry place, away from heat and direct sunlight.",
      manufacturedBy:
        "GiKiJoy, 1/523 Jiamau, Hazratganj, Lucknow, Uttar Pradesh 226001",
      email: "contactGikijoy@gmail.com",
      gst: "09ABBFG3476E1ZF",
      packagedOn: "5th Feb 2024",
      useBefore: "24 months from the date of manufacture",
      brand: "GiKiJoy",
      isEcoFriendly: true,
    },
    {
      id: 3,
      title: "Oudh Fancy",
      price: "₹480",
      imgSrc: "/assets/images/room freshners/3.jpg",
      description:
        "An exotic fragrance with a rich, smoky aroma of oudh that adds a touch of elegance and luxury to any space.",
      fragrance: "Oudh",
      netWeight: "100 ml",
      ingredients: ["Oudh oil", "Aqua base", "Fragrance extracts"],
      storage: "Store in a cool and dry area, away from open flames.",
      manufacturedBy:
        "GiKiJoy, 1/523 Jiamau, Hazratganj, Lucknow, Uttar Pradesh 226001",
      email: "contactGikijoy@gmail.com",
      gst: "09ABBFG3476E1ZF",
      packagedOn: "15th March 2024",
      useBefore: "24 months from the date of manufacture",
      brand: "GiKiJoy",
      isEcoFriendly: true,
    },
    {
      id: 4,
      title: "Romania Garden",
      price: "₹480",
      imgSrc: "/assets/images/room freshners/4.jpg",
      description:
        "A floral paradise with a refreshing blend of blooming roses and jasmine, creating a rejuvenating and delightful ambiance.",
      fragrance: "Floral",
      netWeight: "200 ml",
      ingredients: ["Floral oils", "Water base", "Natural essence"],
      storage: "Keep in a cool, dry place, away from sunlight.",
      manufacturedBy:
        "GiKiJoy, 1/523 Jiamau, Hazratganj, Lucknow, Uttar Pradesh 226001",
      email: "contactGikijoy@gmail.com",
      gst: "09ABBFG3476E1ZF",
      packagedOn: "20th April 2024",
      useBefore: "24 months from the date of manufacture",
      brand: "GiKiJoy",
      isEcoFriendly: true,
    },
    {
      id: 5,
      title: "Eminence",
      price: "₹480",
      imgSrc: "/assets/images/room freshners/5.jpg",
      description:
        "A premium selection with a balanced blend of citrus and musk, creating an uplifting yet sophisticated atmosphere.",
      fragrance: "Citrus Musk",
      netWeight: "200 ml",
      ingredients: ["Citrus extracts", "Essential oils", "Water"],
      storage: "Store in a dry and cool place. Avoid exposure to direct heat.",
      manufacturedBy:
        "GiKiJoy, 1/523 Jiamau, Hazratganj, Lucknow, Uttar Pradesh 226001",
      email: "contactGikijoy@gmail.com",
      gst: "09ABBFG3476E1ZF",
      packagedOn: "1st May 2024",
      useBefore: "24 months from the date of manufacture",
      brand: "GiKiJoy",
      isEcoFriendly: true,
    },
  ]
};

// src/data/listingData.js





export default productData;
