import React from "react";
import TravelGrid from "../../../components/Gikijoy gateways/TravelGrid";

const GoaP = [
  {
    id: 1,
    title: "Greek Jungle Villa",
    description:
      "Luxury villa in North Goa, blending modern comfort and rustic charm amidst lush greenery.",
    imgSrc: "/assets/images/jungle villa/12.jpg",
    route: "/gikijoy-getaway/goa/jungle-villa",
  },
  {
    id: 2,
    title: "Aqua Beach Stays Ashwem",
    description:
      "Beachfront accommodation in Mandrem, offering modern amenities, shared lounge, and free WiFi access.",
    imgSrc: "/assets/images/grids/goa/4.jpg",
    route: "/gikijoy-getaway/goa/aquabeach",
  },
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
