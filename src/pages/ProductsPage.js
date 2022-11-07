import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ContactBox from "../components/ContactBox/ContactBox";
import GeneralBanner from "../components/GeneralBanner/GeneralBanner";
import Products from "../components/Products/Products";
import ThemeContext from "../store/ThemeContex";

const ProductsPage = () => {
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
          title={`${t("ProductsPage.BannerTitle")}`}
          content={`${t("ProductsPage.BannerText")}`}
        />
        <Products />
        <ContactBox />
      </Box>
    </ThemeProvider>
  );
};

export default ProductsPage;
