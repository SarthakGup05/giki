import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-gray-100 p-8">
      <section className="text-center py-8" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          Welcome to Mango Delight, your number one source for all things mango.
          We're dedicated to providing you the very best of mango products, with
          an emphasis on quality, freshness, and variety.
        </p>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-right">
          Our Products
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch mb-8"
          data-aos="fade-right"
        >
          <div>
            <img
              src="/assets/images/mango shoot/GikiJoy Cans/DASHEHRI Pulp/0H2A9861.JPG"
              alt="Mango Pulp"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div className="p-6 md:px-10 md:py-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2">Mango Pulp</h3>
            <p className="text-gray-600 mb-2">
              Our mango pulp is made from the finest mangoes, offering a rich
              and delicious flavor. It is perfect for a variety of uses,
              including smoothies, desserts, and as a base for sauces.
            </p>
            <p className="text-gray-600">
              The pulp is carefully processed to retain the natural sweetness
              and aroma of fresh mangoes, ensuring a delightful experience in
              every bite. Whether you're making a refreshing drink or a
              delectable treat, our mango pulp is the ideal choice.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch mb-8"
          data-aos="fade-right"
        >
          <div className="order-last md:order-first p-6 md:px-10 md:py-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2">Mango Tin Cans</h3>
            <p className="text-gray-600 mb-2">
              Enjoy the taste of fresh mangoes all year round with our mango tin
              cans. Packed with the highest quality mangoes, our tin cans
              provide a convenient way to savor the deliciousness of mangoes
              anytime.
            </p>
            <p className="text-gray-600">
              Perfect for baking, cooking, or simply enjoying as a snack, our
              mango tin cans are a versatile addition to your pantry. The
              airtight packaging ensures the mangoes stay fresh and flavorful
              for a long time.
            </p>
          </div>
          <div className="order-first md:order-last">
            <img
              src="/assets/images/GikiJoy Edited Sku Images/WhatsApp Image 2024-06-25 at 18.53.34_c384aa9d.jpg"
              alt="Mango Tin Cans"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch mb-8"
          data-aos="fade-right"
        >
          <div>
            <img
              src="/assets/images/mango shoot/Hybrid/0H2A9390.JPG"
              alt="Variety of Mangoes"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div className="p-6 md:px-10 md:py-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2">Variety of Mangoes</h3>
            <p className="text-gray-600 mb-2">
              We offer a wide variety of mangoes to suit all your culinary
              needs. From the sweet and juicy Alphonso to the tangy and
              flavorful Kesar, we have a mango for every palate.
            </p>
            <p className="text-gray-600">
              Each variety is carefully selected and harvested at the peak of
              ripeness to ensure the best taste and quality. Whether you're
              looking for mangoes to enjoy fresh, in salads, or in recipes, we
              have the perfect variety for you.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="py-8" data-aos="fade-left">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
            <p className="text-gray-600">
              John is the visionary behind Mango Delight, with a passion for
              quality mango products.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600">Head of Marketing</p>
            <p className="text-gray-600">
              Jane's marketing expertise has helped us reach mango lovers all
              over the world.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2">Emily Johnson</h3>
            <p className="text-gray-600">Product Manager</p>
            <p className="text-gray-600">
              Emily ensures that our products meet the highest standards of
              quality.
            </p>
          </div>
        </div>
      </section> */}

      <section className="py-8" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Visit Our Store</h2>
        <p className="text-lg text-gray-700">
          Visit our online store to explore our full range of mango products. We
          are committed to delivering the best mango experience to our
          customers.
        </p>
        {/* <a href="/store" className="text-mango-yellow font-semibold hover:underline">
          Go to Store
        </a> */}
        <hr />
      </section>
    </div>
  );
};

export default AboutUs;
