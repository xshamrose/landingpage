import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop",
      title: "Find Your Dream Home",
      subtitle: "Discover luxury properties in prime locations",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&auto=format&fit=crop",
      title: "Luxury Living",
      subtitle: "Experience the finest in modern living",
    },
    {
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&auto=format&fit=crop",
      title: "Premium Properties",
      subtitle: "Exclusive homes for discerning buyers",
    },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        marginTop: "-64px",
        maxWidth: "100vw",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              height: "100vh",
              width: "100vw",
              maxWidth: "100vw",
              overflowX: "hidden",
              overflowY: "hidden",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100vw",
                filter: "brightness(0.7)",
              }}
            />
            <Container
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                width: "100vw",
                maxWidth: "100vw",
                pointerEvents: "none",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 2,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                >
                  {slide.subtitle}
                </Typography>
              </motion.div>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;
