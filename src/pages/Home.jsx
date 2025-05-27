import React, { useRef, useEffect, useState } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import PropertyCard from "../components/PropertyCard";
import LocationMap from "../components/LocationMap";
import properties from "../data/properties.json";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EnquiryForm from "../components/EnquiryForm";

const Home = () => {
  const featureRef = useRef(null);
  const [showFABs, setShowFABs] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [enquiryType, setEnquiryType] = useState(null);

  // Show FABs after scrolling past the Featured Properties section
  useEffect(() => {
    const handleScroll = () => {
      if (featureRef.current) {
        const rect = featureRef.current.getBoundingClientRect();
        setShowFABs(rect.bottom < 0);
      }
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAction = (type) => {
    if (type === "whatsapp") {
      window.open("https://wa.me/1234567890", "_blank");
    } else {
      setEnquiryType(type);
    }
  };

  const handleClose = () => setEnquiryType(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box>
      <HeroSection />

      {/* Featured Properties Section */}
      <Container maxWidth="xl" sx={{ py: 6 }} ref={featureRef}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Featured Properties
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {properties.properties.map((property) => (
            <Grid
              item
              key={property.id}
              xs={12}
              sm={6}
              md={4}
              sx={{ height: "100%" }}
            >
              <PropertyCard property={property} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Property Locations Section */}
      <Container maxWidth="lg" sx={{ pb: 6 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Property Locations
        </Typography>

        <LocationMap properties={properties.properties} />
      </Container>

      {/* Floating Action Buttons */}
      <Zoom in={showFABs}>
        <Box
          sx={{
            position: "fixed",
            bottom: 24,
            right: 16,
            zIndex: 1300,
            display: "flex",
            flexDirection: "row", // horizontal layout
            gap: 2, // horizontal gap between FABs
          }}
        >
          <Fab
            color="success"
            size="medium"
            aria-label="whatsapp"
            onClick={() => handleAction("whatsapp")}
          >
            <WhatsAppIcon />
          </Fab>
          <Fab
            color="primary"
            size="medium"
            aria-label="call"
            onClick={() => handleAction("call")}
          >
            <CallIcon />
          </Fab>
          <Fab
            color="secondary"
            size="medium"
            aria-label="email"
            onClick={() => handleAction("email")}
          >
            <EmailIcon />
          </Fab>
        </Box>
      </Zoom>

      {/* Scroll to Top FAB */}
      <Zoom in={showScrollTop}>
        <Fab
          color="primary"
          size="small"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: showFABs ? 88 : 80, // place above the row of FABs if visible
            right: 16,
            zIndex: 1300,
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>

      <EnquiryForm
        open={!!enquiryType}
        onClose={handleClose}
        type={enquiryType}
      />
    </Box>
  );
};

export default Home;
