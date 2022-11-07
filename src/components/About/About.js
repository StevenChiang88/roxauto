import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Custombutton from "../Custombutton/Custombutton";
import AboutCard from "./AboutCard.js/AboutCard";

const About = () => {
  const { t } = useTranslation();
  const AboutData = [
    {
      Icon: "Taiwan-icon.svg",
      Title: `${t("About.AboutBoxTitle1")}`,
      Text: `${t("About.AboutBoxText1")}`,
    },
    {
      Icon: "Gears-icon.svg",
      Title: `${t("About.AboutBoxTitle2")}`,
      Text: `${t("About.AboutBoxText2")}`,
    },

    {
      Icon: "Dollar-icon.svg",
      Title: `${t("About.AboutBoxTitle3")}`,
      Text: `${t("About.AboutBoxText3")}`,
    },
    {
      Icon: "handshake-icon.svg",
      Title: `${t("About.AboutBoxTitle4")}`,
      Text: `${t("About.AboutBoxText4")}`,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "background.paper",
        width: "100%",
        marginTop: "3rem",
      }}
    >
      <Box
        flex={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          margin: "4rem",
        }}
      >
        <Typography sx={{ color: "#3671E9" }}>
          {t("About.AboutTitle")}
        </Typography>
        <Typography
          sx={{
            color: "primary.main",
            fontSize: {
              xs: "20px",
              md: "30px",
              lg: "35px",
            },
          }}
        >
          Rox Auto Parts
        </Typography>
        <Typography
          sx={{
            color: "primary.main",
            fontSize: { xs: "15x", sm: "18px" },
            marginBottom: "1rem",
          }}
        >
          {t("About.AboutText1")}
          <br />
          <br />
          {t("About.AboutText2")}
        </Typography>
        <Custombutton
          color="#E99736"
          content={`${t("generalButton.Products")}`}
        />
      </Box>
      <Box flex={2} sx={{ margin: "4rem" }}>
        <Grid container alignItems="center" spacing={2}>
          {AboutData.map((item) => (
            <AboutCard Icon={item.Icon} Title={item.Title} Text={item.Text} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
