import { KeyboardArrowUp } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const Backtotop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Button
      sx={{
        position: "fixed",
        right: "20px",
        bottom: "10px",
        backgroundColor: "#999999",
        color: "white",
        "&:hover": {
          backgroundColor: "white",
          color: "black",
        },
      }}
      variant="outlined"
      onClick={() => {
        scrollToTop();
      }}
    >
      <KeyboardArrowUp />
    </Button>
  );
};

export default Backtotop;
