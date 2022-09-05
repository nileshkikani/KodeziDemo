import { Box, Container } from "@mui/material";
import React from "react";
import Footer from "../../Components/Layout/Footer";
import Navigation from "../../Components/Layout/Navigation";

const LandingPage = () => {
  return (
    <Container>
      <Box>
        <Navigation />
        {/* todo */}
        {/* first header and images */}
        Card1
      </Box>
      <Box>
        {/* todo */}
        {/* second and cards with animation */}
        Card2
      </Box>
      <Box>
        {/* todo */}
        {/* third cards */}
        Card3
        <Footer />
      </Box>
    </Container>
  );
};

export default LandingPage;
