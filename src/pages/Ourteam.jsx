import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Pranav Sharma",
    role: "Founder, Total FulFill (India) & Partner, Total FullFill LLC (USA)",
    description: `Started off the business of gifting way back in 2001 as VP & Partner in IGP.com from 2001 to 2014. He then became the CEO & Partner of IGP.com and started the USA Office from 2014 to 2019. In 2019, he came back to India, sold his stake, and exited the company. For more than 18 years, he was a key member for developing and building the business of IGP.com, one of the No.1 gifting websites and Top B2C brands in India. Currently owns e-commerce gifting websites by the name of www.NriBakhi.com and www.NriGifting.com with fulfillment offices both in India & USA. Founder of UttarakhandHemp.com, working on Hemp seed and its products.`,
    image: "/assets/images/Our team/2.jpg",
  },
  {
    name: "Nupur Sharma",
    role: "Marketing Director at Crowdstrike | Founder of Sukoon Wellness Resources",
    description: `Nearly 25 years of experience in marketing and sales with industry giants like Cisco & Symantec. Currently serves as Marketing Director in Crowdstrike, a multinational Cyber Security company. Founder of Sukoon Wellness Resources. Expertise in marketing strategy, revenue generation, enterprise marketing, brand strategy, digital marketing, market intelligence, corporate communications, events marketing, and customer engagement.`,
    image: "/assets/images/Our team/1.jpg",
  },
  {
    name: "Kirti Sharma",
    role: "Corporate Gifting Professional at GikiJoy | Curation & Operations Lead at NRIRAKHI.com",
    description: `Spent 3 years in advertising at industries like Ogilvy & Mathers and Contract Advertising. Building on this foundation, spent the last 13 years passionately curating unforgettable gifting experiences at leading platforms such as GP and FNP. Currently serves as a Corporate Gifting Professional at GiKiJoy, where she leads curation, operations, and procurement. Additionally, plays a pivotal role at NRIRAKHI.com, overseeing curation, operations, and procurement to ensure seamless experiences for valued clientele. Expertise in Gifting Curation & Personalization, Operational Excellence & Procurement Management, and Corporate Gifting Solutions.`,
    image: "/assets/images/Our team/3.jpg",
  },
  // Add more team members as needed
];

const OurTeam = () => {
  const [contentHeight, setContentHeight] = useState("auto");

  useEffect(() => {
    // Initialize AOS library
    AOS.init();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-800 text-white">
        <div className="absolute inset-0">
          {/* <img
            className="w-full h-full object-cover opacity-50"
            src="https://via.placeholder.com/1200x300"
            alt="Our Team"
          /> */}
        </div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl">
            We are a group of passionate professionals dedicated to excellence.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center bg-white rounded-lg shadow-lg overflow-hidden`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} // AOS animation based on index
            >
              <div className="w-full md:w-1/2 h-auto">
                <img
                  className="w-full h-full object-cover"
                  src={member.image}
                  alt={member.name}
                  style={{
                    maxHeight: "480px",
                    maxWidth: "580px",
                    width: "100%;",
                    height: "auto;",
                  }} // Limiting max height to prevent stretching
                />
              </div>
              <div
                className="p-2 md:w-2/4 flex flex-col justify-start md:justify-center pt-4"
                style={{ height: "auto" }}
              >
                <h3 className="text-lg font-bold mb-2 relative">
                  <span className="text-yellow-500">{member.name}</span>
                  <span className="block h-0.5 bg-yellow-500 absolute bottom-0 left-0 right-0"></span>
                </h3>
                <p className="text-gray-600 mb-4 font-semibold">
                  {member.role}
                </p>
                <p className="text-gray-700 font-semibold">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
