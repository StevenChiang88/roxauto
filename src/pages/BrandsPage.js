import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import BrandsCard from "../components/BrandsCard/BrandsCard";
import ContactBox from "../components/ContactBox/ContactBox";
import GeneralBanner from "../components/GeneralBanner/GeneralBanner";
import ItemTabs from "../components/ItemTab/ItemTab";
import ThemeContext from "../store/ThemeContex";

const BrandsPage = () => {
  const { t } = useTranslation();
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
        <GeneralBanner
          title={`${t("BrandsPage.BannerTitle")}`}
          content={`${t("BrandsPage.BannerText")}`}
        />
        <ItemTabs />
        <BrandsCard />
        <ContactBox />
      </Box>
    </ThemeProvider>
  );
};

export default BrandsPage;
