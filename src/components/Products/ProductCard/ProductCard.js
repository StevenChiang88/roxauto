import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ProductCard = (props) => {
  console.log(props.partsname);
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "280px", sm: "250px", md: "220px" },
          }}
        >
          <img
            style={{ width: "100%", borderRadius: "10px" }}
            src={require(`../../../pictures/Products/${props.partsname}.jpg`)}
          />
          <Typography> {props.parts}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProductCard;
