import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "./ProductCard/ProductCard";
import ProductitemTab from "./productitemTab/ProductitemTab";

const Products = () => {
  const { t } = useTranslation();
  const jsonData = require(`../../i18n/${t("Language.lng")}.json`);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "3rem",
        width: { xs: "100%", md: "85%" },
        backgroundColor: "background.paper",
        color: "primary.main",
        padding: "3rem",
      }}
    >
      <Grid container spacing={2}>
        {jsonData.ProductsPage.PartsItem.map((item) => (
          <ProductCard
            key={item.id}
            parts={item.name}
            partsname={item.english}
          />
        ))}
      </Grid>
      <ProductitemTab data={jsonData} />
    </Box>
  );
};

export default Products;
