import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import React from "react";

const Brand = (props) => {
  return (
    <Grid item xs={12} sm={6}>
      <Card
        sx={{
          flex: "1",
          height: "auto",
          borderRadius: "10px",
        }}
      >
        <CardMedia
          component="img"
          image={require(`../../../pictures/BrandsPictures/${props.brandImg}`)}
          alt={props.brandName}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: { xs: "20px", md: "25px" },
            }}
          >
            {props.brandName}
          </Typography>
          <Typography variant="p" sx={{ fontSize: { xs: "15px", sm: "18px" } }}>
            {props.brandText}
            <br />
            <br />
            {props.brandContent}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Brand;
