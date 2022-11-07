import { Grid, Card, Typography, CardMedia } from "@mui/material";
import React from "react";

const AboutCard = (props) => {
  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: { xs: "auto", md: "220px" },
          padding: "1rem",
          backgroundColor: "background.default",
          borderRadius: "20px",
        }}
      >
        <CardMedia
          component="img"
          image={require(`../../../pictures/icons/${props.Icon}`)}
          alt={props.Title}
          sx={{ width: "auto", height: "40px", bgColor: "white" }}
        />
        <Typography>{props.Title}</Typography>
        <Typography>{props.Text}</Typography>
      </Card>
    </Grid>
  );
};

export default AboutCard;
