import { useTheme } from "@mui/material/styles";
import React from "react";
import AppbarMobile from "./AppbarMobile";
import Appbardesktop from "./AppbarDesktop";
import { useMediaQuery } from "@mui/material";
const Appbar = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <AppbarMobile /> : <Appbardesktop />}</>;
};

export default Appbar;
