import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Custombutton from "../Custombutton/Custombutton";
import SliderPhoto from "../SliderPhoto/SliderPhoto";

const OfficePhoto = ["Office/01.jpeg", "Office/02.jpg"];

const Homebanner = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        backgroundColor: "background.paper",
        width: { xs: "100%", md: "75%" },
        marginTop: { xs: "3rem", md: "8rem" },
        padding: "3rem",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          margin: "2rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "20px",
              sm: "25px",
              md: "30px",
              lg: "35px",
            },
            color: "primary.main",
            fontWeight: "Medium",
          }}
        >
          {t("HomePage.BannerTitle1")}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "20px", sm: "25px", md: "30px", lg: "35px" },
            color: "#3671E9",
            fontWeight: "Medium",
          }}
        >
          {t("HomePage.BannerTitle2")}
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "primary.main",
            mt: 5,
            fontSize: { xs: "15px", sm: "18px" },
          }}
        >
          {t("HomePage.BannerText1")}
          <br />
          <br />

          {t("HomePage.BannerText3")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            marginTop: "3rem",
            marginBottom: "3rem",

            gap: 3,
          }}
        >
          <NavLink className="NavLink" to="/Contact">
            <Custombutton
              color={"#3671E9"}
              content={`${t("generalButton.Contact")}`}
            />
          </NavLink>

          <NavLink className="NavLink" to="/Products">
            <Custombutton
              color={"#E99736"}
              content={`${t("generalButton.Products")}`}
            />
          </NavLink>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          margin: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SliderPhoto Sliderphoto={OfficePhoto} />
      </Box>
    </Box>
  );
};

export default Homebanner;
