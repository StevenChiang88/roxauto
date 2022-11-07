import { Typography, Stack, Box } from "@mui/material";
import React from "react";
import Custombutton from "../Custombutton/Custombutton";
import { Email, Facebook } from "@mui/icons-material";
import Menulist from "../Menulist/Menulist";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        background: "#121318",
        color: "white",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "15px", sm: "20px" },
            }}
          >
            Rox Auto Parts
          </Typography>

          <Stack
            direction="row"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <a target="_blank" href="https://www.facebook.com/roxqualityparts/">
              <Facebook
                sx={{
                  fontSize: { xs: "30px", sm: "40px" },
                  color: "#767474",
                  "&:hover": {
                    color: "white",
                  },
                }}
              />
            </a>

            <a href="mailto:rox@rox.com.tw">
              <Email
                sx={{
                  fontSize: { xs: "30px", sm: "40px" },
                  color: "#767474",
                  "&:hover": {
                    color: "white",
                  },
                }}
              />
            </a>
          </Stack>
        </Box>
        <Box>
          <Menulist />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink className="NavLink" to="/Contact">
            <Custombutton color="#E99736" content="Contact Us" />
          </NavLink>
        </Box>
        <Box></Box>
      </Box>
      <hr
        style={{
          width: "45%",
          color: "#909090",
          margin: "1rem",
        }}
      />
      <Typography
        sx={{ color: "#767474", fontSize: { xs: "12px", sm: "15px" } }}
      >
        Copyright © 2022 by ROX International Corporation All Right Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
