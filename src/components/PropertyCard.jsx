import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Grid,
  CardActions,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import CheckIcon from "@mui/icons-material/Check";

const PropertyCard = ({ property }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        borderRadius: 2,
        overflow: "hidden",
        transition: "all 0.3s",
        position: "relative",
        "&:hover": {
          boxShadow: "0 16px 32px rgba(0, 0, 0, 0.2)",
          transform: "translateY(-8px)",
        },
      }}
      className="cardbox"
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={property.images[0]}
          alt={property.title}
          sx={{
            transition: "transform 0.5s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            bgcolor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "50%",
            p: 0.5,
          }}
        >
          <IconButton size="small" color="primary">
            <FavoriteIcon fontSize="small" />
          </IconButton>
        </Box>
        {property.featured && (
          <Chip
            label="Featured"
            color="primary"
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              fontWeight: "bold",
            }}
          />
        )}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            p: 1.5,
            background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
            color: "white",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
          >
            {property.title}
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1, pt: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" color="primary" fontWeight="bold">
            {property.price}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <LocationOnIcon fontSize="inherit" sx={{ mr: 0.5 }} />
            {property.location}
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "text.secondary",
                  mb: 0.5,
                }}
              >
                <BedIcon fontSize="small" sx={{ mr: 0.5 }} />
                <Typography variant="body2" fontWeight="medium">
                  {property.bedrooms}
                </Typography>
              </Box>
              <Typography variant="caption" color="text.secondary">
                Beds
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "text.secondary",
                  mb: 0.5,
                }}
              >
                <BathtubIcon fontSize="small" sx={{ mr: 0.5 }} />
                <Typography variant="body2" fontWeight="medium">
                  {property.bathrooms}
                </Typography>
              </Box>
              <Typography variant="caption" color="text.secondary">
                Baths
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "text.secondary",
                  mb: 0.5,
                }}
              >
                <SquareFootIcon fontSize="small" sx={{ mr: 0.5 }} />
                <Typography variant="body2" fontWeight="medium">
                  {property.area}
                </Typography>
              </Box>
              <Typography variant="caption" color="text.secondary">
                Sq Ft
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body2" color="text.secondary" paragraph>
          {property.description.length > 100
            ? `${property.description.substring(0, 100)}...`
            : property.description}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", mr: 2 }}
            >
              <CheckIcon color="primary" fontSize="small" sx={{ mr: 0.5 }} />
              <Typography variant="caption" color="text.secondary">
                {amenity}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            borderRadius: 1.5,
            py: 1,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
