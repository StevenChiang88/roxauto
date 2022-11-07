import { Box, ThemeProvider } from "@mui/material";
import React, { useContext } from "react";
import About from "../components/About/About";
import BrandsList from "../components/BrandsList/BrandsList";
import ContactBox from "../components/ContactBox/ContactBox";
import Homebanner from "../components/Homebanner/Homebanner";
import ThemeContext from "../store/ThemeContex";

const HomePage = () => {
  const themeCTX = useContext(ThemeContext);
  return (
    <ThemeProvider theme={themeCTX.muiTheme}>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        <Homebanner />
        <BrandsList />
        <About />
        <ContactBox />
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
