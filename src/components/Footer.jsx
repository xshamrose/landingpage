import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const bottomNavHeight = 56; // Height of bottom navigation

  return (
    <Paper
      component="footer"
      square
      elevation={3}
      sx={{
        bgcolor: "background.paper",
        pt: 6,
        pb: isMobile ? `${bottomNavHeight + 24}px` : 6, // Extra padding for bottom navigation on mobile
        mt: 8,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              color="text.primary"
              fontWeight="bold"
              gutterBottom
            >
              Luxury Estates
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Your trusted partner in finding the perfect luxury property. We
              provide exceptional service and exclusive listings.
            </Typography>
            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <IconButton
                size="small"
                color="primary"
                aria-label="facebook"
                sx={{ bgcolor: "rgba(46, 125, 50, 0.1)" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                size="small"
                color="primary"
                aria-label="twitter"
                sx={{ bgcolor: "rgba(46, 125, 50, 0.1)" }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                size="small"
                color="primary"
                aria-label="instagram"
                sx={{ bgcolor: "rgba(46, 125, 50, 0.1)" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                size="small"
                color="primary"
                aria-label="linkedin"
                sx={{ bgcolor: "rgba(46, 125, 50, 0.1)" }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              color="text.primary"
              fontWeight="bold"
              gutterBottom
            >
              Quick Links
            </Typography>
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              display="block"
              sx={{ mb: 1.5, "&:hover": { color: "primary.main" } }}
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/properties"
              color="inherit"
              display="block"
              sx={{ mb: 1.5, "&:hover": { color: "primary.main" } }}
            >
              Properties
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              color="inherit"
              display="block"
              sx={{ mb: 1.5, "&:hover": { color: "primary.main" } }}
            >
              About Us
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              color="inherit"
              display="block"
              sx={{ mb: 1.5, "&:hover": { color: "primary.main" } }}
            >
              Contact
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              color="text.primary"
              fontWeight="bold"
              gutterBottom
            >
              Contact Info
            </Typography>
            <Box sx={{ display: "flex", mb: 2 }}>
              <LocationOnIcon sx={{ mr: 1 }} color="primary" fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                123 Luxury Avenue, Beverly Hills, CA 90210
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mb: 2 }}>
              <PhoneIcon sx={{ mr: 1 }} color="primary" fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                +1 (123) 456-7890
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mb: 2 }}>
              <EmailIcon sx={{ mr: 1 }} color="primary" fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                info@luxuryestates.com
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              color="text.primary"
              fontWeight="bold"
              gutterBottom
            >
              Business Hours
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Monday - Friday: 9:00 AM - 6:00 PM
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Saturday: 10:00 AM - 4:00 PM
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sunday: Closed
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 4, mb: 4 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Luxury Estates. All rights reserved.
        </Typography>
      </Container>
    </Paper>
  );
};

export default Footer;
