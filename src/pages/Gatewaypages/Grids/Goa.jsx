import React from "react";
import TravelGrid from "../../../components/Gikijoy gateways/TravelGrid";

const GoaP = [
  {
    id: 1,
    title: "Greek Jungle Villa",
    description:
      "Luxury villa in North Goa, blending modern comfort and rustic charm amidst lush greenery.",
    imgSrc: "/assets/images/jungle villa/12.jpg",
    route: "/getaways/goa/jungle-villa",
  },
  {
    id: 2,
    title: "Aqua Beach Stays Ashwem",
    description:
      "Beachfront accommodation in Mandrem, offering modern amenities, shared lounge, and free WiFi access.",
    imgSrc: "/assets/images/grids/goa/4.jpg",
    route: "/getaways/goa/aquabeach",
  },
  {
    id: 4,
    title: "Villa No. 10 with 1 Bedroom and Private Pool",
    description:
      "villa No. 10 is a stunning accommodation in Siolim, Goa, just 8 km from Anjuna Beach. This villa features a private pool, a fully equipped kitchen, and a spacious living area, making it perfect for a romantic getaways or a family vacation.",

    imgSrc: "/assets/images/3bedvilla/1.avif",
    route: "/getaways/goa/3-bedroom-villa",
  },
  {
    id: 3,
    title: "Villa No. 1 & 9 With 3 Bedroom Set and Private Pool",
    description:
      "A romantic getaways in the heart of Goa, this villa offers a private pool and elegantly designed living area.",
    imgSrc: "/assets/images/Lovevilla/3.avif",
    route: "/getaways/goa/love-villa",
  },

  // {
  //   id: 5,
  //   title: "Aqua Beach Stays Ashwem",
  //   description:
  //     "Beachfront accommodation in Mandrem, offering modern amenities, shared lounge, and free WiFi access.",
  //   imgSrc: "/assets/images/grids/goa/7.jpg",
  //   route: "/gikijoy-getaways/goa/aquabeach",
  // },
  // {
  //   id: 6,
  //   title: "Aqua Beach Stays Mandrem",
  //   description:
  //     "Beachfront accommodation in Mandrem, offering modern amenities, shared lounge, and free WiFi access.",
  //   imgSrc: "/assets/images/grids/goa/8.jpg",
  //   route: "/gikijoy-getaways/goa/aquabeach",
  // },
];

const Goa = () => {
  const category = "Goa";
  return (
    <>
      <TravelGrid products={GoaP} category={category} />
    </>
  );
};

export default Goa;
