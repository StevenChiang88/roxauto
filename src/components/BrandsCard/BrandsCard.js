import { Box } from "@mui/material";
import React from "react";
import BrandCard from "./BrandCard/BrandCard";

const BrandsCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "3rem",
        width: { xs: "100%", md: "85%" },
      }}
    >
      <BrandCard />
    </Box>
  );
};

export default BrandsCard;
