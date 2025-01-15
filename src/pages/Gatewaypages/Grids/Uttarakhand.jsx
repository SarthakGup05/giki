import React from "react";
import TravelGrid from "../../../components/Gikijoy gateways/TravelGrid";

const Uttrakhandp = [
  {
    id: 5,
    title: "Bhole Baba Ayurvedic Hospital and Research centre",
    description:
      "Ayurvedic treatments in a peaceful environment, linked to the Baba Haidakhan.",
    imgSrc: "/assets/images/grids/uk/baba ayurveda.png",
    route: "/gikijoy-getaway/uttarakhand/babajiayurveda",
  },
  {
    id: 1,
    title: "Sukoon Nature Retreat",
    description:
      "Peaceful retreat in Ranikhet, surrounded by lush greenery, perfect for relaxation.",
    imgSrc: "/assets/images/sukoon nature/6.jpg",
    route: "/gikijoy-getaway/uttarakhand/sukoon",
  },
  {
    id: 2,
    title: "BN Resort",
    description:
      "Luxury resort with stunning architecture and landscapes, perfect for a peaceful, high-end retreat.",
    imgSrc: "/assets/images/BnResort/_DSC2338.jpg",
    route: "/gikijoy-getaway/uttarakhand/bn",
  },
  {
    id: 3,
    title: "WELCOMHERITAGE ASHDALE",
    description:
      "Serene retreat surrounded by oaks, deodars, and a beautiful lake, ideal for nature lovers.",
    imgSrc: "/assets/images/grids/uk/ashdale.jpg",
    route: "/gikijoy-getaway/uttarakhand/ashdale",
  },
  {
    id: 4,
    title: "Fern Cottage",
    description:
      "Tranquil getaway surrounded by nature, offering comfort and peace for families and travelers.",
    imgSrc: "/assets/images/fern cottage/1.jpg",
    route: "/gikijoy-getaway/uttarakhand/fern",
  },
];





const Uttrakhand = () => {
  const category = "uttarakhand";
  return (
    <>
      <TravelGrid products={Uttrakhandp} category={category} />
    </>
  );
};

export default Uttrakhand;
