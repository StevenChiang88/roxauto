import { Box, Typography } from "@mui/material";
import React from "react";
import GeneralBannerImg from "../../pictures/GeneralBannerImg.png";

const GeneralBanner = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${GeneralBannerImg})`,
        width: "100%",
        marginTop: { xs: "3rem", md: "5rem" },
        padding: "1rem",
        color: "white",
      }}
    >
      <div style={{ margin: "3rem" }}>
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "30px", lg: "35px" },
            fontWeight: "Medium",
          }}
          variant="h2"
        >
          {props.title}
        </Typography>
      </div>
      <div
        style={{
          margin: "2rem",
        }}
      >
        <Typography variant="h5" sx={{ fontSize: { xs: "15px", sm: "18px" } }}>
          {props.content}
        </Typography>
      </div>
    </Box>
  );
};

export default GeneralBanner;
