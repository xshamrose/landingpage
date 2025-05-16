import React, { useState } from "react";
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Fab,
  Zoom,
  useScrollTrigger,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EnquiryForm from "./EnquiryForm";

const BottomNav = () => {
  const [enquiryType, setEnquiryType] = useState(null);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleAction = (type) => {
    if (type === "whatsapp") {
      // Replace with your WhatsApp number
      window.open("https://wa.me/1234567890", "_blank");
    } else {
      setEnquiryType(type);
    }
  };

  const handleClose = () => {
    setEnquiryType(null);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="Call"
            icon={<CallIcon />}
            onClick={() => handleAction("call")}
          />
          <BottomNavigationAction
            label="WhatsApp"
            icon={<WhatsAppIcon />}
            onClick={() => handleAction("whatsapp")}
          />
          <BottomNavigationAction
            label="Email"
            icon={<EmailIcon />}
            onClick={() => handleAction("email")}
          />
        </BottomNavigation>
      </Paper>

      <Zoom in={trigger}>
        <Fab
          color="primary"
          size="small"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 80,
            right: 16,
            zIndex: 1000,
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
    </>
  );
};

export default BottomNav;
