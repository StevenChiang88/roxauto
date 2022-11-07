import React from "react";
import { Button } from "@mui/material";
const Custombutton = (props) => {
  return (
    <Button
      fullWidth={true}
      disableRipple
      variant="contained"
      sx={{
        backgroundColor: `${props.color}`,
        color: "white",
        "&:hover": {
          backgroundColor: "white",
          color: `${props.color}`,
        },
      }}
    >
      {props.content}
    </Button>
  );
};

export default Custombutton;
