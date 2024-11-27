import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductSlider.css';
import {
  Box,
  Heading,
  Text,
  Image,
  Card,
  CardBody,
  Button,
  keyframes,
} from '@chakra-ui/react';

const mangoContent = [
  {
    title: 'Dashehari Mangoes',
    link: '/gikijoy-farm/mangoes',
    price: '₹200',
    content: (
      <Image
        src="/assets/images/mango shoot/Dashehri/0H2A9594.JPG"
        alt="Dashehari Mangoes"
        objectFit="cover"
        w="100%"
        h="100%"
      />
    ),
  },
  {
    title: 'Cans',
    link: '/gikijoy-farm/tin-cans',
    price: '₹150',
    content: (
      <Image
        src="/assets/images/GikiJoy Edited Sku Images/WhatsApp Image 2024-06-25 at 19.20.37_394af388.jpg"
        alt="Cans"
        objectFit="cover"
        w="100%"
        h="100%"
      />
    ),
  },
  {
    title: 'Hybrid',
    link: '/gikijoy-farm/mangoes',
    price: '₹100',
    content: (
      <Image
        src="/assets/images/mango shoot/Hybrid/0H2A9425.JPG"
        alt="Hybrid Mangoes"
        objectFit="cover"
        w="100%"
        h="100%"
      />
    ),
  },
];

export function MangoProducts1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Define keyframes for the reveal animation
  const revealFromBottom = keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  `;

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200">
      <Heading as="h2" size="xl" textAlign="center" mb={8} color="yellow.800">
        Our Products
      </Heading>
      <Slider {...settings}>
        {mangoContent.map((item, index) => (
          <Link to={item.link} key={index} className="group">
            <Card
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="xl"
              m={4}
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: 'scale(1.08)' }}
            >
              <Box
                h="80"
                md="96"
                lg="112"
                overflow="hidden"
                position="relative"
                bgGradient="linear(to-b, yellow.50, white)"
              >
                {item.content}
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  bg="blackAlpha.700"
                  opacity="0"
                  _groupHover={{
                    opacity: '1',
                    animation: `${revealFromBottom} 0.4s ease-out`,
                  }}
                  transition="opacity 0.2s"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={2}
                >
                  <Button
                    colorScheme="yellow"
                    bg="yellow.400"
                    color="black"
                    borderRadius="full"
                    _hover={{ bg: 'yellow.500' }}
                    size="md"
                  >
                    Quick View
                  </Button>
                </Box>
              </Box>
              <CardBody textAlign="center">
                <Heading
                  as="h3"
                  size="md"
                  mb={1}
                  color="gray.800"
                  _groupHover={{ color: 'yellow.600' }}
                >
                  {item.title}
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  {item.price}
                </Text>
              </CardBody>
            </Card>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
