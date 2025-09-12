import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Footer from "./layout/Footer";
import Navbar from "./layout/Nav";
import GatewayNavbar from "./layout/gatewaysLayout";
import AquaNavbar from "./layout/AquaNav";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/Aboutus";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "./layout/Layout";
import { MangoPulpPage } from "./pages/MangoPulp";
import { MangoCansPage } from "./pages/MangoProducts2";
import Mangoes from "./pages/Mangoes";
import ProductDetail from "./components/ProductDetail";
import ScrollToTop from "./components/Utils/ScrollToTop";
// import OurTeam from "./pages/Ourteam";
import Gifts from "./pages/Gifts";
import Gateway from "./pages/Gatewaypages/Gateway";
import JungleVilla from "./pages/Gatewaypages/JungleVilla";
import Ranikhet from "./pages/Gatewaypages/Rankhet";
import BNResort from "./pages/Gatewaypages/BNResort";
import ChahalFarms from "./pages/Gatewaypages/ChahalFarms";
import RouteCards from "./components/RouteCards";
import Uttrakhand from "./pages/Gatewaypages/Grids/Uttarakhand";
import Ashdale from "./pages/Gatewaypages/Ashdale";
import Goa from "./pages/Gatewaypages/Grids/Goa";
import AquaBeach from "./pages/Gatewaypages/AquaBeach";
import FernCottage from "./pages/Gatewaypages/FernCottage";
import BabaAyurveda from "./pages/Gatewaypages/BabaAyurveda";
import ThankYou from "./pages/Gatewaypages/ThankYou";
import Aquafarms from "./AquaFarms/Components/pages/Aquafarms";
import GikijoyProductsHome from "./GikiJoyProducts/Components/Home";
import RoomProduct from "./GikiJoyProducts/Components/RoomFreshnerGrid";
import ComingSoonPage from "./pages/ComingSoonPage";
import GiftHome from "./pages/GiftHome";
import Hampers from "./gikijoyGifts/components/MangoBaskets";

import LoveStoryVilla from "./pages/Gatewaypages/LoveVilla";
import BedVilla from "./pages/Gatewaypages/3bedVillaa";

// Initialize AOS animations
AOS.init();

function AppContent() {
  const location = useLocation();

  // Determine which navbar to display based on the route
  const isGatewayRoute = location.pathname.startsWith("/getaways");
  const isAquaFarmRoute =
    location.pathname.startsWith("/param-aqua-farm") ||
    location.pathname === "/";

  return (
    <div>
      {/* Conditional Navbar Rendering */}
  {location.pathname === "/" ? (
    <GatewayNavbar />
  ) : location.pathname.startsWith("/gikijoy-products") ? (
    <GatewayNavbar />
  ) : isGatewayRoute ? (
    <GatewayNavbar />
  ) : isAquaFarmRoute ? (
    <AquaNavbar />
  ) : (
    <Navbar />
  )}


      <main>
        <Routes>
          {/* RouteCards displayed for "/" */}
          <Route path="/" element={<RouteCards />} />

          {/* GikiJoy Farms Routes */}
          <Route path="/gikijoy-farm" element={<Home />} />
          <Route
            path="/about"
            element={
              <Layout>
                <AboutUs />
              </Layout>
            }
          />
          <Route
            path="/contactus"
            element={
              <Layout>
                <ContactUs />
              </Layout>
            }
          />
          <Route
            path="/gikijoy-farm/tin-cans"
            element={
              <Layout>
                <MangoCansPage />
              </Layout>
            }
          />
          <Route
            path="/gikijoy-farm/mango-pulps"
            element={
              <Layout>
                <MangoPulpPage />
              </Layout>
            }
          />
          <Route
            path="/gikijoy-farm/corporate-gifts"
            element={
              <Layout>
                <Gifts />
              </Layout>
            }
          />
          <Route
            path="/gikijoy-farm/food-products"
            element={
              <Layout>
                <Mangoes />
              </Layout>
            }
          />
          <Route
            path="/gikijoy-farm/product/:category/:id"
            element={
              <Layout>
                <ProductDetail />
              </Layout>
            }
          />
          {/* <Route
            path="/our-team"
            element={
              <Layout>
                <OurTeam />
              </Layout>
            }
          /> */}

          {/* GikiJoy Gateways Routes */}
          <Route path="/getaways" element={<Gateway />} />
          <Route
            path="/getaways/goa/jungle-villa"
            element={<JungleVilla />}
          />
          <Route
            path="/getaways/goa/love-villa"
            element={<LoveStoryVilla />}
          />
            <Route
            path="/getaways/goa/3-bedroom-villa"
            element={<BedVilla />}
          />
          <Route
            path="/getaways/uttarakhand/sukoon"
            element={<Ranikhet />}
          />
          <Route path="/getaways/punjab" element={<ChahalFarms />} />
          <Route
            path="/getaways/uttarakhand/bn"
            element={<BNResort />}
          />
          <Route
            path="/getaways/uttarakhand/ashdale"
            element={<Ashdale />}
          />
          <Route
            path="/getaways/uttarakhand/fern"
            element={<FernCottage />}
          />
          <Route
            path="/getaways/uttarakhand/babajiayurveda"
            element={<BabaAyurveda />}
          />
          <Route
            path="/getaways/goa/aquabeach"
            element={<AquaBeach />}
          />
          <Route path="/getaways/uttarakhand" element={<Uttrakhand />} />
          <Route path="/getaways/goa" element={<Goa />} />
          <Route path="/getaways/thankyou" element={<ThankYou />} />

          {/* Aqua Farms Routes */}
          <Route path="/param-aqua-farm" element={<Aquafarms />} />
           {/* GikiJoy products Routes */}
          <Route path="/gikijoy-products" element={<GikijoyProductsHome />} />
          <Route path="/gikijoy-products/room-freshner" element={<RoomProduct />} />
          {/* Dairy farm routes */}
          <Route path="/gikijoy-dairy-farm" element={<ComingSoonPage />} />
         {/* gikijoy gifting */}
          <Route path="/gikijoy-gifts" element={<GiftHome />} />
          <Route path="/gikijoy-gifts/products" element={<Hampers />} />

        </Routes>
      </main>

      {/* Footer always displayed */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Helmet>
          {/* Default SEO tags */}
          <title>GikiJoy - Premium Experiences & Products</title>
          <meta name="description" content="Discover GikiJoy - Your destination for premium experiences, products, and stays. Explore our collection of quality products and exceptional stays." />
          <meta name="keywords" content="GikiJoy, premium products, stays, experiences, mangoes, aqua farms, gateways" />
          <meta name="author" content="GikiJoy" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          
          {/* Open Graph / Social Media Meta Tags */}
          <meta property="og:title" content="GikiJoy - Premium Experiences & Products" />
          <meta property="og:description" content="Discover GikiJoy - Your destination for premium experiences, products, and stays." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://gikijoy.com" />
          <meta property="og:image" content="/assets/images/logo/GikiJoy Logo Black.png" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="GikiJoy - Premium Experiences & Products" />
          <meta name="twitter:description" content="Discover GikiJoy - Your destination for premium experiences, products, and stays." />
          <meta name="twitter:image" content="/assets/images/logo/GikiJoy Logo Black.png" />
        </Helmet>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
