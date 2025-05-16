import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import PropertyCard from "../components/PropertyCard";
import LocationMap from "../components/LocationMap";
import properties from "../data/properties.json";

const Home = () => {
  return (
    <Box>
      <HeroSection />

      {/* Featured Properties Section */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Featured Properties
        </Typography>

        <Grid container spacing={3}>
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
    </Box>
  );
};

export default Home;
