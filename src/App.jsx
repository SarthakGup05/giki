import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Nav";
import GatewayNavbar from "./layout/gatewaysLayout";
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
import OurTeam from "./pages/Ourteam";
import Gifts from "./pages/Gifts";
import Gateway from "./pages/Gatewaypages/Gateway";
import JungleVilla from "./pages/Gatewaypages/JungleVilla";
import Ranikhet from "./pages/Gatewaypages/Rankhet";
import BNResort from "./pages/Gatewaypages/BNResort";
import ChahalFarms from "./pages/Gatewaypages/ChahalFarms";
import RouteCards from "./components/RouteCards";
import TravelGrid from "./components/Gikijoy gateways/TravelGrid";
import { List } from "@chakra-ui/react";
import listingData from "./app/ListingData";
import Uttrakhand from "./pages/Gatewaypages/Grids/Uttrakhand";
import Ashdale from "./pages/Gatewaypages/Ashdale";
import Goa from "./pages/Gatewaypages/Grids/Goa";
import AquaBeach from "./pages/Gatewaypages/AquaBeach";
import FernCottage from "./pages/Gatewaypages/FernCottage";
import BabaAyurveda  from "./pages/Gatewaypages/BabaAyurveda";
import ThankYou from "./pages/Gatewaypages/ThankYou";

// Initialize AOS animations
AOS.init();

function AppContent() {
  const location = useLocation();

  // Check if the route starts with "/gikijoy-getaway" or is "/"
  const isGatewayRoute =
    location.pathname.startsWith("/gikijoy-getaway") || location.pathname === "/";

  return (
    <div>
      {/* Display the correct navbar based on the route */}
      {isGatewayRoute ? <GatewayNavbar /> : <Navbar />}

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
            path="/gikijoy-farm/mangoes"
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
          <Route
            path="/our-team"
            element={
              <Layout>
                <OurTeam />
              </Layout>
            }
          />

          {/* GikiJoy Gateways Routes */}
          <Route path="/gikijoy-getaway" element={<Gateway />} />
          <Route path="/gikijoy-getaway/goa/jungle-villa" element={<JungleVilla />} />
          <Route
            path="/gikijoy-getaway/uttrakhand/sukoon"
            element={<Ranikhet />}
          />
          <Route path="/gikijoy-getaway/punjab" element={<ChahalFarms />} />
          <Route path="/gikijoy-getaway/uttrakhand/bn" element={<BNResort />} />
          <Route path="/gikijoy-getaway/uttrakhand/ashdale" element={<Ashdale />} />
          <Route path="/gikijoy-getaway/uttrakhand/fern" element={<FernCottage />} />
          <Route path="/gikijoy-getaway/uttrakhand/babajiayurveda" element={<BabaAyurveda />} />
        
          <Route path="/gikijoy-getaway/goa/aquabeach" element={<AquaBeach />} />
          <Route path="/gikijoy-getaway/uttrakhand" element={<Uttrakhand />} />
          <Route path="/gikijoy-getaway/goa" element={<Goa />} />
          <Route path="/gikijoy-getaway/thankyou" element={<ThankYou />} />
        </Routes>
      </main>

      {/* Footer always displayed */}
      <Footer />
    </div>
  );
}



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
