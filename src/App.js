import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E7D32", // Green color for real estate theme
    },
    secondary: {
      main: "#1565C0",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            maxWidth: "100vw",
            overflowX: "hidden",
            // width: "100%",
          }}
        >
          <Header />
          <Box
            sx={{
              flexGrow: 1,
              paddingTop: "64px", // Height of the header
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Add more routes as needed */}
            </Routes>
          </Box>
          <Footer />
          {/* <BottomNav /> removed */}
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
