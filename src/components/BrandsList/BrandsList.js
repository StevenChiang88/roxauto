import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Brand from "./Brand/Brand";

const BrandsList = () => {
  const { t } = useTranslation();
  const BrandsData = [
    {
      brandName: "SASAKI",
      brandText: `${t("BrandsBox.SASAKI")}`,
      brandImg: "SASAKI.jpg",
    },

    {
      brandName: "NISHIOKA",
      brandText: `${t("BrandsBox.NISHIOKA")}`,
      brandImg: "NISHIOKA.jpg",
    },
    {
      brandName: "TOKAI",
      brandText: `${t("BrandsBox.TOKAI")}`,
      brandImg: "TOKAI.jpg",
    },
    {
      brandName: "Taiwan Manufacturers",
      brandText: `${t("BrandsBox.Taiwan")}`,
      brandImg: "Taiwan.png",
    },
  ];
  return (
    <>
      <Box
        sx={{
          width: "75%" ,
          margin: "3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "20px", sm: "25px", md: "30px", lg: "40px" },
              color: "primary.main",
              fontWeight: "Medium",
            }}
          >
            {t("BrandsBox.BrandsTitle")}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "primary.main",
              fontSize: { xs: "15px", sm: "18px" },
              marginTop: "1rem",
            }}
          >
            {t("BrandsBox.BrandsText")}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: { xs: "60%", sm: "75%" } }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {BrandsData.map((item) => (
            <Brand
              key={item.brandName}
              brandName={item.brandName}
              brandText={item.brandText}
              brandImg={item.brandImg}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default BrandsList;
