// src/data/listingData.js
const listingData = [
  {
    id: 1,
    title: "Mysa | Luxurious 2BHK | Entire apartment",
    location: "Jaipur, India",
    description: "This luxurious 2BHK apartment offers comfort with a modern touch. Perfect for families or friends visiting Jaipur.",
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
      // Additional images can be added here
    ],
    reviews: [
      { user: 'User1', rating: 5, comment: 'Amazing stay! The apartment was super clean and well-equipped.' },
      { user: 'User2', rating: 4, comment: 'Lovely place, very comfortable for our family stay.' },
      // Additional reviews can be added here
    ],
    outOfStock: false,
  },
  {
    id: 2,
    title: "Cozy Cottage in the Hills",
    location: "Manali, India",
    description: "A peaceful cottage nestled in the hills of Manali, ideal for a quiet and serene retreat.",
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
      // Additional images can be added here
    ],
    reviews: [
      { user: 'User3', rating: 5, comment: 'Peaceful and beautiful location, great for a relaxing break.' },
      { user: 'User4', rating: 4, comment: 'Perfect for a weekend getaways, enjoyed the mountain views!' },
      // Additional reviews can be added here
    ],
    outOfStock: false,
  },
  // Additional listings can be added here following the same structure
];

export default listingData;
